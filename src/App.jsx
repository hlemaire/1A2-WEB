import './App.css'
//Ajoute le composant "par defaut" de Button.tsx en tant que "Button"
import Home from './pages/Home.jsx'
import NavBar from "./components/NavBar";



function App() {
  //Tu met ici tout tes éléments "Pages" dans ./pages
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
    </>
  )
}

export default App
