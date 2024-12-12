import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  // Load dark mode state from localStorage or default to false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isDarkMode') === 'true'; // Fetch the dark mode state from localStorage
    }
    return false; // Default to light mode
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Store the dark mode state in localStorage to persist across sessions
      if (typeof window !== 'undefined') {
        localStorage.setItem('isDarkMode', newMode.toString());
      }
      return newMode;
    });
  };

  // Apply dark mode class to body element based on state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
