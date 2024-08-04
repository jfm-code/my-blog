import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";
import { VideoObject } from './interfaces';

export const Video = () => { 

    const [videos, setVideos] = useState<VideoObject[]>([]);
    const [latestVideo, setLatestVideo] = useState<VideoObject | null>(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot1 = await getDocs(collection(db, "videos"));

            const q = query(collection(db, "videos"), where("latest_video", "==", true));
            const latestVideoSnapshot = await getDocs(q);

            const videosData: VideoObject[] = [];
            let latestVideoData: VideoObject | null = null;

            querySnapshot1.forEach((doc) => {
              videosData.push(doc.data() as VideoObject);
            });
            setVideos(videosData);

            if (!latestVideoSnapshot.empty) {
                latestVideoData = latestVideoSnapshot.docs[0].data() as VideoObject;
            }
            setLatestVideo(latestVideoData);

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
                    <a href={latestVideo.lightbox_link} data-caption={latestVideo.title} data-attrs="width: 1280; height: 720;">
                        <iframe className="w-full aspect-video pointer-events-none custom_nm:pointer-events-auto" src={latestVideo.embed_link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        <div className="flex flex-col">
                            <p className="group relative w-max mt-5 mb-3">
                                <p className="group-hover:text-primarydark text-xl custom_nm:text-2xl font-bold">{latestVideo.title}</p>
                                <span className="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-primarydark group-hover:w-full"></span>
                            </p>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </a>
                </div>
            )}

            <p className="heading-2 mt-10">OTHER VIDEOS <span className="heading-2 hidden custom_nm:inline">ON MY YOUTUBE CHANNEL</span></p>
            <p className="group relative w-max mt-3">
                <a className="group-hover:text-primarydark" href="https://www.youtube.com/@jfm-channel">Click here to go to my channel</a>
                <span className="absolute -bottom-0.5 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
                <span className="absolute -bottom-0.5 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
            </p>

            <div data-uk-lightbox className="w-full my-3 grid grid-cols-1 custom_nm:grid-cols-2 custom_lg:grid-cols-3 gap-3">
                {videos.map(video => (
                    <div className="group p-3 hover:bg-primarylight/70">
                        <a href={video.lightbox_link} data-caption={video.title} data-attrs="width: 1280; height: 720;">
                            <iframe className="w-full aspect-video pointer-events-none" src={video.embed_link} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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