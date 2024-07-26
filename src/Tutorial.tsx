import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { TutorialObject } from './interfaces';

export const Tutorial = () => {
    const params = useParams<{ tutorialID: string }>();
    const { tutorialID } = params;

    const [currentTutorial, setCurrentTutorial] = useState<TutorialObject | null>(null);

    useEffect(() => {
        const fetchTutorials = async () => {
          try {
            console.log("Fetching data for tutorialID:", tutorialID);
            const querySnapshot = await getDocs(collection(db, "tutorials"));

            if (querySnapshot.empty) {
              console.log("No documents found.");
              setCurrentTutorial(null);
              return;
            }

            let tutorialsData: TutorialObject | null = null;

            querySnapshot.forEach(doc => {
              const data = doc.data() as TutorialObject;
              if (data.list.some(item => item.path === tutorialID)) {
                tutorialsData = data;
              }
            });

            setCurrentTutorial(tutorialsData);
            console.log("Data fetched: ", tutorialsData)

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchTutorials();
    }, [tutorialID]);

    const tutorial = currentTutorial?.list.find(item => item.path === tutorialID);
    const src = tutorial ? tutorial.embed_link : '';

    return (
        <iframe className="px-10 custom_md:px-20 py-10" src={src} width="100%" height="800"></iframe>
    );
}
