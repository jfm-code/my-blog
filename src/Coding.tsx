import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { TutorialObject } from './interfaces';
import { useLanguage } from './LanguageContext';

export const Coding = () => {
    const [tutorials, setTutorials] = useState<TutorialObject[]>([]);
    const { currentLanguage } = useLanguage();

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
            console.error('Error fetching data in coding component:', error);
          }
        };
    
        fetchTutorials();
    }, []);

    return (
        <div className="flex flex-col items-center text-justify common-style">
            <p className="heading-1">a place to learn</p>
            {tutorials.map(prog_language => (
                <div key={prog_language.name.EN}>
                    <p className="self-start heading-2 mb-3">{currentLanguage == "EN" ? prog_language.name.EN : prog_language.name.VN}</p>
                    <div className="grid grid-cols-1 custom_nm:grid-cols-2 custom_md:grid-cols-3 gap-4 mb-10">
                        {prog_language.list.map(tutorial => (
                            <Link to={`/coding/${tutorial.path}`} className="group hover:bg-primarylight/70 p-3" key={tutorial.path}>
                                <img src={tutorial.image_link}/>
                                <div className="group relative w-fit my-2 flex tracking-wide">
                                    <span className="text-lg font-bold group-hover:text-primarydark group-hover:underline group-hover:decoration-2 group-hover:underline-offset-[6px]">{currentLanguage == "EN" ? tutorial.title.EN : tutorial.title.VN}</span>
                                </div>
                                <p>{currentLanguage === "EN" ? tutorial.description.EN : tutorial.description.VN}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}    
        </div>
    );
}
