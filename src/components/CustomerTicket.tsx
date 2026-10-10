import { useEffect, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

type Ticket = {
  id: number;
  title: string;
  description: string;
  customer: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Resolved';
  createdAt: string;
};

type CustomerTicketProps = {
  onCountsChange: (inProgress: number, resolved: number) => void;
};

async function fetchTickets(): Promise<Ticket[]> {
  const res = await fetch('/tickets.json');

  if (!res.ok) {
    throw new Error('Failed to fetch tickets');
  }

  const data = await res.json();
  return data;
}

function CustomerTicket({ onCountsChange }: CustomerTicketProps) {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  // All tickets loaded from JSON
  const [tickets, setTickets] = useState<Ticket[]>([]);

  // Selected tickets
  const [taskTickets, setTaskTickets] = useState<Ticket[]>([]);

  // Completed tickets
  const [resolvedTickets, setResolvedTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const data = await fetchTickets();
        setTickets(data);
      } catch (error) {
        console.error('Error loading tickets:', error);
      }
    };

    loadTickets();
  }, []);

  // Select a ticket
  const handleSelectTicket = (ticket: Ticket) => {
    // Prevent duplicate selection
    if (
      taskTickets.some((t) => t.id === ticket.id) ||
      resolvedTickets.some((t) => t.id === ticket.id)
    ) {
      return;
    }

    const updatedTicket: Ticket = {
      ...ticket,
      status: 'In Progress',
    };

    setTaskTickets((prev) => [...prev, updatedTicket]);

    onCountsChange(taskTickets.length + 1, resolvedTickets.length);
  };

  // Mark a ticket as resolved
  const handleResolveTicket = (ticket: Ticket) => {
    setTaskTickets((prev) => prev.filter((t) => t.id !== ticket.id));

    const resolvedTicket: Ticket = {
      ...ticket,
      status: 'Resolved',
    };

    setResolvedTickets((prev) => [...prev, resolvedTicket]);
  };

  return (
    <div className='max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6'>
      {/* Left: Customer Tickets */}
      <div>
        <h1 className='text-xl font-semibold text-gray-700 mb-3'>
          Customer Tickets
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => handleSelectTicket(ticket)}
              className='bg-white rounded-md shadow-sm p-3 flex flex-col gap-2 cursor-pointer hover:shadow-md transition-shadow'
            >
              <div className='flex items-start justify-between gap-2'>
                <h2 className='text-sm font-medium text-gray-900'>
                  {ticket.title}
                </h2>

                <span
                  className={`flex items-center gap-1.5 shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    resolvedTickets.some((t) => t.id === ticket.id)
                      ? 'bg-blue-100 text-blue-800'
                      : taskTickets.some((t) => t.id === ticket.id)
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      resolvedTickets.some((t) => t.id === ticket.id)
                        ? 'bg-blue-600'
                        : taskTickets.some((t) => t.id === ticket.id)
                          ? 'bg-yellow-600'
                          : 'bg-green-600'
                    }`}
                  />

                  {resolvedTickets.some((t) => t.id === ticket.id)
                    ? 'Resolved'
                    : taskTickets.some((t) => t.id === ticket.id)
                      ? 'In Progress'
                      : ticket.status}
                </span>
              </div>

              <p className='text-xs text-gray-500 line-clamp-2'>
                {ticket.description}
              </p>

              <div className='flex items-center justify-between text-[11px] mt-1'>
                <div className='flex items-center gap-3'>
                  <span className='text-gray-500'>
                    #{ticket.id.toString().padStart(4, '0')}
                  </span>

                  <span className='font-medium text-red-500'>
                    {ticket.priority} PRIORITY
                  </span>
                </div>

                <div className='flex items-center gap-3 text-gray-500'>
                  <span>{ticket.customer}</span>

                  <span className='flex items-center gap-1'>
                    <FaRegCalendarAlt className='text-sm' />
                    {ticket.createdAt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Task Status */}
      <aside>
        <h2 className='text-xl font-semibold text-gray-700 mb-2'>
          Task Status
        </h2>

        <p className='text-xs text-gray-500 mb-4'>
          {taskTickets.length} tasks in progress.
        </p>

        {taskTickets.length === 0 && (
          <p className='text-sm text-gray-400 mb-4'>
            Select a ticket to add to Task Status.
          </p>
        )}

        {/* Selected tickets */}
        {taskTickets.map((ticket) => (
          <div
            key={ticket.id}
            className='bg-white rounded-md shadow-sm p-3 mb-3'
          >
            <h3 className='text-sm font-medium text-gray-900'>
              {ticket.title}
            </h3>

            <p className='text-xs text-gray-500 mt-1'>{ticket.description}</p>

            <button
              onClick={() => handleResolveTicket(ticket)}
              className='mt-3 w-full rounded-md bg-green-600 px-3 py-2 text-xs font-medium text-white hover:bg-green-700'
            >
              Mark as Resolved
            </button>
          </div>
        ))}

        {/* Resolved tickets */}
        <h2 className='text-xl font-semibold text-gray-700 mt-6 mb-2'>
          Resolved Task
        </h2>

        <p className='text-xs text-gray-500 mb-3'>
          {resolvedTickets.length} tasks resolved.
        </p>

        {resolvedTickets.length === 0 && (
          <p className='text-sm text-gray-400'>No resolved tasks yet.</p>
        )}

        {resolvedTickets.map((ticket) => (
          <div
            key={ticket.id}
            className='bg-white rounded-md shadow-sm p-3 mb-3'
          >
            <h3 className='text-sm font-medium text-gray-900'>
              {ticket.title}
            </h3>

            <p className='text-xs text-green-600 mt-1'>Resolved</p>
          </div>
        ))}
      </aside>
    </div>
  );
}

export default CustomerTicket;
