// Import necessary dependencies and styles
import React from 'react';

import './App.css';

// Define the App component
function App() {
  return (
    <div className="App">
      {/* Header section with logo */}
      <header className="App-header">
  
        <h1>Usiu Lost and Found</h1>
        <p>Welcome to our lost and found service for the campus community.</p>
      </header>

      {/* Search bar */}
      <section className="search-bar">
        <input type="text" placeholder="Search for lost items..." />
        <button>Search</button>
      </section>

      {/* List of found items */}
      <section className="found-items">
        <h2>Recently Found Items</h2>
        <ul>
          {/* Sample item, you can dynamically render a list based on your data */}
          <li>
            <strong>Item:</strong> Smartphone
            <br />
            <strong>Location:</strong> Main Library
            <br />
            <strong>Date:</strong> January 22, 2024
          </li>
        </ul>
      </section>
    </div>
  );
}

// Export the App component
export default App;
