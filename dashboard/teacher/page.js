'use client';
import { useEffect, useState } from 'react';
import { requireAuth } from '@/lib/auth';

export default function TeacherDashboard() {
  const [stats, setStats] = useState({
    students: 0,
    exams: 0,
    results: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await requireAuth('teacher');
        
        const [studentsRes, examsRes, resultsRes] = await Promise.all([
          fetch('/api/teacher/students'),
          fetch('/api/teacher/exams'),
          fetch('/api/teacher/results'),
        ]);

        const students = await studentsRes.json();
        const exams = await examsRes.json();
        const results = await resultsRes.json();

        setStats({
          students: students.length,
          exams: exams.length,
          results: results.length,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Teacher Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">Students</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{stats.students}</p>
          <a href="/dashboard/teacher/students" className="text-blue-500 text-sm hover:underline mt-4 inline-block">
            View all students
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">Exams</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">{stats.exams}</p>
          <a href="/dashboard/teacher/exams" className="text-blue-500 text-sm hover:underline mt-4 inline-block">
            View all exams
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">Results</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">{stats.results}</p>
          <a href="/dashboard/teacher/results" className="text-blue-500 text-sm hover:underline mt-4 inline-block">
            View all results
          </a>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="flex space-x-4">
          <a
            href="/dashboard/teacher/exams/create"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Exam
          </a>
          <a
            href="/dashboard/teacher/students/create"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Add Student
          </a>
        </div>
      </div>
    </div>
  );
}