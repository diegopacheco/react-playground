import React, { useState } from 'react';
import './App.css';
import ChoseFoodStep from './components/steps/ChoseFoodStep';
import UserDetailsStep from './components/steps/UserDetailsStep';
import ConfirmationStep from './components/steps/ConfirmationStep';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleFoodSelection = (items: string[]) => {
    setSelectedItems(items);
    setCurrentStep(2);
  };

  const handleDetailsSubmission = (email: string, address: string) => {
    setEmail(email);
    setAddress(address);
    setCurrentStep(3);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleConfirm = () => {
    console.log('Order Confirmed', { selectedItems, email, address });
  };

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        {currentStep === 1 && (
          <ChoseFoodStep
            onSelectionDone={handleFoodSelection}
          />
        )}
        {currentStep === 2 && (
          <UserDetailsStep
            onDetailsSubmitted={handleDetailsSubmission}
            onBack={handleBack}
          />
        )}
        {currentStep === 3 && (
          <ConfirmationStep
            selectedItems={selectedItems}
            email={email}
            address={address}
            onConfirm={handleConfirm}
            onBack={handleBack}
          />
        )}
      </header>
      <Footer currentStep={currentStep} />
    </div>
  );
}

export default App;