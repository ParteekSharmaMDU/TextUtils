//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <div>
      <Navbar title="Text Utils" mode={mode} toogleMode={toogleMode} />
      <div className="container">
     <TextForm heading="Text Utils - Word Counter ,Character Counter, Removes Extra Spaces" mode={mode} toogleMode={toogleMode} />
      </div>
    </div>
  );
}

//<About />
export default App;
