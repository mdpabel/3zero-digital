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
          {/* Header */}
          <Heading style={headingStyle}>Password Reset Request</Heading>

          {/* User Details */}
          <Text style={bodyTextStyle}>Hello {name},</Text>

          <Text style={bodyTextStyle}>
            We received a request to reset your password. To proceed with the
            password reset, please click the button below:
          </Text>

          {/* Reset Password Link */}
          <Button style={buttonStyle} href={resetLink}>
            Reset Your Password
          </Button>

          <Text style={bodyTextStyle}>
            If you did not request this, please ignore this email. Your password
            will not be changed.
          </Text>

          <Text style={bodyTextStyle}>
            Best regards,
            <br />
            The Team
          </Text>
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
  color: '#614385',
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
  background: 'linear-gradient(to right, #614385, #516395)',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '8px',
  textAlign: 'center',
  marginTop: '20px',
};

export default ResetPasswordEmailTemplate;
