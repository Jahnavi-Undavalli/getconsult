import React from 'react';
import './index.css';
import plato_image from '../Assets/plato image.jpeg';

const ThankYou = () => {
  return (
    <div className="thank-you-container90">
      <div className='heading-container90'>
      <h1 className="form-heading">
        <span>Your request has been accepted by </span>
        <span className="john-doe1">John Doe</span>
      </h1>
      </div> 
      <div className="thank-you">
        <div className="thank-you-inner">
          <img src={plato_image} alt="John Doe" className="image"/>
          <h3 className="john-doe-name">John Doe</h3>
          <div className="frame-div1">
            <button className="resource-operations-label">
              Human Resource
            </button>
            <button className="resource-operations-label">
              Operations
            </button>
          </div>
          <div className="additional-info">
            <p><span className='span'>Estimated wait time</span>: 2min</p>
            <p><span className='span'>Meeting duration</span>: 02:00pm - 03:00pm</p>
          </div>
          <div className="action-buttons">
            <button className="action-button join-call">Join Call</button>
            <button className="action-button view-profile">View Consultant Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
