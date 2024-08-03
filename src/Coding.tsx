import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { TutorialObject } from './interfaces';

export const Coding = () => {
    const [tutorials, setTutorials] = useState<TutorialObject[]>([]);

    useEffect(() => {
        const fetchTutorials = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "tutorials"));
            const tutorialsData: TutorialObject[] = [];
            querySnapshot.forEach((doc) => {
              tutorialsData.push(doc.data() as TutorialObject);
            });
            setTutorials(tutorialsData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchTutorials();
    }, []);

    return (
        <div className="flex flex-col items-center text-justify common-style">
            <p className="w-full flex justify-center text-5xl custom_sm:text-6xl custom_nm:text-7xl custom_md:text-8xl font-fontAutography pb-10 custom_sm:py-10">a place to learn</p>
            {tutorials.map(prog_language => (
                <div key={prog_language.name}>
                    <p className="self-start heading-2 mb-3">{prog_language.name}</p>
                    <div className="grid grid-cols-1 custom_nm:grid-cols-2 custom_md:grid-cols-3 gap-4 mb-10">
                        {prog_language.list.map(tutorial => (
                            <Link to={`/coding/${tutorial.path}`} className="group hover:bg-primarylight/70 p-3" key={tutorial.path}>
                                <img src={tutorial.image_link}/>
                                <div className="group relative w-fit my-2 flex">
                                    <span className="text-lg font-bold group-hover:text-primarydark">{tutorial.title}</span>
                                    <span className="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-primarydark group-hover:w-full"></span>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}    
        </div>
    );
}
