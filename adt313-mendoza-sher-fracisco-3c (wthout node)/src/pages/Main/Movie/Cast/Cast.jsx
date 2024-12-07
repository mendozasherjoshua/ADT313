// const Cast =() =>{
//     return(
//         <>
//          this is cast page create a crud
//         </>
//     )
// }; export default Cast
//---------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import './Cast.css';

// const CastsAndCrew = ({ Cast }) => {
//     return (
//     <div className="Cast-container">
//             {Cast.map((Cast, index) => (
//                 <div key={index} className="Cast-card">
//                     <h3 className="Cast-name">{Cast.name}</h3>
//                     <p className="Cast-role">{Cast.role}</p>
//                     {Cast.imageUrl && <img src={Cast.imageUrl} alt={`${Cast.name}`} className="Cast-image" />}
//                     {Cast.description && <p className="Cast-description">{Cast.description}</p>} 
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default function App() {
//     const [CastData, setCastData] = useState([ ]); 
//     const [newCast, setNewCast] = useState({ name: ' ', role: ' ', imageUrl: ' ', description: ' ' }); 
 
//     useEffect(() => {
//         const savedCast = localStorage.getItem('CastData');
//         if (savedCast) {
//             setCastData(JSON.parse(savedCast));
//         }
//     }, [ ]); 

//     useEffect(() => {
//         localStorage.setItem('CastData', JSON.stringify(CastData));
//     }, [CastData]);
  
//     const addCast = ( ) => { 
//     if (newCast.name.trim( ) !== ' ' && newCast.role.trim( ) !== ' ' ) { 
//             setCastData([...CastData, newCast]);
//             setNewCast({ name: ' ', role: ' ', imageUrl: ' ', description: ' ' }); 
//         }
//     };
   
//     useEffect(( ) => { 
//         const interval = setInterval(( ) => { 
//             console.log('Auto-saving cast and crew data:', CastData);
//         }, 5000);
  
//         return ( ) => clearInterval(interval); 
//     }, [CastData]);
  
//     return (
//         <div>
//             <h1>Cast and Crew</h1>
//             <div className="input-container">
//                 <input
//                     type="text"
//                     value={newCast.name}
//                     onChange={(e) => setNewCast({ ...newCast, name: e.target.value })} 
//                     placeholder="Enter name"
//                 />
//                 <input
//                     type="text"
//                     value={newCast.role}
//                     onChange={(e) => setNewCast({ ...newCast, role: e.target.value })}
//                     placeholder="Enter role"
//                 />
//                 <input
//                     type="text"
//                     value={newCast.imageUrl}
//                     onChange={(e) =>  setNewCast({ ...newCast, imageUrl: e.target.value })} 
//                     placeholder="Enter image URL"
//                 />
//                 <input
//                     type="text"
//                     value={newCast.description}
//                     onChange={(e) => setNewCast({ ...newCast, description: e.target.value })}
//                     placeholder="Enter description"
//                 />
//                 <button onClick={addCast}>Add Cast</button>
//             </div>   
//             <CastsAndCrew Cast={CastData} />
//         </div>
//     );          
// }

//-----------------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [movieId, setMovieId] = useState('');
  const [credits, setCredits] = useState([]);
  const [castAndCrew, setCastAndCrew] = useState( []);

  // Fetch movie credits from TMDB
  const fetchCredits = async () => {
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTYxOTQxOWJiMzc5ZjEyY2U0OGU2MzA5OTVhNTg1ZiIsIm5iZiI6MTczMzI4OTY1Mi41NzYsInN1YiI6IjY3NGZlNmI0NDQ4NDdlOTdkZmY0MDI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LQpZmYMN4a2ux83Kbum8o7zffI5iIrmj3eoDZdSyCaQ',
        },
    }).then((response) => {
      setCastAndCrew(response.data.cast);
      console.log(response.data.results);
    });
  };

  // Add cast/crew member to the database
  const addMemberToDatabase = async (member) => {
    try {
      await axios.post('http://localhost:3001/api/cast_and_crew', {
        name: member.name,
        role: member.known_for_department,
        role_description: 'Unknown', // Placeholder for role description
        email: '',
        phone: '',
        experience: 'Unknown',
        salary: 0,
      });
      setCastAndCrew((prev) => [...prev, member]); // Update the UI with the new member
    } catch (error) {
      console.error('Error adding member to database', error);
    }
  };

  return (
    <div>
      <h1>Movie Cast and Crew</h1>
      <input
        type="text"
        placeholder="Enter Movie ID"
        value={movieId}
        onChange={(e) => setMovieId(e.target.value)}
      />
      <button onClick={fetchCredits}>Search Credits</button>

      <div>
        <h2>Cast and Crew</h2>
        <ul>
          {credits.map((member) => (
            <li key={member.id}>
              {member.name} ({member.known_for_department})
              <button onClick={() => addMemberToDatabase(member)}>Add</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Added Cast and Crew Members</h2>
        <ul>
          {castAndCrew.map((member) => (
            <li key={member.id}>
              {member.name} ({member.role})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

//--------------------------------------------------------------------