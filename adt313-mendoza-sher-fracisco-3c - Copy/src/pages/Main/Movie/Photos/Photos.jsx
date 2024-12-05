// const Photos =() =>{
//     return(
//         <>
//          this is photos page create a crud
//         </>
//     )
// }; export default Photos

//----------------------------------------------
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [movieId, setMovieId] = useState('');
  const [photos, setPhotos] = useState([]);
  const [addedPhotos, setAddedPhotos] = useState([]);

  // Fetch movie photos from TMDB
  const fetchPhotos = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/movie/${movieId}/photos`);
      setPhotos(response.data.posters || []); // Fetch posters by default, can also handle other image types
    } catch (error) {
      console.error('Error fetching movie photos', error);
    }
  };

  // Add photo to the database
  const addPhotoToDatabase = async (photo) => {
    try {
      const photoUrl = `https://image.tmdb.org/t/p/w500${photo.file_path}`; // Construct the full image URL
      await axios.post('http://localhost:3001/api/photos', {
        movieId: movieId,
        photoPath: photo.file_path,
        photoUrl: photoUrl,
      });

      setAddedPhotos((prev) => [...prev, { ...photo, photoUrl }]);
    } catch (error) {
      console.error('Error adding photo to database', error);
    }
  };

  return (
    <div>
      <h1>Movie Photos</h1>
      <input
        type="text"
        placeholder="Enter Movie ID"
        value={movieId}
        onChange={(e) => setMovieId(e.target.value)}
      />
      <button onClick={fetchPhotos}>Search Photos</button>

      <h2>Movie Photos from TMDB</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map((photo) => (
          <div key={photo.file_path} style={{ margin: 10 }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${photo.file_path}`}
              alt={photo.file_path}
              width={200}
              height={300}
            />
            <button onClick={() => addPhotoToDatabase(photo)}>Add Photo</button>
          </div>
        ))}
      </div>

      <h2>Added Photos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {addedPhotos.map((photo) => (
          <div key={photo.photoPath} style={{ margin: 10 }}>
            <img src={photo.photoUrl} alt={photo.photoPath} width={200} height={300} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
