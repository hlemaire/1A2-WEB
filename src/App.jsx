import './App.css'
//Ajoute le composant "par defaut" de Button.tsx en tant que "Button"
import Home from './pages/Home.jsx'
import NavBar from "./components/NavBar";
import {useEffect, useState} from 'react'


function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Tu met ici tout tes éléments "Pages" dans ./pages
  return (
    <>
      <NavBar width={width}></NavBar>
      <Home width={width}></Home>
    </>
  )
}

export default App
