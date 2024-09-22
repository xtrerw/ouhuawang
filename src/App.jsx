import './App.css'
import Header from "../src/componentes/Header";
import { Routes,Route } from 'react-router-dom';
import PaginaHome from './PaginaHome';
function App() {

  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<PaginaHome/>} />
    </Routes>
    </>
  )
}

export default App
