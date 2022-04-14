import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import History from './Components/History/History';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Home></Home><About></About><History></History></>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/history' element={<History></History>}></Route>
      </Routes>

    </div>
  );
}

export default App;
