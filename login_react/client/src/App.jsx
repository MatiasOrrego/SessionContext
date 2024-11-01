import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { SessionProvider } from './context/SessionProvider';
import { useSession } from './hooks/useSession';

const AppContent = () => {
  const { session } = useSession();

  return session.isAuthenticated ? <Home /> : <Login />;
};

export default function App() {
  return (
    <SessionProvider>
      <AppContent />
    </SessionProvider>
  );
}