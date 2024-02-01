import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      {/* Header section with logo */}
      <header className="text-center mb-4">
        <h1>Usiu Lost and Found</h1>
        <p className="lead">Welcome to our lost and found service for the campus community.</p>
      </header>

      {/* Search bar */}
      <section className="search-bar text-center mb-4">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for lost items..." />
          <button className="btn btn-primary">Search</button>
        </div>
      </section>

      {/* List of found items */}
      <section className="found-items text-center">
        <h2>Recently Found Items</h2>
        <ul className="list-group">
          {/* Sample item, you can dynamically render a list based on your data */}
          <li className="list-group-item">
            <strong>Item:</strong> Smartphone
            <br />
            <strong>Location:</strong> Main Library
            <br />
            <strong>Date:</strong> January 22, 2024
          </li>

          {/* Add more dynamically generated list items here */}
        </ul>
      </section>
    </div>
  );
}

export default App;
