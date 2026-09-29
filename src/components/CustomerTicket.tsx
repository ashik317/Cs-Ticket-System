import { FaRegCalendarAlt } from 'react-icons/fa';

function CustomerTicket() {
  return (
    <div className='max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6'>
      {/* Left: Tickets */}
      <div>
        <h1 className='text-xl font-semibold text-gray-700 mb-3'>
          Customer Tickets
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          {/* Ticket 1 */}
          <div className='bg-white rounded-md shadow-sm p-3 flex flex-col gap-2'>
            <div className='flex items-start justify-between gap-2'>
              <h2 className='text-sm font-medium text-gray-900'>
                Login Issues - Can't Access Account
              </h2>
              <span className='flex items-center gap-1.5 shrink-0 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800'>
                <span className='h-2.5 w-2.5 rounded-full bg-green-600'></span>
                Open
              </span>
            </div>

            <p className='text-xs text-gray-500 line-clamp-2'>
              Customer is unable to log in to their account. They've tried
              resetting their password multiple times but still can't get in.
            </p>

            <div className='flex items-center justify-between text-[11px] mt-1'>
              <div className='flex items-center gap-3'>
                <span className='text-gray-500'>#1001</span>
                <span className='font-medium text-red-500'>HIGH PRIORITY</span>
              </div>
              <div className='flex items-center gap-3 text-gray-500'>
                <span>John Smith</span>
                <span className='flex items-center gap-1'>
                  <FaRegCalendarAlt className='text-sm' />
                  1/15/2024
                </span>
              </div>
            </div>
          </div>

          {/* Ticket 2 */}
          <div className='bg-white rounded-md shadow-sm p-3 flex flex-col gap-2'>
            <div className='flex items-start justify-between gap-2'>
              <h2 className='text-sm font-medium text-gray-900'>
                Unable to Download Invoice
              </h2>
              <span className='flex items-center gap-1.5 shrink-0 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800'>
                <span className='h-2.5 w-2.5 rounded-full bg-yellow-500'></span>
                In- Progress
              </span>
            </div>

            <p className='text-xs text-gray-500 line-clamp-2'>
              Customer cannot download their January invoice from the billing
              section. The download button is unresponsive.
            </p>

            <div className='flex items-center justify-between text-[11px] mt-1'>
              <div className='flex items-center gap-3'>
                <span className='text-gray-500'>#1003</span>
                <span className='font-medium text-amber-500'>
                  MEDIUM PRIORITY
                </span>
              </div>
              <div className='flex items-center gap-3 text-gray-500'>
                <span>Michael Brown</span>
                <span className='flex items-center gap-1'>
                  <FaRegCalendarAlt className='text-sm' />
                  1/17/2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Task Status */}
      <aside>
        <h2 className='text-xl font-semibold text-gray-700 mb-2'>
          Task Status
        </h2>
        <p className='text-xs text-gray-500 mb-6'>
          Select a ticket to add to Task Status
        </p>

        <h2 className='text-xl font-semibold text-gray-700 mb-2'>
          Resolved Task
        </h2>
        <p className='text-xs text-gray-500'>No resolved tasks yet.</p>
      </aside>
    </div>
  );
}

export default CustomerTicket;
