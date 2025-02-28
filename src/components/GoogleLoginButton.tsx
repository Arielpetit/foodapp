// src/components/GoogleLoginButton.tsx
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for React Router

const GoogleLoginButton = () => {
  const navigate = useNavigate(); // Hook for navigation
  
  const handleLoginSuccess = (response: any) => {
    console.log('Login Success:', response);
    const { credential } = response;
    // Save the token in localStorage or perform any other required action
    localStorage.setItem('googleToken', credential);
    
    // Redirect the user to the dashboard after login
    navigate('/'); // Redirect to the desired route
  };

  const handleLoginFailure = () => {
    console.log('Login Failed');
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  );
};

export default GoogleLoginButton;
