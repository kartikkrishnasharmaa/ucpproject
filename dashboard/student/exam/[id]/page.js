'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { examMonitor } from '@/lib/examMonitor';

export default function ExamPage({ params }) {
  const [exam, setExam] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [violations, setViolations] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const res = await fetch(`/api/exams/${params.id}`);
        const data = await res.json();
        
        if (!res.ok) throw new Error(data.error);
        
        setExam(data.exam);
        setQuestions(data.questions);
        
        // Initialize answers
        const initialAnswers = {};
        data.questions.forEach(q => {
          initialAnswers[q._id] = null;
        });
        setAnswers(initialAnswers);
        
        // Calculate time left
        const endTime = new Date(data.exam.endTime).getTime();
        const now = new Date().getTime();
        setTimeLeft(Math.max(0, Math.floor((endTime - now) / 1000 / 60))); // in minutes
      } catch (error) {
        alert(error.message);
        router.push('/dashboard/student');
      }
    };

    fetchExam();
  }, [params.id, router]);

  useEffect(() => {
    if (!exam) return;

    // Start exam monitoring
    examMonitor.startMonitoring(
      localStorage.getItem('userId'),
      params.id,
      (type, count) => {
        setViolations(count);
        if (type === 'AUTO_SUBMIT') {
          handleSubmit();
        }
      }
    );

    // Set up timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 60000); // Update every minute

    return () => {
      examMonitor.endMonitoring(localStorage.getItem('userId'), params.id);
      clearInterval(timer);
    };
  }, [exam, params.id]);

  const handleAnswerSelect = (questionId, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = async () => {
    try {
      const answerArray = Object.entries(answers).map(([questionId, selectedOption]) => ({
        questionId,
        selectedOption,
      }));

      const res = await fetch('/api/exams/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          examId: params.id,
          answers: answerArray,
        }),
      });

      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error);
      
      router.push(`/dashboard/student/results/${params.id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  if (!exam || !questions.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{exam.title}</h1>
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded">
          Time Left: {timeLeft} minutes
        </div>
      </div>
      
      {violations > 0 && (
        <div className="bg-yellow-100 text-yellow-800 p-3 mb-4 rounded">
          Warning: You have {violations} violation(s). {3 - violations} more will auto-submit your exam.
        </div>
      )}
      
      <div className="mb-4">
        <p className="text-gray-700">{exam.description}</p>
        <p className="text-gray-600">Subject: {exam.subject}</p>
      </div>
      
      <div className="space-y-6">
        {questions.map((question, qIndex) => (
          <div key={question._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-3">
              {qIndex + 1}. {question.questionText} 
              <span className="text-sm text-gray-500 ml-2">({question.marks} marks)</span>
            </h3>
            <div className="space-y-2">
              {question.options.map((option, oIndex) => (
                <div key={oIndex} className="flex items-center">
                  <input
                    type="radio"
                    id={`q${qIndex}-o${oIndex}`}
                    name={`q${qIndex}`}
                    checked={answers[question._id] === oIndex}
                    onChange={() => handleAnswerSelect(question._id, oIndex)}
                    className="mr-2"
                  />
                  <label htmlFor={`q${qIndex}-o${oIndex}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
}