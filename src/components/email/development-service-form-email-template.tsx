import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Button,
  Heading,
} from '@react-email/components';
import { z } from 'zod';
import { DevelopmentServiceFormSchema } from '@/schema/services/development-service-form-schema';

type BackendSubmissionEmailProps = {
  formData: z.infer<typeof DevelopmentServiceFormSchema>;
};

const DevelopmentServiceFormTemplate: React.FC<BackendSubmissionEmailProps> = ({
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
          {/* Header */}
          <Heading style={headingStyle}>New Project Request</Heading>

          {/* Project Information */}
          <Text style={bodyTextStyle}>
            <strong>Project Type:</strong> {projectType || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Estimated Budget:</strong> {budget || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Project Timeline:</strong> {timeline || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Required Functionalities:</strong>{' '}
            {functionalities?.join(', ') || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Sample Sites:</strong> {sampleSites || 'Not provided'}
          </Text>

          {/* Client Information */}
          <Text style={bodyTextStyle}>
            <strong>Client Name:</strong> {name || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Client Email:</strong> {email || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Additional Details:</strong> {message || 'Not provided'}
          </Text>

          {/* CTA */}
          <Button
            style={buttonStyle}
            href='https://www.3zerodigital.com/admin-dashboard'>
            View Full Submission
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const mainStyle: React.CSSProperties = {
  backgroundColor: '#f8f9fa',
  fontFamily: 'Arial, sans-serif',
  color: '#2D2D2D', // Zinc-like tone
};

const containerStyle: React.CSSProperties = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '0 auto',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const headingStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#614385', // Gradient Color
  marginBottom: '16px',
  textAlign: 'center',
};

const bodyTextStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#666',
  marginBottom: '8px',
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 24px',
  backgroundColor: '#614385', // Gradient Start
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '8px',
  marginTop: '20px',
};

export default DevelopmentServiceFormTemplate;
