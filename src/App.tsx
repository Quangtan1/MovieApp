import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from './components/HomePage';
import MovieComponent from './components/MovieComponent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movie/:id' element={<MovieComponent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
