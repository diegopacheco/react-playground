import React from 'react';

interface ConfirmationStepProps {
  selectedItems: string[];
  email: string;
  address: string;
  onConfirm: () => void;
  onBack:() => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ selectedItems, email, address, onConfirm, onBack }) => {
  return (
    <div style={{
      position: 'absolute', top: 200, textAlign: 'center',
      backgroundColor: 'navyblue', borderStyle: 'dashed', borderWidth: '1px'
    }}>
      <h2>Step 3: Confirm Your Order</h2>
      <div style={{ display: 'inline-block', textAlign: 'left' }}>
        <p>Selected Items: {selectedItems.join(', ')}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
      </div>
      <br/>
      <button onClick={onConfirm}>Confirm Order</button>
      <button onClick={() => onBack()}>Back</button>
    </div>
  );
};

export default ConfirmationStep;