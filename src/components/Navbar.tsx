function Navbar() {
  return (
    <div className='navbar bg-white px-60 shadow-md'>
      <div className='flex-1'>
        <a className='text-2xl font-bold'>Cs Ticket System</a>
      </div>

      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 text-sm'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li className='bg-indigo-700 text-white rounded-sm'>
            <a>+ New Ticket</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
