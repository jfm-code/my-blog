import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="px-20 py-10 text-[#7c9e83]">
      <div className="flex items-center justify-between">
        <div className="flex flex-row space-x-10">
          <Link to="/" className="text-xl font-bold hover:underline">HOME</Link>
          <Link to="/about" className="text-xl font-bold hover:underline">ABOUT ME</Link>
          <Link to="/post" className="text-xl font-bold hover:underline">POSTS</Link>
          <Link to="/album" className="text-xl font-bold hover:underline">ALBUM</Link>
          <Link to="/vlog" className="text-xl font-bold hover:underline">VLOGS</Link>
          <Link to="/project" className="text-xl font-bold hover:underline">PROJECTS</Link>
        </div>
        <div className="flex flex-row items-center space-x-6">
          <a href="mailto:my.giangvu@gmail.com"><i className="text-xl p-2 hover:text-green-700 fa-solid fa-envelope"></i></a>
          <a href="https://www.facebook.com/giangmy.04/"><i className="text-xl p-2 hover:text-green-700 fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/jfm_blog/"><i className="text-2xl p-2 hover:text-green-700 fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/my-giang-vu/"><i className="text-2xl p-2 hover:text-green-700 fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/jfm-code"><i className="text-2xl p-2 hover:text-green-700 fa-brands fa-github"></i></a>
          <div>
            <input className="w-64 px-3 py-1 text-base text-gray-900 border border-2 border-[#7c9e83] focus:border-green-700 outline-none rounded-lg bg-gray-50" type="text" placeholder="Search..."></input>
            <a href="#"><i className="p-3 text-xl hover:text-green-700 fa-solid fa-magnifying-glass"></i></a>
          </div>
          
        </div>
      </div>
    </nav>
  );
};