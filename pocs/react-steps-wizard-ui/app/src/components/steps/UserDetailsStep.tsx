import React, { useEffect, useState } from 'react';

interface UserDetailsStepProps {
  onDetailsSubmitted: (email: string, address: string) => void;
  onBack:() => void;
}

const UserDetailsStep: React.FC<UserDetailsStepProps> = ({ onDetailsSubmitted, onBack }) => {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // Restore
  useEffect(() => {
    const savedEmail = sessionStorage.getItem('userEmail');
    const savedAddress = sessionStorage.getItem('userAddress');
    if (savedEmail) setEmail(savedEmail);
    if (savedAddress) setAddress(savedAddress);
  }, []);

  // Save
  useEffect(() => {
    sessionStorage.setItem('userEmail', email);
    sessionStorage.setItem('userAddress', address);
  }, [email, address]);

  return (
    <div style={{
      position: 'absolute', top: 200, textAlign: 'center',
      backgroundColor: 'navyblue', borderStyle: 'dashed', borderWidth: '1px'
    }}>
      <h2>Step 2: Your Details</h2>
      <div style={{ display: 'inline-block', textAlign: 'left' }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <button onClick={() => onDetailsSubmitted(email, address)}>Next</button>
        <button onClick={() => onBack()}>Back</button>
      </div>
    </div>
  );
};

export default UserDetailsStep;