import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import User from '@/models/User';
import Teacher from '@/models/Teacher';
import dbConnect from '@/lib/dbConnect';

export async function GET(request) {
  await dbConnect();

  try {
    const admin = await requireAuth(request, 'superadmin');
    
    const teachers = await Teacher.find({ createdBy: admin._id })
      .populate('userId', 'name email')
      .exec();

    return NextResponse.json(teachers);

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}

export async function POST(request) {
  await dbConnect();

  try {
    const admin = await requireAuth(request, 'superadmin');
    const { name, email, password, subjects } = await request.json();

    // Create teacher user
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role: 'teacher',
        additionalData: {
          subjects,
          createdBy: admin._id,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error }, { status: response.status });
    }

    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}