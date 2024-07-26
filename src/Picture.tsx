import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";
import { AlbumObject } from './interfaces';

export const Picture = () => {
    const params = useParams<{ albumID: string }>();
    const { albumID } = params;

    const [currentAlbum, setCurrentAlbum] = useState<AlbumObject | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const q = query(collection(db, "albums"), where("path", "==", albumID));
            const currentAlbumSnapshot = await getDocs(q);

            let currentAlbumData: AlbumObject | null = null

            if (!currentAlbumSnapshot.empty) {
                currentAlbumData = currentAlbumSnapshot.docs[0].data() as AlbumObject;
            }
            setCurrentAlbum(currentAlbumData);

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
    }, [albumID]);

    const header = currentAlbum?.name;
    const time = currentAlbum?.time;

    const remainders = [0, 1, 2, 3];

    return (
        <div data-uk-lightbox className="px-5 custom_nm:px-10 custom_md:px-20 custom_lg:px-40">
            <div className="flex flex-col items-center text-primary my-8 space-y-5">
                <p className="text-4xl custom_nm:text-5xl font-semibold">{header}</p>
                <p className="text-2xl">{time}</p>
            </div>
            <div className="grid grid-cols-1 custom_sm:grid-cols-2 custom_nm:grid-cols-3 custom_md:grid-cols-4 gap-8 items-start mb-14">
                {remainders.map(remainder => (
                    <div key={remainder} className="grid gap-8">
                        {currentAlbum && currentAlbum.images
                            .filter((_, index) => index % 4 === remainder)
                            .map((image, index) => {
                                const link = typeof image === 'string' ? image : image.link;
                                return (
                                    <div key={index} className="w-full relative max-w-sm mx-auto h-auto">
                                        <img className="w-full max-w-sm mx-auto h-auto relative z-0" src={link} alt="image"/>
                                        <a href={link} className="absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "></a>
                                    </div>
                                );
                            })
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}
