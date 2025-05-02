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
  verificationLink: string;
};

const EmailVerificationEmailTemplate: React.FC<EmailVerificationEmailProps> = ({
  verificationLink,
}) => {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>🔒 Verify Your Email</Heading>

          <Text style={textStyle}>
            <strong>Thank you for signing up!</strong> Please verify your email
            to complete your registration and activate your account.
          </Text>

          <Button style={buttonStyle} href={verificationLink}>
            Verify Your Email
          </Button>

          <Text style={textStyle}>
            If you didn't sign up or received this by mistake, you can ignore
            this message.
          </Text>

          <Text style={footerTextStyle}>
            Need help? Contact us at
            <a href='mailto:support@3zerodigital.com' style={linkStyle}>
              {' '}
              support@3zerodigital.com
            </a>
            .
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
  marginTop: '20px',
  fontWeight: 'bold',
  textAlign: 'center',
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#eeeeee',
  textAlign: 'center',
  marginTop: '24px',
};

const linkStyle: React.CSSProperties = {
  color: '#ffffff',
  textDecoration: 'underline',
};

export default EmailVerificationEmailTemplate;
