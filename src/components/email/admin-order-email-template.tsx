import { Html } from '@react-email/html';
import { Heading } from '@react-email/heading';
import { Text } from '@react-email/text';
import { Section } from '@react-email/section';
import { Container } from '@react-email/container';

type OrderPlacedEmailProps = {
  customerName: string;
  orderId: string;
  orderDate: string;
  items: { name: string; quantity: number; price: string }[];
  totalAmount: string;
};

export const AdminOrderPlacedEmail = ({
  customerName,
  orderId,
  orderDate,
  items,
  totalAmount,
}: OrderPlacedEmailProps) => {
  return (
    <Html>
      <Container
        style={{
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          background: '#614385',
          backgroundImage: 'linear-gradient(to right, #614385, #516395)',
          color: '#ffffff',
          borderRadius: '8px',
        }}>
        <Heading style={{ color: '#ffffff' }}>🛒 New Order Placed</Heading>
        <Text>
          <strong>Customer:</strong> {customerName} <br />
          <strong>Order ID:</strong> {orderId} <br />
          <strong>Date:</strong> {orderDate}
        </Text>

        <Section style={{ marginTop: '20px' }}>
          <Heading as='h3' style={{ color: '#ffffff' }}>
            Items:
          </Heading>
          {items.map((item, index) => (
            <Text key={index}>
              {item.name} x {item.quantity} - {item.price}
            </Text>
          ))}
        </Section>

        <Text style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Total: {totalAmount}
        </Text>
      </Container>
    </Html>
  );
};

export default AdminOrderPlacedEmail;
