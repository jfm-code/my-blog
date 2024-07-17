export const Video = () => {
    return (
        <div className="flex flex-col items-center px-5 custom_sm:px-10 custom_md:px-20 custom_xl:px-40 text-justify text-lg text-primary">
            <p className="w-full flex justify-center text-5xl custom_sm:text-6xl custom_nm:text-7xl custom_md:text-8xl font-fontAutography pb-10 custom_sm:py-10">a place to watch</p>
            <div className="custom_nm:px-8 custom_md:px-16 custom_lg:px-40">
                <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/lTSffczhgGw?si=hnRkzAW_BDyDxzIq" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <div className="flex flex-col">
                    <p className="text-xl custom_nm:text-2xl font-bold mt-5">SECOND YEAR IN THE US</p>
                    <p className="my-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                </div>
                
            </div>
            
            <p className="text-2xl custom_md:text-4xl font-bold mt-20">OTHER VIDEOS <span className="hidden custom_nm:inline">ON MY YOUTUBE CHANNEL</span></p>
            <a className="my-2 text-xl hover:underline hover:text-primarydark" href="https://www.youtube.com/@jfm-channel">Click here to go to my channel</a>
            <div className="w-full my-5 grid grid-cols-1 custom_nm:grid-cols-2 custom_lg:grid-cols-3 gap-8 custom_lg:gap-16">
                <div>
                    <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/V0MKS1wVb6A?si=Y0vwK93BRR-LVkZf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <p className="font-bold text-xl mt-2">FIRST YEAR IN THE US</p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                </div>
                <div>
                    <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/ecSzo247p8I?si=tJfgFU1dLaVYpWCN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <p className="font-bold text-xl mt-2">NHA TRANG TRIP 2024</p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                </div>
                <div>
                    <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/YZbjzQZYsYs?si=6DVGs66_NETfyWM0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <p className="font-bold text-xl mt-2">SAPA TRIP 2022</p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                </div>
            </div>
        </div>
    );
}