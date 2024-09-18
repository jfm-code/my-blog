import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { AlbumObject, PictureObject } from './interfaces';
import { useLanguage } from './LanguageContext';

export const Album = () => {

    const [albums, setAlbums] = useState<AlbumObject[]>([]);
    const { currentLanguage } = useLanguage();

    useEffect(() => {
        const fetchAlbums = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "albums"));
            const albumsData: AlbumObject[] = [];
            querySnapshot.forEach((doc) => {
              albumsData.push(doc.data() as AlbumObject);
            });
            setAlbums(albumsData.reverse());
          } catch (error) {
            console.error('Error fetching data in album component:', error);
          }
        };
    
        fetchAlbums();
    }, []);

    return (
        <div className="flex flex-col items-center text-justify common-style">
            <p className="heading-1">a place to see</p>
            {albums.map(album => (
                <Link to={`/album/${album.path}`} key={album.path} className="group hover:bg-primarylight/70 hover:border hover:shadow-md p-3 custom_sm:p-5 w-full flex flex-col-reverse custom_lg:flex-row custom_lg:odd:flex-row-reverse custom_lg:space-x-7 odd:space-x-reverse mb-5 custom_nm:mb-10 items-center">
                    <div className="custom_lg:w-3/4 grid grid-cols-3 gap-2 custom_sm:gap-y-5 custom_sm:gap-5">
                        {album.images.filter((image): image is PictureObject => typeof image !== 'string').map(image => (
                            <img key={image.link} className={image.style} src={image.link}></img>
                        ))}
                    </div>
                    <div className="custom_lg:w-1/4 flex flex-col items-center mb-5 custom_lg:mb-0">
                        <p className="group relative w-max">
                            <p className="group-hover:text-primarydark text-xl custom_sm:text-2xl font-bold tracking-wide">{currentLanguage === "EN" ? album.name.EN : album.name.VN}</p>
                            <span className="absolute -bottom-0 custom_sm:-bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
                            <span className="absolute -bottom-0 custom_sm:-bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
                        </p>
                        <p className="text-lg my-1 custom_sm:my-3">{currentLanguage === "EN" ? album.time.EN : album.time.VN}</p>
                        <p>{currentLanguage === "EN" ? album.description.EN : album.description.VN}</p>
                    </div>
                </Link>
            ))}

        </div>
    )
};
