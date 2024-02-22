// AdminPage.js
import React, { useState } from 'react';
import Navbarhome from './Navbar';

const Adminpage = () => {
  const [tourData, setTourData] = useState({
    // Sample data structure, you can customize based on your needs
    tours: [
      { id: 1, name: 'Sufring' },
      { id: 2, name: 'Skydiving'},
      { id: 3, name: 'Sikiing'},
      { id: 4, name: 'Ooty'},
      { id: 5, name: 'Yercaud'},
      { id: 6, name: 'Kodaikanal'},

      // Add more tour entries as needed
    ],
  });

  // Function to handle adding a new tour
  const handleAddTour = () => {
    // Implement logic to add a new tour to the state
  };

  // Function to handle updating tour information
  const handleUpdateTour = (id, updatedTour) => {
    // Implement logic to update the tour with the provided ID
  };

  // Function to handle deleting a tour
  const handleDeleteTour = (id) => {
    // Implement logic to delete the tour with the provided ID
  };

  return (
    <>
    <Navbarhome/>

    <div style={{paddingTop:'120px',paddingLeft:'30px'}}>
      <h2>Admin Page</h2>
      <p><button onClick={handleAddTour}>Add New Tour</button></p>

      {/* Render a list of tours with options to edit and delete */}
      <ul>
        {tourData.tours.map((tour) => (
          <li key={tour.id}>
            <p>{tour.name}</p>
            <p>
            <button onClick={() => handleUpdateTour(tour.id)}>Edit</button>
            <button onClick={() => handleDeleteTour(tour.id)}>Delete</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Adminpage;
