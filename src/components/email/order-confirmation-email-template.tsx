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

type OrderConfirmationEmailProps = {
  customerName: string;
  productName: string;
  productPrice: string;
  orderId: string;
};

const OrderConfirmationEmailTemplate: React.FC<OrderConfirmationEmailProps> = ({
  customerName,
  productName,
  productPrice,
  orderId,
}) => {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Heading style={headingStyle}>Order Confirmation</Heading>

          {/* Customer Greeting */}
          <Text style={bodyTextStyle}>Hi {customerName},</Text>

          {/* Order Details */}
          <Text style={bodyTextStyle}>
            Thank you for your order! We have received your order and it is now
            being processed.
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Order ID:</strong> {orderId}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Product Name:</strong> {productName}
          </Text>
          <Text style={bodyTextStyle}>
            <strong>Price:</strong> {Number(productPrice).toFixed(2)}
          </Text>

          {/* CTA */}
          <Button
            style={buttonStyle}
            href={`https://www.3zerodigital.com/me/orders/${orderId}`}>
            View Order Details
          </Button>

          {/* Footer */}
          <Text style={footerTextStyle}>
            If you have any questions about your order, please contact us at
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
  display: 'inline-block',
  padding: '12px 24px',
  backgroundColor: 'linear-gradient(to right, #614385, #516395)',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '8px',
  textAlign: 'center',
  marginTop: '20px',
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '20px',
  color: '#888',
  marginTop: '20px',
  textAlign: 'center',
};

const linkStyle: React.CSSProperties = {
  color: '#3b82f6',
  textDecoration: 'none',
};

export default OrderConfirmationEmailTemplate;
