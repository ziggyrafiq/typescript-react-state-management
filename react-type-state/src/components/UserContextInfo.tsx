// Using context in TypeScript components
import React from 'react';
import { useAppContext } from './AuthContextProvider';

const UserInfo: React.FC = () => {
  const { user, isAuthenticated } = useAppContext();

  return (
    <div>
      <p>{`User: ${user}`}</p>
      <p>{`Authenticated: ${isAuthenticated}`}</p>
    </div>
  );
};
