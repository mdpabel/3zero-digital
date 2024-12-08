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

type EmailVerificationEmailProps = {
  verificationLink: string; // The verification link that includes the JWT token
};

const EmailVerificationEmailTemplate: React.FC<EmailVerificationEmailProps> = ({
  verificationLink,
}) => {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Heading style={headingStyle}>Verify Your Email Address</Heading>

          {/* Verification Info */}
          <Text style={bodyTextStyle}>
            <strong>Thank you for signing up!</strong> Please click the button
            below to verify your email address and complete the registration
            process.
          </Text>

          <Text style={bodyTextStyle}>
            If you didn't sign up, please ignore this email.
          </Text>

          {/* CTA Button */}
          <Button style={buttonStyle} href={verificationLink}>
            Verify Your Email
          </Button>

          {/* Footer */}
          <Text style={footerTextStyle}>
            If you have any issues or didn’t request this verification, feel
            free to contact us.
          </Text>
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
  color: '#ffffff',
  background: 'linear-gradient(to right, #614385, #516395)', // Gradient color
  padding: '16px',
  borderRadius: '8px',
  textAlign: 'center',
};

const bodyTextStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#666',
  marginBottom: '16px',
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 24px',
  backgroundColor: '#516395', // Gradient Start
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '8px',
  marginTop: '20px',
  fontWeight: 'bold',
  textAlign: 'center',
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#999',
  textAlign: 'center',
  marginTop: '24px',
};

export default EmailVerificationEmailTemplate;
