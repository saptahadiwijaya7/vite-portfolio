import { useState } from 'react';
import reactLogo from './assets/react.svg';
import SimpleContainer from './Components/Container';
import './App.css';
import ResponsiveAppBar from './Components/Appbar';
import Container from '@mui/material/Container';
import Home from './Components/Home';
import Feature from './Components/Feature'
import Feature2 from './Components/Feature2';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Home />
      <Feature />
      <Feature2 />
    </div>
    <Footer />
    </>
  )
}

export default App
