import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
} from '@react-email/components';

// Define types for user confirmation email
type UserConfirmationEmailProps = {
  name: string;
  projectType: string;
};

const UserConfirmationEmail: React.FC<UserConfirmationEmailProps> = ({
  name,
  projectType,
}) => {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>
            We Received Your {projectType} Project Submission
          </Heading>

          <Text style={bodyTextStyle}>Hi {name},</Text>
          <Text style={bodyTextStyle}>
            Thank you for submitting your {projectType} project to 3Zero
            Digital. Our team has received your project details and will review
            them shortly. We’ll be in touch soon to discuss your project in more
            detail.
          </Text>

          <Text style={bodyTextStyle}>
            In the meantime, if you have any questions or need to provide
            additional information, feel free to reply to this email.
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
  color: '#614385', // From gradient color
  marginBottom: '16px',
  textAlign: 'center',
};

const bodyTextStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#666',
  marginBottom: '8px',
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#888',
  marginTop: '20px',
};

export default UserConfirmationEmail;
