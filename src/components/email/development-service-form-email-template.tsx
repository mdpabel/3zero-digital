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
          <Heading style={headingStyle}>
            🧩 New Development Service Request
          </Heading>

          {/* Project Info */}
          <Text style={textStyle}>
            <strong>Project Type:</strong> {projectType || 'Not provided'}
          </Text>
          <Text style={textStyle}>
            <strong>Estimated Budget:</strong> {budget || 'Not provided'}
          </Text>
          <Text style={textStyle}>
            <strong>Timeline:</strong> {timeline || 'Not provided'}
          </Text>
          <Text style={textStyle}>
            <strong>Functionalities:</strong>{' '}
            {functionalities?.length
              ? functionalities.join(', ')
              : 'Not provided'}
          </Text>
          <Text style={textStyle}>
            <strong>Sample Sites:</strong> {sampleSites || 'Not provided'}
          </Text>

          {/* Client Info */}
          <Text style={textStyle}>
            <strong>Client Name:</strong> {name || 'Not provided'}
          </Text>
          <Text style={textStyle}>
            <strong>Client Email:</strong> {email || 'Not provided'}
          </Text>
          <Text style={textStyle}>
            <strong>Additional Details:</strong> {message || 'Not provided'}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const mainStyle: React.CSSProperties = {
  backgroundColor: '#614385',
  backgroundImage: 'linear-gradient(to right, #614385, #516395)',
  fontFamily: 'Arial, sans-serif',
  padding: '20px 0',
};

const containerStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '0 auto',
  color: '#ffffff',
};

const headingStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#ffffff',
  marginBottom: '16px',
  textAlign: 'center',
};

const textStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#ffffff',
  marginBottom: '12px',
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 24px',
  backgroundColor: '#ffffff',
  color: '#614385',
  textDecoration: 'none',
  borderRadius: '8px',
  textAlign: 'center',
  marginTop: '20px',
  fontWeight: 'bold',
};

export default DevelopmentServiceFormTemplate;
