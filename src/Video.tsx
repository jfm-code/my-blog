import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { VideoObject } from './interfaces';
import { useLanguage } from './LanguageContext';

export const Video = () => { 

    const [videos, setVideos] = useState<VideoObject[]>([]);
    const [latestVideo, setLatestVideo] = useState<VideoObject[]>([]);
    const { currentLanguage } = useLanguage();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot1 = await getDocs(collection(db, "videos"));
            const videosData: VideoObject[] = [];

            querySnapshot1.forEach((doc) => {
              videosData.push(doc.data() as VideoObject);
            });
            setVideos(videosData.slice(0, -1));
            setLatestVideo(videosData.slice(-1))

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center text-justify common-style">
            <p className="heading-1">a place to watch</p>
            {latestVideo && (
                <div data-uk-lightbox className="group hover:bg-primarylight/70 p-5">
                    <a href={latestVideo[0]?.lightbox_link} data-caption={latestVideo[0]?.title.EN} data-attrs="width: 1280; height: 720;">
                        <iframe className="w-full aspect-video pointer-events-none custom_nm:pointer-events-auto" src={latestVideo[0]?.embed_link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        <div className="flex flex-col">
                            <p className="group relative w-max mt-5 mb-3">
                                <p className="group-hover:text-primarydark text-xl custom_nm:text-2xl font-bold">{currentLanguage === "EN" ? latestVideo[0]?.title.EN : latestVideo[0]?.title.VN}</p>
                                <span className="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-primarydark group-hover:w-full"></span>
                            </p>
                            <p>{currentLanguage === "EN" ? latestVideo[0]?.description.EN : latestVideo[0]?.description.VN}
                            </p>
                        </div>
                    </a>
                </div>
            )}

            <p className="heading-2 mt-10">{currentLanguage === "EN" ? "OTHER VIDEOS" : "CÁC VIDEO KHÁC"} <span className="heading-2 hidden custom_nm:inline">{currentLanguage === "EN" ? "ON MY YOUTUBE CHANNEL" : "TRÊN KÊNH YOUTUBE CỦA MÌNH"}</span></p>
            <p className="group relative w-max mt-3">
            <a className="group-hover:text-primarydark" href="https://www.youtube.com/@jfm-channel">{currentLanguage === "EN" ? "Click here to go to my channel" : "Ấn vào đây để xem kênh của mình"}</a>
                <span className="absolute -bottom-0.5 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
                <span className="absolute -bottom-0.5 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
            </p>

            <div data-uk-lightbox className="w-full my-3 grid grid-cols-1 custom_nm:grid-cols-2 custom_lg:grid-cols-3 gap-3">
                {videos.map(video => (
                    <div className="group p-3 hover:bg-primarylight/70">
                        <a href={video.lightbox_link} data-caption={video.title.EN} data-attrs="width: 1280; height: 720;">
                            <iframe className="w-full aspect-video pointer-events-none" src={video.embed_link} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <p className="group relative w-max mt-2 mb-2">
                                <p className="group-hover:text-primarydark font-bold text-lg">{currentLanguage == "EN" ? video.title.EN : video.title.VN}</p>
                                <span className="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-primarydark group-hover:w-full"></span>
                            </p>
                            <p>
                                {currentLanguage === "EN"
                                ? video.description.EN : video.description.VN}
                            </p>
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
}