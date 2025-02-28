// src/hooks/useDarkMode.js

import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check the saved dark mode preference from localStorage
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Set the dark mode class on the root element (body or html)
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the user's dark mode preference to localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
