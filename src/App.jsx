import './App.css'
import Header from "../src/componentes/Header";
import { Routes,Route } from 'react-router-dom';
function App() {

  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
    </>
  )
}

export default App
