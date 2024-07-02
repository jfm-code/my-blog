export const Footer = () => {
    return (
        <div className="flex flex-row bg-[#7c9e83] text-xl">
            <div className="flex flex-col my-14 ml-60 mr-16 space-y-2">
                <p className="text-white font-bold">SECTIONS</p>
                <p className="text-white">About me</p>
                <p className="text-white">Contact</p>
                <p className="text-white">Post</p>
            </div>
            <div className="flex flex-col my-14 mx-16 space-y-2">
                <p className="text-white font-bold">POST TOPICS</p>
                <p className="text-white">Family</p>
                <p className="text-white">Education</p>
                <p className="text-white">Health</p>
            </div>
            <div className="flex flex-col my-14 mr-60 ml-16 space-y-2">
                <p className="text-white font-bold">ALBUM</p>
                <p className="text-white">Summer 2024</p>
                <p className="text-white">High school</p>
                <p className="text-white">College</p>
            </div>
            <form>
                <p className="text-white">Full name</p>
                <input></input>
                <p className="text-white">Email</p>
                <input></input>
                <input></input>
            </form>
        </div>
    )
};
