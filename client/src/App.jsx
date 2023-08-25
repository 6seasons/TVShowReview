import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'

const  App = () => {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
    </Routes>
    </>
  )
}

export default App
