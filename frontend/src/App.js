import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import VideoGamesList from './components/VideoGamesList';

function App() {
  return (
    <div>
      <Header/>
      <VideoGamesList/>
      <Footer/>
    </div>
  );
}

export default App;
