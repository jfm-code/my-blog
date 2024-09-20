import { Carousel } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { OnlyLinkObject, VideoObject, PostObject, AboutMeObject, AlbumObject, PictureObject} from './interfaces';
import { useLanguage } from './LanguageContext';


export const HomePage = () => {
  const [carouselPic, setCarouselPic] = useState<OnlyLinkObject[]>([]);
  const [latestVid, setLatestVid] = useState<VideoObject[]>([]);
  const [latestAlbum, setLatestAlbum] = useState<AlbumObject[]>([]);
  const [postContent, setPostContent] = useState<PostObject[]>([]);
  const [previewTexts, setPreviewTexts] = useState<string[]>([]);
  const [aboutMeInfo, setAboutMeInfo] = useState<AboutMeObject | null>(null);
  const { currentLanguage } = useLanguage();
  const viewportWidth = window.innerWidth;
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        // Fetch carousel data
        const queryCarousel = await getDocs(collection(db, "carousel"));
        const carouselData: OnlyLinkObject[] = [];
        queryCarousel.forEach((doc) => {
          carouselData.push(doc.data() as OnlyLinkObject);
        });

        // Fetch about me data
        const queryInfo = await getDocs(collection(db, "aboutme"));
        let aboutmeData: AboutMeObject | null = null;
        if (!queryInfo.empty) {
          aboutmeData = queryInfo.docs[0].data() as AboutMeObject;
        }

        // Fetch latest video data
        const queryVideo = await getDocs(collection(db, "videos"));
        const videoData: VideoObject[] = [];
        queryVideo.forEach((doc) => {
          videoData.push(doc.data() as VideoObject)
        })

        // Fetch latest album data
        const queryAlbum = await getDocs(collection(db, "albums"));
        const albumData: AlbumObject[] = [];
        queryAlbum.forEach((doc) => {
          albumData.push(doc.data() as AlbumObject);
        })

        // Determine text length based on viewport size
        const textLimit = viewportWidth <= 500 ? 50 : 150; // Limit words: 50 for mobile, 150 for larger screens

        // Fetch 2 latest posts data
        const queryPost = await getDocs(collection(db, "posts"));
        const postData: PostObject[] = [];
        queryPost.forEach((doc) => {
          postData.push(doc.data() as PostObject);
        });
        const twoLatestPosts = postData.slice(-2);

        // Fetch 2 text previews for the 2 latest posts
        let textPreviews: string[] = [];
        for (const post of twoLatestPosts) {
          const url = currentLanguage === "EN" ? post.content.EN : post.content.VN;
          let text = "";
          if (url) {
            const response = await fetch(url);
            text = await response.text();
            text = text.split(" ").slice(0, textLimit).join(" ");
          }
          textPreviews.push(text);
        }

        // Update state with all fetched data
        setCarouselPic(carouselData);
        setAboutMeInfo(aboutmeData);
        setLatestAlbum(albumData.slice(-1));
        setLatestVid(videoData.slice(-1));
        setPostContent(twoLatestPosts);
        setPreviewTexts(textPreviews);
      } catch (error) {
        console.error("Error fetching data in homepage component:", error);
      }
    };

    fetchData()
  }, [currentLanguage, viewportWidth])

  const preview_about_me = currentLanguage === "EN" ? 
    aboutMeInfo?.overview_myself[0].EN.split(" ").slice(0, 51).join(" ") + "..."
    : aboutMeInfo?.overview_myself[0].VN.split(" ").slice(0, 51).join(" ") + "...";

  return (
    <div className="common-style">
      <div className="flex flex-col items-center">
        <p className="ml-14 mb-0 mt-[-20px] custom_sm:mt-0 custom_sm:mb-14 custom_sm:text-[200px] text-9xl font-fontAutography">j.f.m</p>
        <p className="mt-5 custom_sm:mt-0"> {currentLanguage === "EN" ? "A personal blog" : "Trang blog của mình"}
          <span className="hidden custom_nm:inline">
            {currentLanguage === "EN" ? ". Created with discipline, wisdom and kindness." : ". Được tạo nên từ sự kỉ luật, trí tuệ và lòng tốt."}
          </span>
        </p>
        <div className="pt-5 custom_sm:pt-8 custom_md:pb-4">
          <Carousel transition={{ duration: 1 }} className="w-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {carouselPic.map(image => (
              <img src={image.link} alt="" className="h-full w-full object-cover"
            />))}
          </Carousel>
        </div>

      </div>
      <div className="flex flex-row py-5 custom_md:py-10 space-x-10">
        <div className="w-full custom_md:w-2/3">
          {postContent.map((post, index) => (
            <div className="flex flex-col items-center">
              <p className="font-medium uppercase pt-5">{currentLanguage === "EN" ? post.date.EN : post.date.VN}</p>
              <p className="heading-2 py-4">{currentLanguage === "EN" ? post.title.EN : post.title.VN}</p>
              <img className="w-full" src={post.image_link}></img>
              <p className="text-justify mt-7 whitespace-pre-wrap">{previewTexts[index]+'...'}</p>
              <Link to={`/post/${post.path}`}>
                <input className="button" type="submit" value={currentLanguage === "EN" ? "Read more" : "Đọc thêm"}></input>
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden custom_md:block w-1/3 flex flex-col text-lg text-justify space-y-2">
          <Link to="/about" className="group hover:bg-primarylight/70 flex flex-col items-center p-3">
            <div className="group relative w-max">
              <p className="heading-2">
                {currentLanguage === "EN" ? "About me" : "Về bản thân mình"}
                </p>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
            </div>
            
            <img className="m-5 custom_md:p-5 custom_xl:p-0 custom_xl:size-72 rounded-full" src={aboutMeInfo?.profilepic_link}></img>
            <p>
              {preview_about_me}
            </p>
          </Link>
          <Link to="/album" className="group hover:bg-primarylight/70 flex flex-col items-center p-3">
            <div className="group relative w-max">
              <p className="heading-2">
                {currentLanguage === "EN" ? "My latest album" : "Album mới nhất"}
                </p>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-8 mb-4">
              {latestAlbum[0]?.images
                .filter((image): image is PictureObject => typeof image === 'object' && image !== null)
                .map(image => (
                  <img key={image.link} className={image.style || ''} src={image.link} alt="Album Image" />
              ))}
            </div>
            <p className="heading-3">{currentLanguage == "EN" ? latestAlbum[0]?.name.EN : latestAlbum[0]?.name.VN}</p>
            <p className="my-2">{currentLanguage == "EN" ? latestAlbum[0]?.description.EN : latestAlbum[0]?.description.VN}</p>
          </Link>
          <Link to="/video" className="group hover:bg-primarylight/70 flex flex-col items-center p-3">
            <div className="group relative w-max">
              <p className="heading-2">
                {currentLanguage === "EN" ? "My latest video" : "Video mới nhất"}
                </p>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
            </div>
            <iframe className="pt-8 pb-4 aspect-auto" src={latestVid[0]?.embed_link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
            <p className="heading-3">{currentLanguage == "EN" ? latestVid[0]?.title.EN : latestVid[0]?.title.VN}</p>
            <p className="my-2">
              {currentLanguage === "EN"
                ? latestVid[0]?.description.EN
                : latestVid[0]?.description.VN
              }
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
};
