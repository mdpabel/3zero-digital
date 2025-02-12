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

// Props Type
interface WebsiteHealthEmailProps {
  name: string;
  websiteUrl: string;
  email: string;
  blacklistVendors?: string[];
  isInfected: boolean;
  hasSeoIssues: boolean;
  performanceScore?: number;
  additionalNotes?: string;
}

const WebsiteHealthEmail: React.FC<WebsiteHealthEmailProps> = ({
  name,
  websiteUrl,
  blacklistVendors = [],
  isInfected,
  hasSeoIssues,
  performanceScore,
  additionalNotes,
}) => {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>Website Health Report</Heading>
          <Text style={bodyTextStyle}>Hi {name},</Text>

          {additionalNotes && (
            <Text style={bodyTextStyle}>{additionalNotes}</Text>
          )}

          <Text style={bodyTextStyle}>
            Here’s a quick summary of your website health for{' '}
            <strong>{websiteUrl}</strong>:
          </Text>

          <ul>
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

          <Text style={bodyTextStyle}>
            Based on our analysis, we recommend the following services:
          </Text>

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
            Ongoing Maintenance
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const mainStyle: React.CSSProperties = {
  background: 'linear-gradient(to right, #614385, #516395)',
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
  display: 'block',
  padding: '12px 24px',
  background: 'linear-gradient(to right, #614385, #516395)',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '8px',
  textAlign: 'center',
  marginTop: '10px',
};

export default WebsiteHealthEmail;
