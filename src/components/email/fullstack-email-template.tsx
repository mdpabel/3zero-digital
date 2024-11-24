import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
} from '@react-email/components';
import { z } from 'zod';
import { fullStackFormSchema } from '@/schema/services/full-stack-form-schema';

type FullstackSubmissionEmailProps = {
  formData: z.infer<typeof fullStackFormSchema>;
};

const FullstackSubmissionEmail: React.FC<FullstackSubmissionEmailProps> = ({
  formData,
}) => {
  const {
    projectType,
    budget,
    timeline,
    functionalities,
    sampleSites,
    name,
    email,
    message,
  } = formData;

  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>
            New Fullstack Project Submission
          </Heading>

          <Text style={bodyTextStyle}>
            <strong>Project Type:</strong> {projectType || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Estimated Budget:</strong> {budget || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Timeline:</strong> {timeline || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Required Functionalities:</strong>{' '}
            {functionalities?.join(', ') || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Sample Sites:</strong> {sampleSites || 'Not provided'}
          </Text>

          <Text style={bodyTextStyle}>
            <strong>Client Name:</strong> {name || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Client Email:</strong> {email || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Additional Details:</strong> {message || 'Not provided'}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const mainStyle: React.CSSProperties = {
  backgroundColor: '#f4f4f4',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
};

const containerStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '20px auto',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const headingStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#516395', // Gradient-inspired shade
  marginBottom: '20px',
  textAlign: 'center',
};

const bodyTextStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#555',
  marginBottom: '10px',
};

export default FullstackSubmissionEmail;
