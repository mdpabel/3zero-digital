import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const SupportPage = () => {
  return (
    <div>
      <Button asChild>
        <Link href='/dashboard/support/ticket'>Ticket</Link>
      </Button>
    </div>
  );
};

export default SupportPage;
