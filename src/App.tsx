
function App() {
  return (
    <nav className="px-20 py-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-row space-x-10 text-[#7c9e83]">
          <div className="text-xl font-bold hover:underline">HOME</div>
          <div className="text-xl font-bold hover:underline">ABOUT ME</div>
          <div className="text-xl font-bold hover:underline">POSTS</div>
          <div className="text-xl font-bold hover:underline">ALBUM</div>
          <div className="text-xl font-bold hover:underline">VLOGS</div>
          <div className="text-xl font-bold hover:underline">REVIEW</div>
          <div className="text-xl font-bold hover:underline">CODING</div>
        </div>
        <div className="flex flex-row items-center text-xl space-x-8 ">
          <a href="mailto:my.giangvu@gmail.com"><i className=" fa-solid fa-envelope"></i></a>
          <a href="https://www.facebook.com/giangmy.04/"><i className=" fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/jfm_blog/"><i className="  fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/my-giang-vu/"><i className=" fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/jfm-code"><i className=" fa-brands fa-github"></i></a>
          <div>
            <input className="px-3 py-1 text-gray-900 border border-gray-300 focus:border-lime-700 outline-none rounded-lg bg-gray-50" type="text" placeholder="Search..."></input>
            <a href="#"><i className="pl-3 text-xl text-lime-700 fa-solid fa-magnifying-glass"></i></a>
          </div>
          
        </div>
      </div>
  </nav>
  )
}

export default App
