import {useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Service from './components/Pages/Service';
import Contact from './components/Pages/Contact';
import useLocalStorage from 'use-local-storage';


function App() {
  const [lightMode, setLightMode] = useState(false);


  const [theme, setTheme] = useLocalStorage("theme", "light")

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    setLightMode(!lightMode)
  }

  useEffect(() => {
    if(theme === "dark"){
      setLightMode(true)
    }
  },[theme])
  
   


  return (

    <BrowserRouter>
     <Navbar myTheme={theme} ontoggleTheme={handleToggleTheme} lightModeOn={lightMode} />
     <Routes>
      <Route path='/' element={<Home myTheme={theme}/>}/>
      <Route path='/about' element={<About myTheme={theme}/>} />
      <Route path='/portfolio' element={<Portfolio myTheme={theme}/>} />
      <Route path='/service' element={<Service myTheme={theme}/>} />
      <Route path='/contact' element={<Contact myTheme={theme}/>} />
      

     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
