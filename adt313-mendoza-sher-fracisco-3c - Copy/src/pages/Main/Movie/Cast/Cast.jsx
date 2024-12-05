// const Cast =() =>{
//     return(
//         <>
//          this is cast page create a crud
//         </>
//     )
// }; export default Cast


import React, { useState, useEffect } from 'react';
import './Cast.css';

const CastsAndCrew = ({ Cast }) => {
    return (
    <div className="Cast-container">
            {Cast.map((Cast, index) => (
                <div key={index} className="Cast-card">
                    <h3 className="Cast-name">{Cast.name}</h3>
                    <p className="Cast-role">{Cast.role}</p>
                    {Cast.imageUrl && <img src={Cast.imageUrl} alt={`${Cast.name}`} className="Cast-image" />}
                    {Cast.description && <p className="Cast-description">{Cast.description}</p>} 
                </div>
            ))}
        </div>
    );
};

export default function App() {
    const [CastData, setCastData] = useState([ ]); 
    const [newCast, setNewCast] = useState({ name: ' ', role: ' ', imageUrl: ' ', description: ' ' }); 
 
    useEffect(() => {
        const savedCast = localStorage.getItem('CastData');
        if (savedCast) {
            setCastData(JSON.parse(savedCast));
        }
    }, [ ]); 

    useEffect(() => {
        localStorage.setItem('CastData', JSON.stringify(CastData));
    }, [CastData]);
  
    const addCast = ( ) => { 
    if (newCast.name.trim( ) !== ' ' && newCast.role.trim( ) !== ' ' ) { 
            setCastData([...CastData, newCast]);
            setNewCast({ name: ' ', role: ' ', imageUrl: ' ', description: ' ' }); 
        }
    };
   
    useEffect(( ) => { 
        const interval = setInterval(( ) => { 
            console.log('Auto-saving cast and crew data:', CastData);
        }, 5000);
  
        return ( ) => clearInterval(interval); 
    }, [CastData]);
  
    return (
        <div>
            <h1>Cast and Crew</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={newCast.name}
                    onChange={(e) => setNewCast({ ...newCast, name: e.target.value })} 
                    placeholder="Enter name"
                />
                <input
                    type="text"
                    value={newCast.role}
                    onChange={(e) => setNewCast({ ...newCast, role: e.target.value })}
                    placeholder="Enter role"
                />
                <input
                    type="text"
                    value={newCast.imageUrl}
                    onChange={(e) =>  setNewCast({ ...newCast, imageUrl: e.target.value })} 
                    placeholder="Enter image URL"
                />
                <input
                    type="text"
                    value={newCast.description}
                    onChange={(e) => setNewCast({ ...newCast, description: e.target.value })}
                    placeholder="Enter description"
                />
                <button onClick={addCast}>Add Cast</button>
            </div>   
            <CastsAndCrew Cast={CastData} />
        </div>
    );          
}