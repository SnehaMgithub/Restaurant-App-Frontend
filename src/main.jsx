import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RestaurantProvider from './Contexts/RestaurantContext'; // Import provider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </React.StrictMode>
);
