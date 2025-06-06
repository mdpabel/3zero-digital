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
          <Heading style={headingStyle}>📩 New Contact Us Submission</Heading>

          {/* Contact Details */}
          <Text style={textStyle}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={textStyle}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={textStyle}>
            <strong>Inquiry Type:</strong> {inquiryType}
          </Text>

          {/* Message */}
          {message && (
            <Text style={textStyle}>
              <strong>Message:</strong> {message}
            </Text>
          )}

          {/* CTA */}
          <Button
            style={buttonStyle}
            href='https://www.3zerodigital.com/admin-dashboard'>
            View Submission
          </Button>
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
  marginBottom: '16px',
  textAlign: 'center',
  color: '#ffffff',
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

export default ContactUsEmailTemplate;
