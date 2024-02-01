import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleUploadClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Upload button */}
      <section className="text-center mb-4">
        <button className="btn btn-success" onClick={handleUploadClick}>
          Upload Lost Item
        </button>
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
        </ul>
      </section>

      {/* Upload Modal */}
      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Upload Lost Item</h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Add your upload form elements here (photo, name, location) */}
                <form>
                  <div className="form-group">
                    <label htmlFor="uploadPhoto">Upload Photo</label>
                    <input type="file" className="form-control" id="uploadPhoto" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="itemName">Item Name</label>
                    <input type="text" className="form-control" id="itemName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="itemLocation">Item Location</label>
                    <input type="text" className="form-control" id="itemLocation" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-backdrop" onClick={handleCloseModal}></div>
        </div>
      )}
    </div>
  );
}

export default App;
