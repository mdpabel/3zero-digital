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
import { htmlCssFormSchema } from '@/schema/services/html-css-static';

type HtmlCssSubmissionEmailProps = {
  formData: z.infer<typeof htmlCssFormSchema>;
};

const HtmlCssSubmissionEmail: React.FC<HtmlCssSubmissionEmailProps> = ({
  formData,
}) => {
  const {
    websiteType,
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
            New HTML/CSS Static Website Submission
          </Heading>

          <Text style={bodyTextStyle}>
            <strong>Website Type:</strong> {websiteType}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Budget:</strong> {budget}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Timeline:</strong> {timeline}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Functionalities:</strong> {functionalities?.join(', ')}
          </Text>
          {sampleSites && (
            <Text style={bodyTextStyle}>
              <strong>Sample Sites/Links:</strong> {sampleSites}
            </Text>
          )}
          <Text style={bodyTextStyle}>
            <strong>Client Name:</strong> {name}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Client Email:</strong> {email}
          </Text>
          {message && (
            <Text style={bodyTextStyle}>
              <strong>Message:</strong> {message}
            </Text>
          )}
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

export default HtmlCssSubmissionEmail;
