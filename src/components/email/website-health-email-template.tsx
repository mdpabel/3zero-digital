import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Button,
  Img,
} from '@react-email/components';

interface WebsiteHealthEmailProps {
  name: string;
  websiteUrl: string;
  email: string;
  blacklistVendors?: string[];
  isInfected: boolean;
  hasSeoIssues: boolean;
  performanceScore?: number;
  additionalNotes?: string;
  id: string;
}

const WebsiteHealthEmail: React.FC<WebsiteHealthEmailProps> = ({
  name,
  websiteUrl,
  blacklistVendors = [],
  isInfected,
  hasSeoIssues,
  performanceScore,
  additionalNotes,
  id,
}) => {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>🌐 Website Health Report</Heading>

          <Text style={textStyle}>Hi {name},</Text>

          {additionalNotes && <Text style={textStyle}>{additionalNotes}</Text>}

          <Text style={couponMessage}>
            Use code <strong>OFF50</strong> to get 50% off all services –
            limited time only!
          </Text>

          <Text style={textStyle}>
            Here's a quick summary for <strong>{websiteUrl}</strong>:
          </Text>

          <ul style={listStyle}>
            {blacklistVendors.length > 0 && (
              <li>
                <strong>Blacklisted by:</strong> {blacklistVendors.join(', ')}
              </li>
            )}
            <li>
              <strong>Infected with malware:</strong>{' '}
              {isInfected ? 'Yes' : 'No'}
            </li>
            <li>
              <strong>SEO Issues Found:</strong> {hasSeoIssues ? 'Yes' : 'No'}
            </li>
            <li>
              <strong>Performance Score:</strong>{' '}
              {performanceScore ?? 'Not Available'}
            </li>
          </ul>

          <Button
            style={buttonStyle}
            href={`https://www.3zerodigital.com/me/website-health-report/`}>
            Explore Full Website Audit
          </Button>

          <Text style={textStyle}>We recommend the following services:</Text>

          {isInfected && (
            <Button
              style={buttonStyle}
              href='https://www.3zerodigital.com/wordpress-malware-removal'>
              Malware Removal Service
            </Button>
          )}

          {performanceScore !== undefined && performanceScore < 50 && (
            <Button
              style={buttonStyle}
              href='https://www.3zerodigital.com/wordpress-speed-optimization'>
              Speed Optimization Service
            </Button>
          )}

          {blacklistVendors.length > 0 && (
            <Button
              style={buttonStyle}
              href='https://www.3zerodigital.com/blacklist-removal'>
              Blacklist Removal Service
            </Button>
          )}

          {hasSeoIssues && (
            <Button
              style={buttonStyle}
              href='https://www.3zerodigital.com/seo-optimization'>
              SEO Optimization Service
            </Button>
          )}

          <Button
            style={buttonStyle}
            href='https://www.3zerodigital.com/ongoing-wordpress-maintenance'>
            Ongoing Security Maintenance
          </Button>

          <Img
            alt='Email tracker'
            height={1}
            width={1}
            src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/track-email?id=${id}`}
          />
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const mainStyle: React.CSSProperties = {
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

const couponMessage: React.CSSProperties = {
  background: '#ffffff22',
  fontSize: '16px',
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '5px',
  textAlign: 'center',
  fontWeight: 'bold',
  margin: '16px 0',
};

const listStyle: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '16px',
  paddingLeft: '20px',
  lineHeight: '24px',
  marginBottom: '16px',
};

const buttonStyle: React.CSSProperties = {
  display: 'block',
  padding: '12px 24px',
  backgroundColor: '#ffffff',
  color: '#614385',
  textDecoration: 'none',
  borderRadius: '8px',
  textAlign: 'center',
  marginTop: '10px',
  fontWeight: 'bold',
};

export default WebsiteHealthEmail;
