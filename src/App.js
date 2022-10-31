import './App.css'
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Navbar from "./components/navbar"
import Login from './pages/login'
import Register from "./pages/register"
import {Home} from "./pages/home";

function App() {
    const location = useLocation();

    return (
      <div>
          <Navbar />
          <br></br>
          <Routes>
              <Route exact path='/' element={ <Home />} />
              <Route path='login' element={ <Login/> } />
              <Route path='register' element={ <Register/> } />
          </Routes>
      </div>
    );
}

export default App;
