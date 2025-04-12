import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import Result from '@/models/Result';
import Exam from '@/models/Exam';
import Question from '@/models/Question';
import dbConnect from '@/lib/dbConnect';

export async function POST(request) {
  await dbConnect();

  try {
    const student = await requireAuth(request, 'student');
    const { examId, answers } = await request.json();

    const exam = await Exam.findById(examId);

    if (!exam) {
      return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
    }

    // Check if exam is still active
    if (new Date() > new Date(exam.endTime)) {
      return NextResponse.json({ error: 'Exam has ended' }, { status: 400 });
    }

    // Check if student has already submitted
    const existingResult = await Result.findOne({ examId, studentId: student._id });
    if (existingResult) {
      return NextResponse.json({ error: 'You have already submitted this exam' }, { status: 400 });
    }

    // Get all questions for this exam
    const questions = await Question.find({ examId });

    // Calculate results
    let totalMarks = 0;
    let obtainedMarks = 0;
    const answerDetails = [];

    questions.forEach(question => {
      totalMarks += question.marks;
      
      const studentAnswer = answers.find(a => a.questionId === question._id.toString());
      const isCorrect = studentAnswer && studentAnswer.selectedOption === question.correctAnswer;
      
      if (isCorrect) {
        obtainedMarks += question.marks;
      }

      answerDetails.push({
        questionId: question._id,
        selectedOption: studentAnswer?.selectedOption,
        isCorrect,
        marksObtained: isCorrect ? question.marks : 0,
      });
    });

    const percentage = (obtainedMarks / totalMarks) * 100;

    // Save result
    const result = new Result({
      examId,
      studentId: student._id,
      answers: answerDetails,
      totalMarks,
      obtainedMarks,
      percentage,
    });

    await result.save();

    return NextResponse.json(result);

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}