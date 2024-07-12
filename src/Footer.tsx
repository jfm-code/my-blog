export const Footer = () => {
    return (
        <div className="flex flex-row bg-primary text-xl text-primary">
            <div className="flex flex-col my-14 ml-60 mr-16 space-y-3">
                <p className="text-white font-bold mb-2">SECTIONS</p>
                <p className="text-white hover:underline">About me</p>
                <p className="text-white hover:underline">Posts</p>
                <p className="text-white hover:underline">Album</p>
                <p className="text-white hover:underline">Vlogs</p>
                <p className="text-white hover:underline">Projects</p>
            </div>
            <div className="flex flex-col my-14 mx-16 space-y-3">
                <p className="text-white font-bold mb-2">TOPICS</p>
                <p className="text-white hover:underline">Education</p>
                <p className="text-white hover:underline">Work</p>
                <p className="text-white hover:underline">Frienship</p>
                <p className="text-white hover:underline">Family</p>
                <p className="text-white hover:underline">Mental Health</p>
            </div>
            <div className="flex flex-col my-14 mr-60 ml-16 space-y-3">
                <p className="text-white font-bold mb-2">ALBUM</p>
                <p className="text-white hover:underline">Nha Trang 2024</p>
                <p className="text-white hover:underline">Being Daisy</p>
                <p className="text-white hover:underline">LHP Graduation</p>
                <p className="text-white hover:underline">Phan Thiet 2022</p>
                <p className="text-white hover:underline">Da Lat 2021</p>
            </div>
            <form className="m-14 space-y-8">
                <p className="text-white font-bold">SUBSCRIBE FOR EMAILS FROM JFM BLOG</p>
                <div className="space-y-1">
                    <p className="text-white">Full name</p>
                    <input className="px-3 py-1 text-white w-80 bg-primary border border-white border-0 border-b outline-none focus:text-primary focus:bg-white focus:shadow-lg"></input>
                </div>
                <div className="space-y-1">
                    <p className="text-white">Email</p>
                    <input className="px-3 py-1 text-white w-80 bg-primary border border-white border-0 border-b outline-none focus:text-primary focus:bg-white focus:shadow-lg"></input>
                </div>
                <input className="mt-10 p-2 w-24 text-lg text-white border border-white bg-primary hover:bg-white hover:text-primary" type="submit" value="Sign Up"></input>
            </form>
        </div>
    )
};
