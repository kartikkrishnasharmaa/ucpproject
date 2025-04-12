import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import Exam from '@/models/Exam';
import dbConnect from '@/lib/dbConnect';

export async function POST(request) {
  await dbConnect();

  try {
    const teacher = await requireAuth(request, 'teacher');
    const examData = await request.json();

    const exam = new Exam({
      ...examData,
      createdBy: teacher._id,
    });

    await exam.save();

    return NextResponse.json(exam);

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}