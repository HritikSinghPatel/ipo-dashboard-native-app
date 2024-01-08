import React, { createContext, useContext, useState } from 'react';

// Create a context for managing theme
const ThemeContext = createContext();

// Custom hook to access the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component to manage the theme state
export const ThemeProvider = ({ children }) => {
 
  const [theme, setTheme] = useState({
    background: '#282c34', 
    text: 'white', 
  });

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    
    setTheme((prevTheme) => ({
      ...prevTheme,
      background: prevTheme.background === '#282c34' ? 'white' : '#282c34',
      text: prevTheme.text === 'white' ? 'black' : 'white',
    }));
  };

  // Provide the theme state and toggleTheme function to the context
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
