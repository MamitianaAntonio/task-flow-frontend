import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './page/Home.tsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  ) 
}

export default App
