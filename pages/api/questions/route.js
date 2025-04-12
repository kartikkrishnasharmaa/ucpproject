import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import Question from '@/models/Question';
import Exam from '@/models/Exam';
import dbConnect from '@/lib/dbConnect';

export async function POST(request) {
  await dbConnect();

  try {
    const teacher = await requireAuth(request, 'teacher');
    const { examId, questions } = await request.json();

    const exam = await Exam.findById(examId);

    if (!exam) {
      return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
    }

    if (exam.createdBy.toString() !== teacher._id.toString()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Delete existing questions
    await Question.deleteMany({ examId });

    // Insert new questions
    const questionDocs = questions.map(q => ({
      examId,
      questionText: q.questionText,
      options: q.options,
      correctAnswer: q.correctAnswer,
      marks: q.marks || 1,
    }));

    const insertedQuestions = await Question.insertMany(questionDocs);

    return NextResponse.json(insertedQuestions);

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}