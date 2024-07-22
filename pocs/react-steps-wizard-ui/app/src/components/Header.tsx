import React from 'react';

const Header: React.FC<{}> = () => {
    return (
        <div style={{
            position: 'absolute', top: 0, textAlign: 'center',
            backgroundColor: 'navyblue', borderStyle: 'none', borderWidth: '1px',
            width: '100%', color: 'White'
        }}>
            <h1>Multi-Step React Application</h1>
        </div>
    );
};

export default Header;