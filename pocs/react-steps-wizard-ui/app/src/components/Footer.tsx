import React from 'react';

interface FooterProps {
    currentStep: number;
}

const Footer: React.FC<FooterProps> = ({ currentStep }) => {
    return (
        <div style={{
            position: 'absolute', bottom: 400, textAlign: 'center',
            backgroundColor: 'navyblue', borderStyle: 'none', borderWidth: '1px',
            width: '100%', color: 'white'
        }}>
            <h2>Current Step: {currentStep}/3</h2>
            <h4>built with React and Typescript</h4>
        </div>
    );
};

export default Footer;