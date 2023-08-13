import './App.css';
import Home from './Components/Home';
import Artistpage from './Components/Artistpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/artist/:artistName' element={<Artistpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
