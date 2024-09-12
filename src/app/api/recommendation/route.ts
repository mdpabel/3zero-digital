import { NextRequest, NextResponse } from 'next/server';
import { OpenAIStream, StreamingTextResponse } from 'ai'; // Vercel AI SDK
import OpenAI from 'openai';

// Create a new instance of the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure you have your OpenAI API key in the environment variables
});

// Define the POST handler for the recommendation API route
export async function POST(req: NextRequest) {
  try {
    // Parse the input data from the request body
    const { messages } = await req.json();

    // Check if the messages array and the user's content are provided
    if (!messages || !messages[0]?.content) {
      return NextResponse.json(
        { error: 'Input description is required.' },
        { status: 400 },
      );
    }

    // Extract the user's input from the messages array
    const userInput = messages[0].content;

    // Call the OpenAI API to generate a recommendation
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // or any other model you prefer
      messages: [
        {
          role: 'system',
          content:
            'You are an AI that recommends services based on the client’s input. Available services include development, maintenance, troubleshooting, and marketing.',
        },
        {
          role: 'user',
          content: `Recommend the best service based on the following client input: "${userInput}"`,
        },
      ],
      temperature: 0.7, // Adjust the temperature for more creative or focused responses
    });

    // Stream the response back to the client using OpenAIStream and StreamingTextResponse
    const stream = OpenAIStream(response); // Convert the OpenAI response to a stream
    return new StreamingTextResponse(stream); // Stream the response back to the client
  } catch (error) {
    console.error('Error in recommendation route:', error);
    // Handle any errors
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 },
    );
  }
}
