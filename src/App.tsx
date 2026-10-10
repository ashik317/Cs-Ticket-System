import { useCallback, useState } from 'react';
import './App.css';
import CardImage from './components/CardImage';
import CustomerTicket from './components/CustomerTicket';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleCountsChange = useCallback(
    (inProgress: number, resolved: number) => {
      setInProgressCount(inProgress);
      setResolvedCount(resolved);
    },
    [],
  );

  return (
    <>
      <Navbar />

      <CardImage
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
      />

      <CustomerTicket onCountsChange={handleCountsChange} />

      <Footer />
    </>
  );
}

export default App;
