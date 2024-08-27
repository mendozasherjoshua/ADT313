import logo from './logo.svg';
import './App.css';
import Name from './component/Name/Name';
import Section from './component/Section/Section';
import Description from './component/Description/Description';
function App() {
    const userinformation = {
      firstname  :'Sher Joshua',
      lastname : 'Mendoza',
      section : 'BSIT 3A',
      Descript : 'Coding is Hard',
    }

  return (
    <div className="App">
         <Name firstname = {userinformation.firstname} lastname = {userinformation.lastname} />
        <Section Section = {userinformation.section} />
        <Description Description={userinformation.Descript} />

            </div>
  );
}

export default App;
