
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import UsernameInput from './components/UsernameInput';
import BoardSelection from './components/BoardSelection';
import ImageDisplay from './components/ImageDisplay';
import PrivacyPolicy from './components/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/username" element={<UsernameInput onUsernameSubmit={(username) => console.log('Username submitted:', username)} />} />
          <Route path="/boards/:username" element={<BoardSelection onBoardSelect={(board) => console.log('Board selected:', board)} />} />
          <Route path="/image/:username/:boardId" element={<ImageDisplay onBackToBoards={() => console.log('Back to boards')} />} />
          <Route path="/image/:username/random" element={<ImageDisplay onBackToBoards={() => console.log('Back to boards')} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
