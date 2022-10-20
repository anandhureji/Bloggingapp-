
import { useContext } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import HomePage from './Pages/HomePage';
import PostPage from './Pages/PostPage';
import { ThemeContext } from './ThemeContext';

function App() {

  const {theme} = useContext(ThemeContext);
  return (

    <BrowserRouter>
    <div className={`container ${theme}`}>
    <Navbar />
    <div className="main">
    <Routes>
    <Route path='/post/:postId' element={<PostPage />} />
    <Route path='/' element={<HomePage />} />
    
    </Routes>
      
    </div>
    <div className="footer">Awesome blog. All rights reserved</div>
  </div>

    </BrowserRouter>
    
  )
}

export default App;
