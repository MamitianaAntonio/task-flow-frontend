import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './page/Home.tsx';
import Auth from './page/Auth.tsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  ) 
}

export default App
