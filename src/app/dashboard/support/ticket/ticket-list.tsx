// 'use client';

// interface Ticket {
//   id: string;
//   title: string;
//   status: 'OPEN' | 'CLOSED' | 'RESOLVED';
//   description: string;
// }

// interface TicketListProps {
//   tickets: Ticket[];
//   onTicketClick: (ticketId: string) => void;
// }

// const TicketList: React.FC<TicketListProps> = ({ tickets, onTicketClick }) => {
//   return (
//     <div className='p-4'>
//       <h2 className='mb-4 font-bold text-3xl text-zinc-800 dark:text-zinc-200'>
//         Your Tickets
//       </h2>
//       <div className='space-y-4'>
//         {tickets.map((ticket) => (
//           <div
//             key={ticket.id}
//             onClick={() => onTicketClick(ticket.id)}
//             className={`p-4 rounded-lg shadow-md cursor-pointer dark:bg-gray-800 transition hover:bg-gray-100 dark:hover:bg-zinc-700 ${
//               ticket.status === 'OPEN'
//                 ? 'border-l-4 border-green-500'
//                 : 'border-l-4 border-red-500'
//             }`}>
//             <h3 className='font-semibold text-zinc-800 dark:text-zinc-200'>
//               {ticket.title}
//             </h3>
//             <p className='text-gray-500 text-sm dark:text-gray-400'>
//               Status: {ticket.status}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TicketList;
