'use client';
import React, { useState } from 'react';
import TicketList from './ticket-list';
import CreateTicket from './create-ticket';
import TicketDetail from './ticket-details';
import { Button } from '@/components/ui/button';
import { FaArrowLeft } from 'react-icons/fa';

// Mock data for demonstration
const mockTickets = [
  {
    id: '1',
    title: 'Website issue',
    status: 'OPEN',
    description: '<p>My website is down</p>',
  },
  {
    id: '2',
    title: 'Login issue',
    status: 'CLOSED',
    description: '<p>Cannot log in</p>',
  },
];

const mockReplies = [
  { message: '<p>We are working on it</p>', userId: 'Support' },
];

const TicketPage: React.FC = () => {
  const [activeView, setActiveView] = useState<'list' | 'create' | 'detail'>(
    'list',
  );
  const [selectedTicket, setSelectedTicket] = useState<
    null | (typeof mockTickets)[0]
  >(null);

  const handleCreateTicket = (ticket: {
    title: string;
    description: string;
  }) => {
    // Submit logic
    console.log(ticket);
    setActiveView('list');
  };

  const handleTicketClick = (ticketId: string) => {
    const ticket = mockTickets.find((t) => t.id === ticketId);
    setSelectedTicket(ticket || null);
    setActiveView('detail');
  };

  const handleReplySubmit = (message: string) => {
    // Handle reply submit logic
    console.log(message);
  };

  return (
    <div className='bg-white dark:bg-gray-900 shadow-lg mx-auto px-4 md:px-8 py-12 rounded-lg'>
      <h1 className='mb-8 font-bold text-4xl text-center text-gray-800 dark:text-gray-200'>
        Support Center
      </h1>

      {/* Back Button: Only show in 'create' and 'detail' views */}
      {activeView !== 'list' && (
        <div className='flex justify-start mb-4'>
          <Button
            variant='outline'
            onClick={() => setActiveView('list')}
            className='flex items-center'>
            <FaArrowLeft className='mr-2' /> Back to Tickets
          </Button>
        </div>
      )}

      {/* Ticket List View */}
      {activeView === 'list' && (
        <>
          <p className='mb-6 text-center text-gray-700 text-lg dark:text-gray-400'>
            Below are your active tickets. Select one to view or respond.
          </p>
          <TicketList tickets={mockTickets} onTicketClick={handleTicketClick} />
        </>
      )}

      {/* Create Ticket View */}
      {activeView === 'create' && (
        <>
          <p className='mb-6 text-center text-gray-700 text-lg dark:text-gray-400'>
            Submit a new support request.
          </p>
          <CreateTicket onSubmit={handleCreateTicket} />
        </>
      )}

      {/* Ticket Detail View */}
      {activeView === 'detail' && selectedTicket && (
        <>
          <TicketDetail
            ticket={selectedTicket}
            replies={mockReplies}
            onReplySubmit={handleReplySubmit}
          />
        </>
      )}

      {/* Button to create a new ticket */}
      {activeView === 'list' && (
        <div className='flex justify-center mt-6'>
          <Button onClick={() => setActiveView('create')}>
            Create New Ticket
          </Button>
        </div>
      )}
    </div>
  );
};

export default TicketPage;
