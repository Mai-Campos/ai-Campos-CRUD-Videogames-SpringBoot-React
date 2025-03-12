import HeaderComponent from './components/HeaderComponent';
import './App.css';
import FooterComponent from './components/FooterComponent';
import VideoGamesListComponent from './components/VideoGamesListComponent';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import AddVideoGameComponent from './components/AddVideoGameComponent';

function App() {
  return (
    <div>
     <BrowserRouter>
      <HeaderComponent/>
      <div className='container'>
        <Routes>
          <Route exact path='/'element={<VideoGamesListComponent/>}></Route>  
          <Route path='/videogames'element={<VideoGamesListComponent/>}></Route>
          <Route path='/save'element={<AddVideoGameComponent/>}></Route>
          <Route path='/update-videogame/:id'element={<AddVideoGameComponent/>}></Route>  
        </Routes>
      </div>
      <FooterComponent/>
     </BrowserRouter>
    </div>
  );
}

export default App;
