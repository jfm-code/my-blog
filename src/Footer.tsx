export const Footer = () => {
    return (
        <div className="flex flex-row bg-[#7c9e83] text-xl">
            <div className="flex flex-col my-14 ml-60 mr-16 space-y-3">
                <p className="text-white font-bold mb-2">SECTIONS</p>
                <p className="text-white">About me</p>
                <p className="text-white">Posts</p>
                <p className="text-white">Album</p>
                <p className="text-white">Vlogs</p>
                <p className="text-white">Projects</p>
            </div>
            <div className="flex flex-col my-14 mx-16 space-y-3">
                <p className="text-white font-bold mb-2">TOPICS</p>
                <p className="text-white">Education</p>
                <p className="text-white">Work</p>
                <p className="text-white">Frienship</p>
                <p className="text-white">Family</p>
                <p className="text-white">Mental Health</p>
            </div>
            <div className="flex flex-col my-14 mr-60 ml-16 space-y-3">
                <p className="text-white font-bold mb-2">ALBUM</p>
                <p className="text-white">Nha Trang 2024</p>
                <p className="text-white">Being Daisy</p>
                <p className="text-white">High School</p>
                <p className="text-white">University</p>
                <p className="text-white">Phan Thiet 2022</p>
            </div>
            <form className="m-14 space-y-8">
                <p className="text-white font-bold">SUBSCRIBE FOR EMAILS FROM JFM BLOG</p>
                <div className="space-y-1">
                    <p className="text-white">Full name</p>
                    <input className="px-3 py-1 text-white w-80 bg-[#7c9e83] border border-white border-0 border-b outline-none focus:text-[#7c9e83] focus:bg-white focus:shadow-lg"></input>
                </div>
                <div className="space-y-1">
                    <p className="text-white">Email</p>
                    <input className="px-3 py-1 text-white w-80 bg-[#7c9e83] border border-white border-0 border-b outline-none focus:text-[#7c9e83] focus:bg-white focus:shadow-lg"></input>
                </div>
                <input className="mt-10 p-2 w-24 text-lg text-white border border-white bg-[#7c9e83] hover:bg-white hover:text-[#7c9e83]" type="submit" value="Sign Up"></input>
            </form>
        </div>
    )
};
