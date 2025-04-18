import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SummaryPage from './pages/SummaryPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">🏠 Home</Link> |{' '}
        <Link to="/summary">📈 Summary</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
