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
          <Link to="/coding" className="text-xl font-bold hover:underline">CODING</Link>
        </div>
        <div className="flex flex-row items-center space-x-6">
          <a href="mailto:my.giangvu@gmail.com"><i className="text-xl p-2 hover:bg-green-100 hover:text-green-700 rounded-lg fa-solid fa-envelope"></i></a>
          <a href="https://www.facebook.com/giangmy.04/"><i className="text-xl p-2 hover:bg-green-100 hover:text-green-700 rounded-lg fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/jfm_blog/"><i className="text-2xl p-2 hover:bg-green-100 hover:text-green-700 rounded-lg fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/my-giang-vu/"><i className="text-2xl p-2 hover:bg-green-100 hover:text-green-700 rounded-lg fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/jfm-code"><i className="text-2xl p-2 hover:bg-green-100 hover:text-green-700 rounded-lg fa-brands fa-github"></i></a>
          <form className="w-72">   
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                      <svg className="w-4 h-4 text-[#7c9e83]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="search" className="block w-full p-2 ps-10 text-md text-[#7c9e83] border border-[#7c9e83] border-0 border-b-2 bg-gray-50 focus:shadow-md focus:outline-none" placeholder="Search" required />
              </div>
          </form>

        </div>
      </div>
    </nav>
  );
};