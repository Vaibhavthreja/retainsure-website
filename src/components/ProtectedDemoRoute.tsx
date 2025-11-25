import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useDemoAccess } from '../contexts/DemoAccessContext';

interface ProtectedDemoRouteProps {
  children: ReactNode;
}

function ProtectedDemoRoute({ children }: ProtectedDemoRouteProps) {
  const { hasAccess } = useDemoAccess();

  if (!hasAccess) {
    return <Navigate to="/interactive-demo" replace />;
  }

  return <>{children}</>;
}

export default ProtectedDemoRoute;
