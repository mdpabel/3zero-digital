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

type ResetPasswordEmailProps = {
  name: string;
  resetLink: string;
};

const ResetPasswordEmailTemplate: React.FC<ResetPasswordEmailProps> = ({
  name,
  resetLink,
}) => {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>🔐 Password Reset Request</Heading>

          <Text style={textStyle}>Hello {name},</Text>

          <Text style={textStyle}>
            We received a request to reset your password. Click the button below
            to continue:
          </Text>

          <Button style={buttonStyle} href={resetLink}>
            Reset Your Password
          </Button>

          <Text style={textStyle}>
            If you didn't request this, you can safely ignore this email. Your
            password will remain unchanged.
          </Text>

          <Text style={footerTextStyle}>
            Best regards,
            <br />
            The 3Zero Digital Team
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

const footerTextStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#eeeeee',
  marginTop: '20px',
  textAlign: 'left',
};

export default ResetPasswordEmailTemplate;
