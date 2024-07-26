import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { AlbumObject, PictureObject } from './interfaces';

export const Album = () => {

    const [albums, setAlbums] = useState<AlbumObject[]>([]);

    useEffect(() => {
        const fetchAlbums = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "albums"));
            const albumsData: AlbumObject[] = [];
            querySnapshot.forEach((doc) => {
              albumsData.push(doc.data() as AlbumObject);
            });
            setAlbums(albumsData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchAlbums();
    }, []);

    return (
        <div className="flex flex-col items-center px-5 custom_sm:px-10 custom_md:px-20 custom_xl:px-40 text-justify text-lg text-primary">
            <p className="w-full flex justify-center text-5xl custom_sm:text-6xl custom_nm:text-7xl custom_md:text-8xl font-fontAutography pb-10 custom_sm:py-10">a place to see</p>
            {albums.map(album => (
                <Link to={`/album/${album.path}`} key={album.path} className="group hover:bg-primarylight/70 hover:border hover:shadow-md p-8 w-full flex flex-col-reverse custom_lg:flex-row custom_lg:odd:flex-row-reverse custom_lg:space-x-14 odd:space-x-reverse mb-14 items-center">
                    <div className="custom_lg:w-3/4 grid grid-cols-1 custom_sm:grid-cols-2 custom_lg:grid-cols-3 gap-y-8 custom_sm:gap-8 items-center">
                        {album.images.filter((image): image is PictureObject => typeof image !== 'string').map(image => (
                            <img className={image.style} src={image.link}></img>
                        ))}
                    </div>
                    <div className="custom_lg:w-1/4 flex flex-col items-center mb-5 custom_lg:mb-0">
                        <p className="group relative w-max mb-5">
                            <p className="group-hover:text-primarydark text-3xl custom_nm:text-4xl font-semibold">{album.name}</p>
                            <span className="absolute -bottom-2 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
                            <span className="absolute -bottom-2 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
                        </p>
                        <p className="text-2xl mb-5">{album.time}</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </Link>
            ))}
            
        </div>
    )
};
