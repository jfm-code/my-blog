export const NavBar = () => {
    return (
      <nav className="px-20 py-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-row space-x-10">
            <div className="text-xl font-bold hover:underline">HOME</div>
            <div className="text-xl font-bold hover:underline">ABOUT ME</div>
            <div className="text-xl font-bold hover:underline">POSTS</div>
            <div className="text-xl font-bold hover:underline">ALBUM</div>
            <div className="text-xl font-bold hover:underline">VLOGS</div>
            <div className="text-xl font-bold hover:underline">REVIEW</div>
            <div className="text-xl font-bold hover:underline">CODING</div>
          </div>
          <div className="flex flex-row items-center space-x-6">
            <a href="mailto:my.giangvu@gmail.com"><i className="text-xl p-2 hover:text-green-900 fa-solid fa-envelope"></i></a>
            <a href="https://www.facebook.com/giangmy.04/"><i className="text-xl p-2 hover:text-green-900 fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/jfm_blog/"><i className="text-2xl p-2 hover:text-green-900 fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/my-giang-vu/"><i className="text-2xl p-2 hover:text-green-900 fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/jfm-code"><i className="text-2xl p-2 hover:text-green-900 fa-brands fa-github"></i></a>
            <div>
              <input className="w-64 px-3 py-1 text-base text-gray-900 border border-2 border-[#7c9e83] focus:border-green-900 outline-none rounded-lg bg-gray-50" type="text" placeholder="Search..."></input>
              <a href="#"><i className="p-3 text-xl hover:text-green-900 fa-solid fa-magnifying-glass"></i></a>
            </div>
            
          </div>
        </div>
      </nav>
    );
  };