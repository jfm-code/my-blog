import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';
import { HomePage } from './HomePage';
import { AboutMe } from './AboutMe';
import { Post } from './Post'
import { ReadPost } from './ReadPost';
import { Album } from './Album';
import { Coding } from './Coding';
import { Tutorial } from './Tutorial';
import { Video } from './Video';
import { Footer } from './Footer';
import { ScrollToTop } from "./ScrollToTop";

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
            <Route path="/post/:postID" element={<ReadPost />} />
            <Route path="/album" element={<Album/>} />
            <Route path="/coding" element={<Coding/>} />
            <Route path="/coding/:tutorialID" element={<Tutorial />} />
            <Route path="/video" element={<Video/>} />
          </Routes>
          <ScrollToTop />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App
