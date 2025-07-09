import React from 'react';
import { authUtils } from '../../utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, fallback }) => {
  const isAuthenticated = authUtils.isAuthenticated();
  
  return isAuthenticated ? <>{children}</> : <>{fallback}</>;
};

export default ProtectedRoute;