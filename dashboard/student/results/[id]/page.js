'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResultPage({ params }) {
  const [result, setResult] = useState(null);
  const [exam, setExam] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await fetch(`/api/exams/${params.id}/results`);
        const data = await res.json();
        
        if (!res.ok) throw new Error(data.error);
        
        // Find the student's specific result
        const studentResult = data.results.find(
          r => r.studentId._id.toString() === localStorage.getItem('userId')
        );
        
        if (!studentResult) {
          throw new Error('Result not found');
        }
        
        setResult(studentResult);
        setExam(data.exam);
        setQuestions(data.questions);
      } catch (error) {
        alert(error.message);
        router.push('/dashboard/student/results');
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!result) {
    return <div className="text-center py-10">No result found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Exam Result: {exam.title}</h1>
      <p className="text-gray-600 mb-6">Subject: {exam.subject}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-medium text-gray-700">Total Marks</h3>
          <p className="text-3xl font-bold text-blue-600">{result.totalMarks}</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-medium text-gray-700">Obtained Marks</h3>
          <p className="text-3xl font-bold text-green-600">{result.obtainedMarks}</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-medium text-gray-700">Percentage</h3>
          <p className="text-3xl font-bold text-purple-600">{result.percentage.toFixed(2)}%</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Question-wise Results</h2>
        
        <div className="space-y-6">
          {questions.map((question, qIndex) => {
            const answer = result.answers.find(a => a.questionId.toString() === question._id.toString());
            
            return (
              <div key={question._id} className={`p-4 border rounded-lg ${
                answer?.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
                <h3 className="font-semibold mb-2">
                  {qIndex + 1}. {question.questionText}
                </h3>
                
                <div className="space-y-2 mb-3">
                  {question.options.map((option, oIndex) => (
                    <div 
                      key={oIndex} 
                      className={`p-2 rounded ${
                        oIndex === question.correctAnswer 
                          ? 'bg-green-100 border border-green-300'
                          : answer?.selectedOption === oIndex
                            ? 'bg-red-100 border border-red-300'
                            : 'bg-gray-50'
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
                
                <div className="text-sm">
                  <p className={answer?.isCorrect ? 'text-green-600' : 'text-red-600'}>
                    {answer?.isCorrect ? 'Correct' : 'Incorrect'} - 
                    Marks: {answer?.isCorrect ? question.marks : 0}/{question.marks}
                  </p>
                  {!answer?.isCorrect && (
                    <p className="text-gray-600 mt-1">
                      Correct answer: {question.options[question.correctAnswer]}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-6">
        <button
          onClick={() => router.push('/dashboard/student/results')}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Back to Results
        </button>
      </div>
    </div>
  );
}