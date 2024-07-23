export const Video = () => {

    const videos = [
        { title:'FIRST YEAR IN THE US', link:'https://www.youtube.com/embed/V0MKS1wVb6A?si=Y0vwK93BRR-LVkZf', lightbox_link:'https://www.youtube.com/watch?v=V0MKS1wVb6A'},
        { title:'NHA TRANG TRIP 2024', link:'https://www.youtube.com/embed/ecSzo247p8I?si=tJfgFU1dLaVYpWCN', lightbox_link:'https://www.youtube.com/watch?v=ecSzo247p8I'},
        { title:'SAPA TRIP 2022', link:'https://www.youtube.com/embed/YZbjzQZYsYs?si=6DVGs66_NETfyWM0', lightbox_link:'https://www.youtube.com/watch?v=YZbjzQZYsYs'}
    ];

    return (
        <div className="flex flex-col items-center px-5 custom_sm:px-10 custom_md:px-20 custom_xl:px-40 text-justify text-lg text-primary">
            <p className="w-full flex justify-center text-5xl custom_sm:text-6xl custom_nm:text-7xl custom_md:text-8xl font-fontAutography pb-10 custom_sm:py-10">a place to watch</p>
            <div className="group hover:bg-primarylight/70 p-5 custom_nm:p-8 custom_nm:mx-8 custom_md:mx-16 custom_lg:mx-40">
                <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/lTSffczhgGw?si=hnRkzAW_BDyDxzIq" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <div className="flex flex-col">
                    <p className="group relative w-max mt-5 mb-3">
                        <p className="group-hover:text-primarydark text-xl custom_nm:text-2xl font-bold">SECOND YEAR IN THE US</p>
                        <span className="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-primarydark group-hover:w-full"></span>
                    </p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                </div>
            </div>
            
            <p className="text-2xl custom_md:text-4xl font-bold mt-20">OTHER VIDEOS <span className="hidden custom_nm:inline">ON MY YOUTUBE CHANNEL</span></p>
            <a className="my-2 text-xl hover:underline hover:text-primarydark" href="https://www.youtube.com/@jfm-channel">Click here to go to my channel</a>

            <div data-uk-lightbox className="w-full my-5 grid grid-cols-1 custom_nm:grid-cols-2 custom_lg:grid-cols-3 gap-8 custom_lg:gap-5">
                {videos.map(video => (
                    <div className="group p-5 hover:bg-primarylight/70">
                        <a href={video.lightbox_link} data-caption={video.title} data-attrs="width: 1280; height: 720;">
                            <iframe className="w-full aspect-video" src={video.link} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            <p className="group relative w-max mt-2 mb-2">
                                <p className="group-hover:text-primarydark font-bold text-xl">{video.title}</p>
                                <span className="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-primarydark group-hover:w-full"></span>
                            </p>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                            </p>
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
}