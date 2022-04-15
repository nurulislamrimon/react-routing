import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import CustomLink from './Components/CoustomLink/CustomLink';
import History from './Components/History/History';
import Home from './Components/Home/Home';
import Post from './Components/Post/Post';
import PostDetails from './Components/PostDetails/PostDetails';
import UserDetails from './Components/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <nav>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/history">History</CustomLink>
        <CustomLink to="/post">Posts</CustomLink>
      </nav>

      <Routes>
        <Route path='/' element={<><Home></Home></>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* nested router */}
        <Route path="/post" element={<Post></Post>}>
          <Route path=":id" element={<PostDetails></PostDetails>}></Route>
        </Route>

        <Route path='/about' element={<About></About>}></Route>
        <Route path='/history' element={<History></History>}></Route>
        <Route path='/history/:id' element={<UserDetails></UserDetails>}></Route>
        <Route path='*' element={<h1>No Page Found</h1>}></Route>
      </Routes>

    </div>
  );
}

export default App;
