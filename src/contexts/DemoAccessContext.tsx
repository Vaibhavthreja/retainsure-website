import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DemoAccessContextType {
  hasAccess: boolean;
  grantAccess: () => void;
  checkAccess: () => boolean;
}

const DemoAccessContext = createContext<DemoAccessContextType | undefined>(undefined);

export function DemoAccessProvider({ children }: { children: ReactNode }) {
  const [hasAccess, setHasAccess] = useState(false);

  const checkAccess = (): boolean => {
    const pendingEmail = localStorage.getItem('demo_pending_email');
    const verificationToken = localStorage.getItem('demo_verification_token');

    return !!(pendingEmail && verificationToken);
  };

  const grantAccess = () => {
    setHasAccess(true);
  };

  useEffect(() => {
    setHasAccess(checkAccess());
  }, []);

  return (
    <DemoAccessContext.Provider value={{ hasAccess, grantAccess, checkAccess }}>
      {children}
    </DemoAccessContext.Provider>
  );
}

export function useDemoAccess() {
  const context = useContext(DemoAccessContext);
  if (context === undefined) {
    throw new Error('useDemoAccess must be used within a DemoAccessProvider');
  }
  return context;
}
