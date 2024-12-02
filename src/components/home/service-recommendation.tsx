'use client';
import { useChat } from 'ai/react';
import FormButton from '../common/form-button';

const ServiceRecommendationTool = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: '/api/recommendation', // This should be the API endpoint
    });

  return (
    <div className='px-4 md:px-10 py-10'>
      <h2 className='mb-16 font-bold text-4xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
        Find the Perfect Solution for Your Website Needs
      </h2>

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
        {/* First Column: Chat Box */}
        <div className='bg-gray-100 dark:bg-gray-800 shadow-lg p-8 rounded-lg'>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form behavior
              handleSubmit(e); // Pass the form submit event to handleSubmit
            }}
            className='space-y-4'>
            <label className='block text-gray-700 text-lg dark:text-white'>
              Describe your website issue or need:
            </label>
            <textarea
              rows={4}
              className='bg-white dark:bg-gray-900 p-4 rounded-md w-full text-gray-900 dark:text-white'
              placeholder='e.g., "My website is slow", "I’m facing malware issues", etc.'
              value={input} // Bind input value to the textarea
              onChange={handleInputChange} // Update the input value
            />

            <FormButton>
              {isLoading ? 'Loading...' : 'Get Recommendation'}
            </FormButton>

            {error && <p className='mt-4 text-red-500'>{error.message}</p>}
          </form>
        </div>

        {/* Second Column: Output */}
        <div className='bg-gray-200 dark:bg-gray-900 shadow-lg p-8 rounded-lg'>
          <h3 className='mb-4 font-semibold text-lg text-zinc-800 dark:text-zinc-200'>
            AI-Powered Service Recommendations
          </h3>
          {messages.length > 0 ? (
            <div className='space-y-2'>
              {messages.map((message, index) => (
                <div key={index} className='mb-2'>
                  <strong>{message.role === 'user' ? 'You: ' : 'AI: '}</strong>
                  <span>{message.content}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-gray-700 dark:text-gray-400'>
              Our AI will recommend tailored services based on your input. From
              development to troubleshooting, we have the right solution for
              your website.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceRecommendationTool;
