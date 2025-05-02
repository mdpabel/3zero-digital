import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
} from '@react-email/components';

type UserConfirmationEmailProps = {
  name: string;
};

const UserConfirmationEmail: React.FC<UserConfirmationEmailProps> = ({
  name,
}) => {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>✅ We Received Your Message</Heading>

          <Text style={textStyle}>Hi {name},</Text>
          <Text style={textStyle}>
            Thank you for reaching out to 3Zero Digital. We've received your
            project details and our team will review them shortly.
          </Text>
          <Text style={textStyle}>
            We'll get back to you soon to discuss the next steps. In the
            meantime, feel free to reply to this email if you have questions or
            more info.
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

const footerTextStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#eeeeee',
  marginTop: '20px',
  textAlign: 'left',
};

export default UserConfirmationEmail;
