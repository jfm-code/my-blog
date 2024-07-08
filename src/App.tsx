import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';
import { HomePage } from './HomePage';
import { AboutMe } from './AboutMe';
import { Post } from './Post';
import { Footer } from './Footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App
