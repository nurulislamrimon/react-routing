import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import CustomLink from './Components/CoustomLink/CustomLink';
import History from './Components/History/History';
import Home from './Components/Home/Home';
import UserDetails from './Components/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <nav>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/history">History</CustomLink>
      </nav>
      <Routes>
        <Route path='/' element={<><Home></Home><About></About><History></History></>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/history' element={<History></History>}></Route>
        <Route path='/history/:id' element={<UserDetails></UserDetails>}></Route>
        <Route path='/user' element={<UserDetails></UserDetails>}></Route>
        <Route path='*' element={<h1>No Page Found</h1>}></Route>
      </Routes>

    </div>
  );
}

export default App;
