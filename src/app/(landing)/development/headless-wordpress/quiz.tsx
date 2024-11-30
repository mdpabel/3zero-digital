'use client';
import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const Quiz = () => {
  // State variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);

  // List of questions
  const questions: Question[] = [
    {
      question: 'Is your Lighthouse performance score 98% or higher?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      question:
        'Does your website’s initial page load happen in under 1.8 seconds?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      question: 'Is your website optimized for Core Web Vitals?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      question:
        'Do you use a Content Delivery Network (CDN) for faster global content delivery?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      question: 'Is your website fully responsive and mobile-friendly?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      question: 'Have you implemented SSL (HTTPS) across your entire website?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      question:
        'Is your website built using a modern technologies (like React, Nextjs), scalable architecture?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      question:
        "Is your website's design modern and in line with current web design trends?",
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      question:
        'Is your website optimized to rank higher on search engines like Google?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
  ];

  // Handle user's answer and move to next question or show results
  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  // Reset quiz state
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCompleted(false);
  };

  const year = new Date().getFullYear();

  return (
    <section className='py-16'>
      <div className='mx-auto px-4 container-xl'>
        <h2 className='mb-8 font-semibold text-3xl text-center text-zinc-800 dark:text-zinc-200'>
          Is Your Website Ready for {year}? Take Our 30-Second Quiz!
        </h2>

        {!completed ? (
          <div className='flex flex-col items-center gap-8'>
            <div className='bg-white dark:bg-zinc-900 shadow-lg px-8 py-12 rounded-lg w-full md:max-w-xl'>
              <h3 className='font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
                {questions[currentQuestionIndex].question}
              </h3>
              <div className='flex justify-around mt-4'>
                {questions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      className='px-8 py-2 rounded-full text-white primary-color'
                      onClick={() => handleAnswer(option)}>
                      {option}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className='text-center'>
            <h3 className='font-semibold text-2xl text-zinc-800 dark:text-zinc-200'>
              Your Score: {score} / {questions.length}
            </h3>
            <p className='mt-4 text-zinc-600 dark:text-zinc-300'>
              {score === questions.length
                ? `Great job! Your website is ready for ${year}!`
                : `Your website could benefit from some updates to get ready for ${year}.`}
            </p>

            <div className='mt-8'>
              {score === questions.length ? (
                <button
                  className='px-6 py-2 rounded-full text-white primary-color'
                  onClick={() => (window.location.href = '/')}>
                  Get Started with Headless
                </button>
              ) : (
                <div>
                  <button
                    className='px-6 py-2 rounded-full text-white primary-color'
                    onClick={() => (window.location.href = '/')}>
                    Request a Free Consultation
                  </button>
                  <p className='mt-4 text-zinc-600 dark:text-zinc-300'>
                    Your website could benefit from our modern web services.
                    Contact us today to optimize your performance and prepare
                    for {year}.
                  </p>
                </div>
              )}
            </div>

            <div className='mt-8'>
              <button className='text-indigo-600' onClick={handleRestart}>
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
