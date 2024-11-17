import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Button,
} from '@react-email/components';

type ContactUsEmailProps = {
  name: string;
  email: string;
  inquiryType: string;
  message?: string;
};

const ContactUsEmailTemplate: React.FC<ContactUsEmailProps> = ({
  name,
  email,
  inquiryType,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Heading style={headingStyle}>New Contact Us Submission</Heading>

          {/* User Details */}
          <Text style={bodyTextStyle}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Inquiry Type:</strong> {inquiryType}
          </Text>

          {/* Message */}
          {message && (
            <Text style={bodyTextStyle}>
              <strong>Message:</strong> {message}
            </Text>
          )}

          {/* CTA */}
          <Button
            style={buttonStyle}
            href='https://3zerodigital.com/admin-dashboard'>
            View Full Submission
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const mainStyle: React.CSSProperties = {
  backgroundColor: '#f9f9f9',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
};

const containerStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '0 auto',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const headingStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#3b82f6',
  marginBottom: '16px',
  textAlign: 'center',
};

const bodyTextStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#555',
  marginBottom: '12px',
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 24px',
  backgroundColor: '#3b82f6',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '8px',
  textAlign: 'center',
  marginTop: '20px',
};

export default ContactUsEmailTemplate;
