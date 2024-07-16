import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="w-full xl:px-20 md:px-10 px-5 py-10 text-primary relative">
      <div className="w-full flex items-center md:justify-between">
        <div className="hidden md:flex md:flex-row md:space-x-5 xl:space-x-10">
          <Link to="/" className="text-xl font-bold hover:underline hover:text-primarydark">HOME</Link>
          <Link to="/about" className="text-xl font-bold hover:underline hover:text-primarydark">ABOUT ME</Link>
          <Link to="/post" className="text-xl font-bold hover:underline hover:text-primarydark">POSTS</Link>
          <Link to="/album" className="text-xl font-bold hover:underline hover:text-primarydark">ALBUM</Link>
          <Link to="/video" className="text-xl font-bold hover:underline hover:text-primarydark">VIDEOS</Link>
          <Link to="/coding" className="text-xl font-bold hover:underline hover:text-primarydark">CODING</Link>
        </div>
        <div className="flex flex-row items-center w-full md:w-fit justify-between">
          <div className="hidden lg:pl-10 lg:flex lg:flex-row lg:items-center lg:space-x-2 xl:space-x-6">
            <a href="mailto:my.giangvu@gmail.com"><i className="text-xl p-2 hover:bg-primarylight hover:text-primarydark rounded-lg fa-solid fa-envelope"></i></a>
            <a href="https://www.facebook.com/giangmy.04/"><i className="text-xl p-2 hover:bg-primarylight hover:text-primarydark rounded-lg fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/jfm_blog/"><i className="text-2xl p-2 hover:bg-primarylight hover:text-primarydark rounded-lg fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/jessica-vu-uml/"><i className="text-2xl p-2 hover:bg-primarylight hover:text-primarydark rounded-lg fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/jfm-code"><i className="text-2xl p-2 hover:bg-primarylight hover:text-primarydark rounded-lg fa-brands fa-github"></i></a>
          </div>
          <button data-collapse-toggle="navbar-hamburger" type="button" className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-primary rounded-lg hover:bg-primarylight hover:text-primarydark focus:outline-none focus:ring-2 focus:ring-primary" aria-controls="navbar-hamburger" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <form className="w-72 xl:ml-10 lg:ml-5 hidden sm:block">   
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                      <svg className="w-4 h-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="search" className="block w-full p-2 ps-10 text-lg text-primarydark border border-primary border-0 border-b-2 bg-gray-50 focus:shadow-md focus:outline-none" placeholder="Search" required />
              </div>
          </form>
        </div>
      </div>
    </nav>
  );
};