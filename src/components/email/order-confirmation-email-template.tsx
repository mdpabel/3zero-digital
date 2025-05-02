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
          <Heading style={headingStyle}>🛒 Order Confirmed</Heading>

          <Text style={textStyle}>Hello {customerName},</Text>

          <Text style={textStyle}>
            Thank you for your purchase! Your order has been successfully
            placed.
          </Text>

          <Text style={textStyle}>
            <strong>Order ID:</strong> {orderId} <br />
            <strong>Product:</strong> {productName} <br />
            <strong>Price:</strong> ${Number(productPrice).toFixed(2)}
          </Text>

          <Button
            style={buttonStyle}
            href={`https://www.3zerodigital.com/me/orders/${orderId}`}>
            View Your Order
          </Button>

          <Text style={footerTextStyle}>
            If you have any questions, reach us at
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

// Gradient background and white text
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
  marginBottom: '16px',
  textAlign: 'center',
  color: '#ffffff',
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
  lineHeight: '20px',
  color: '#eeeeee',
  marginTop: '20px',
  textAlign: 'center',
};

const linkStyle: React.CSSProperties = {
  color: '#ffffff',
  textDecoration: 'underline',
};

export default OrderConfirmationEmailTemplate;
