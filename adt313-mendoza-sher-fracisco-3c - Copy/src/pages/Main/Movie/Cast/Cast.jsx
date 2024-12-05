// const Cast =() =>{
//     return(
//         <>
//          this is cast page create a crud
//         </>
//     )
// }; export default Cast


// Cast.jsx
import React, { useState, useEffect } from 'react';
import './Cast.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [newCast, setNewCast] = useState({ name: '', character: '', imageUrl: '' });

  // Fetch cast data (Read)
  useEffect(() => {
    // Fetch cast data from an API or database and set the state
    const fetchCastData = async () => {
      const response = await fetch('/api/cast');
      const data = await response.json();
      setCast(data);
    };
    fetchCastData();
  }, []);

  // Create new cast member
  const handleCreateCast = async () => {
    // Send a POST request to the API or database to create a new cast member
    const response = await fetch('/api/cast', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCast),
    });
    const data = await response.json();
    setCast([...cast, data]);
    setNewCast({ name: '', character: '', imageUrl: '' });
  };

  // Update cast member
  const handleUpdateCast = async (id, updatedCast) => {
    // Send a PUT request to the API or database to update a cast member
    const response = await fetch(`/api/cast/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCast),
    });
    const data = await response.json();
    setCast(cast.map((member) => (member.id === id ? data : member)));
  };

  // Delete cast member
  const handleDeleteCast = async (id) => {
    // Send a DELETE request to the API or database to delete a cast member
    await fetch(`/api/cast/${id}`, {
      method: 'DELETE',
    });
    setCast(cast.filter((member) => member.id !== id));
  };

  return (
    <div className="cast-container">
      <h2 className="cast-title">Cast</h2>
      <div className="cast-list">
        {cast.map((member) => (
          <div key={member.id} className="cast-member">
            <img src={member.imageUrl} alt={member.name} className="cast-image" />
            <h3 className="cast-name">{member.name}</h3>
            <p className="cast-character">{member.character}</p>
            <button onClick={() => handleUpdateCast(member.id, { name: 'Updated Name', character: 'Updated Character', imageUrl: 'updated-image.jpg' })}>
              Update
            </button>
            <button onClick={() => handleDeleteCast(member.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="cast-create">
        <input
          type="text"
          placeholder="Name"
          value={newCast.name}
          onChange={(e) => setNewCast({ ...newCast, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Character"
          value={newCast.character}
          onChange={(e) => setNewCast({ ...newCast, character: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newCast.imageUrl}
          onChange={(e) => setNewCast({ ...newCast, imageUrl: e.target.value })}
        />
        <button onClick={handleCreateCast}>Create</button>
      </div>
    </div>
  );
};

export default Cast;