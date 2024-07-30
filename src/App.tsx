import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';
import { HomePage } from './HomePage';
import { AboutMe } from './AboutMe';
import { Post } from './Post'
import { SinglePost } from './SinglePost';
import { TopicPost } from './TopicPost';
import { Album } from './Album';
import { Picture } from './Picture';
import { Coding } from './Coding';
import { Tutorial } from './Tutorial';
import { Video } from './Video';
import { Footer } from './Footer';
import { ScrollToTop } from "./ScrollToTop";
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <Router>
      <div>
        <LanguageProvider>
          <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/post" element={<Post />} />
              <Route path="/post/:postID" element={<SinglePost />} />
              <Route path="/post/topic/:topicID" element={<TopicPost />} />
              <Route path="/album" element={<Album/>} />
              <Route path="/album/:albumID" element={<Picture />} />
              <Route path="/coding" element={<Coding/>} />
              <Route path="/coding/:tutorialID" element={<Tutorial />} />
              <Route path="/video" element={<Video/>} />
            </Routes>
            <ScrollToTop />
          </div>
        </LanguageProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App
