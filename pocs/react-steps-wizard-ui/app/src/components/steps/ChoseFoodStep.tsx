import React, { useEffect, useState } from 'react';

interface ChoseFoodStepProps {
  onSelectionDone: (selectedItems: string[]) => void;
}

const ChoseFoodStep: React.FC<ChoseFoodStepProps> = ({ onSelectionDone }) => {
  
    // Initialize from sessionStorage
    const [selectedItems, setSelectedItems] = useState(() => {
      const savedItems = sessionStorage.getItem('selectedItems');
      return savedItems ? JSON.parse(savedItems) : [];
    });
  
    const handleItemChange = (item: string, isChecked: boolean) => {
      if (isChecked) {
        setSelectedItems((prevItems: string[]) => [...prevItems, item]);
      } else {
        setSelectedItems((prevItems: string[]) => prevItems.filter((i) => i !== item));
      }
    };
  
    // Save
    useEffect(() => {
      sessionStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    }, [selectedItems]);

  return (
    <div style={{
      position: 'absolute', top: 200, textAlign: 'center',
      backgroundColor: 'navyblue', borderStyle: 'dashed', borderWidth: '1px'
    }}>
      <h2>Step 1: Choose Food</h2>
      <div style={{ display: 'inline-block', textAlign: 'left' }}>
        <label>
          <input type="checkbox" 
              onChange={(e) => handleItemChange('Pizza', e.target.checked)} 
              checked={selectedItems.includes('Pizza')}
          /> Pizza
        </label>
        <br />
        <label>
          <input type="checkbox" 
                  onChange={(e) => handleItemChange('Burger', e.target.checked)} 
                  checked={selectedItems.includes('Burger')}
          /> Burger
        </label>
      </div>
      <br />
      <button onClick={() => onSelectionDone(selectedItems)}>Next</button>
    </div>
  );
};

export default ChoseFoodStep;