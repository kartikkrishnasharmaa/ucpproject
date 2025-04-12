'use client';
import { useEffect, useState } from 'react';
import { requireAuth } from '@/lib/auth';

export default function StudentDashboard() {
  const [stats, setStats] = useState({
    upcomingExams: 0,
    completedExams: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await requireAuth('student');
        
        const examsRes = await fetch('/api/student/exams');
        const resultsRes = await fetch('/api/student/results');

        const exams = await examsRes.json();
        const results = await resultsRes.json();

        const now = new Date();
        const upcomingExams = exams.filter(exam => new Date(exam.startTime) > now).length;
        const completedExams = results.length;

        setStats({
          upcomingExams,
          completedExams,
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
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">Upcoming Exams</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{stats.upcomingExams}</p>
          <a href="/dashboard/student/exams" className="text-blue-500 text-sm hover:underline mt-4 inline-block">
            View all exams
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">Completed Exams</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">{stats.completedExams}</p>
          <a href="/dashboard/student/results" className="text-blue-500 text-sm hover:underline mt-4 inline-block">
            View all results
          </a>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Results</h2>
        <p className="text-gray-600">Your recent exam results will appear here.</p>
      </div>
    </div>
  );
}