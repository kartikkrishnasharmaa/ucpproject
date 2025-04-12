import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import Teacher from '@/models/Teacher';
import Student from '@/models/Student';
import dbConnect from '@/lib/dbConnect';

export async function POST(request) {
  await dbConnect();

  const { name, email, password, role, additionalData } = await request.json();

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    // Create role-specific document
    if (role === 'teacher') {
      const teacher = new Teacher({
        userId: user._id,
        subjects: additionalData.subjects || [],
        createdBy: additionalData.createdBy,
      });
      await teacher.save();
    } else if (role === 'student') {
      const student = new Student({
        userId: user._id,
        rollNumber: additionalData.rollNumber,
        class: additionalData.class,
        createdBy: additionalData.createdBy,
      });
      await student.save();
    }

    return NextResponse.json({ success: true, userId: user._id });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}