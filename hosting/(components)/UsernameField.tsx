'use client';


import React, { useState } from 'react';

// Define props type
interface IdPageProps {
  params: {
    id: string;
  };
}

const IdPage: React.FC<IdPageProps> = ({ params }) => {
  // State to store the first name entered by the user
  const [firstName, setFirstName] = useState('');

  return (
    <div>
      <p>Let's get some information</p>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
      </div>
      {firstName && <p>Hello, {firstName}!</p>}
    </div>
  );
};

export default IdPage;