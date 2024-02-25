'use client';

import React, { useState, useCallback } from 'react';
import UsernameField from '../../../(components)/UsernameField';
import PreferenceData from '../../../(components)/PreferenceData';
import WaitingPage from '../../../(components)/WaitingPage';

const MainPage = ({ params }) => {
  const [userState, setUserState] = useState(0);
  const [firstName, setFirstName] = useState('');

  // Handler to be called from UsernameField when the submit button is clicked
  const handleUsernameSubmit = useCallback((name: string) => {
    setFirstName(name); // You can store the name if needed
    setUserState(1);    // Update the userState to 1 to show the next component
  }, []);

  const handlePreferenceSubmit = useCallback(() => {
    setUserState(2); // Update the userState to 2
  }, []);
  return (
    <div>
      {userState === 0 && <UsernameField onSubmit={handleUsernameSubmit} />}
      {userState === 1 && <PreferenceData onSubmit={handlePreferenceSubmit} />}
      {userState === 2 && <WaitingPage/>}
    </div>
  );
};

export default MainPage;