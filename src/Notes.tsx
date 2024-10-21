import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";
import { TopicObject, TutorialObject } from './interfaces';
import { useLanguage } from './LanguageContext';

export const Coding = () => {
    const [tutorials, setTutorials] = useState<TutorialObject[]>([]);
    const [noteTags, setNoteTags] = useState<TopicObject[]>([])
    const [selectedTags, setSelectedTags] = useState<string>("all");
    const { currentLanguage } = useLanguage();

    useEffect(() => {
        const fetchTutorials = async () => {
          try {
            // fetch the tag data
            const querySnapshot1 = await getDocs(collection(db, "note-topics"));
            const noteTagData: TopicObject[] = []
            querySnapshot1.forEach((doc) => {
                noteTagData.push(doc.data() as TopicObject);
            });
            setNoteTags(noteTagData);

            // fetch only the posts with selected tag, if choose all then display all tutorials
            const tutorialsData: TutorialObject[] = [];
            console.log(selectedTags)
            if (selectedTags == "all") {
                const querySnapshot = await getDocs(collection(db, "tutorials"));
                querySnapshot.forEach((doc) => {
                    tutorialsData.push(doc.data() as TutorialObject);
                });
                setTutorials(tutorialsData);
            } else {
                const tutorialsRef = collection(db, "tutorials");
                const q = query(tutorialsRef, where("name.EN", "==", selectedTags));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    tutorialsData.push(doc.data() as TutorialObject);
                });
                setTutorials(tutorialsData);
            }
            
          } catch (error) {
            console.error('Error fetching data in coding component:', error);
          }
        };
    
        fetchTutorials();
    }, [selectedTags]);

    return (
        <div className="flex flex-col items-center text-justify common-style">
            <p className="heading-1">a place to learn</p>
            <div className="flex flex-row flex-wrap ml-3 mb-3 text-sm">
                {noteTags.map(notetag => (
                    <button onClick={() => setSelectedTags(notetag.name.EN)} className={`filter-btn mr-4 capitalize ${selectedTags === notetag.name.EN ? 'bg-primary border-primary text-white' : ''}`}>{notetag.name.EN}</button>
                ))}
            </div>
            <div className="grid grid-cols-1 custom_nm:grid-cols-2 custom_md:grid-cols-3 gap-5 mb-10">
                {/* Flatten all the lists from each TutorialObject into one array and map over it */}
                {tutorials.flatMap(prog_language => prog_language.list).map(tutorial => (
                    <Link to={`/note/${tutorial.path}`} className="group hover:bg-primarylight/70 p-2" key={tutorial.path}>
                        <img src={tutorial.image_link} alt={tutorial.title.EN} />
                        <div className="group relative w-fit my-2 flex tracking-wide">
                            <span className="font-bold group-hover:text-primarydark group-hover:underline group-hover:decoration-2 group-hover:underline-offset-[6px]">
                                {currentLanguage === "EN" ? tutorial.title.EN : tutorial.title.VN}
                            </span>
                        </div>
                        <p>{currentLanguage === "EN" ? tutorial.description.EN : tutorial.description.VN}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
