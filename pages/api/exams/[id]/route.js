import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import Exam from '@/models/Exam';
import Question from '@/models/Question';
import Result from '@/models/Result';
import dbConnect from '@/lib/dbConnect';

export async function GET(request, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    const user = await requireAuth(request);
    const exam = await Exam.findById(id);

    if (!exam) {
      return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
    }

    // Check if user is the creator or a student with access
    if (user.role === 'teacher' && exam.createdBy.toString() !== user._id.toString()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const questions = await Question.find({ examId: id });
    const results = user.role === 'teacher' 
      ? await Result.find({ examId: id }).populate('studentId', 'name email')
      : await Result.find({ examId: id, studentId: user._id });

    return NextResponse.json({
      exam,
      questions,
      results,
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    const teacher = await requireAuth(request, 'teacher');
    const examData = await request.json();

    const exam = await Exam.findById(id);

    if (!exam) {
      return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
    }

    if (exam.createdBy.toString() !== teacher._id.toString()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const updatedExam = await Exam.findByIdAndUpdate(id, examData, { new: true });

    return NextResponse.json(updatedExam);

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    const teacher = await requireAuth(request, 'teacher');
    const exam = await Exam.findById(id);

    if (!exam) {
      return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
    }

    if (exam.createdBy.toString() !== teacher._id.toString()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await Exam.findByIdAndDelete(id);
    await Question.deleteMany({ examId: id });
    await Result.deleteMany({ examId: id });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}