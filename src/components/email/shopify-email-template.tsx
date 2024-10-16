import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
} from '@react-email/components';
import { z } from 'zod';
import { shopifyFormSchema } from '@/schema/services/shopify-form-schema';

type ShopifySubmissionEmailProps = {
  formData: z.infer<typeof shopifyFormSchema>;
};

const ShopifySubmissionEmail: React.FC<ShopifySubmissionEmailProps> = ({
  formData,
}) => {
  const {
    storeType,
    budget,
    products,
    timeline,
    functionalities,
    sampleSites,
    name,
    email,
    message,
  } = formData;

  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>
            New Shopify Store Project Submission
          </Heading>

          <Text style={bodyTextStyle}>
            <strong>Store Type:</strong> {storeType || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Estimated Budget:</strong> {budget || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Number of Products:</strong> {products || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Timeline:</strong> {timeline || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Required Functionalities:</strong>{' '}
            {functionalities?.join(', ') || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Sample Sites:</strong> {sampleSites || 'Not provided'}
          </Text>

          <Text style={bodyTextStyle}>
            <strong>Client Name:</strong> {name || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Client Email:</strong> {email || 'Not provided'}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Additional Details:</strong> {message || 'Not provided'}
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

export default ShopifySubmissionEmail;
