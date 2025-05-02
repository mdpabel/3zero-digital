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

type SetPasswordEmailProps = {
  name: string;
  setPasswordLink: string;
};

const SetPasswordEmailTemplate: React.FC<SetPasswordEmailProps> = ({
  name,
  setPasswordLink,
}) => {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>🔐 Welcome! Set Your Password</Heading>

          <Text style={textStyle}>Hello {name},</Text>

          <Text style={textStyle}>
            We've created your account. To get started, please set your password
            by clicking the button below:
          </Text>

          <Button style={buttonStyle} href={setPasswordLink}>
            Set Your Password
          </Button>

          <Text style={textStyle}>
            After setting your password, you’ll be able to log in and manage
            your orders anytime.
          </Text>

          <Text style={footerTextStyle}>
            Welcome aboard,
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

export default SetPasswordEmailTemplate;
