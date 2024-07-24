import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

interface Tutorials {
    name: string;
    list: [{
        path: string;
        title: string;
        image_link: string;
    }];
}

export const Coding = () => {
    const [tutorials, setTutorials] = useState<Tutorials[]>([]);

    useEffect(() => {
      const fetchTutorials = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/get-tutorials');
          setTutorials(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchTutorials();
    }, []);

    return (
        <div className="flex flex-col items-center px-5 custom_sm:px-10 custom_md:px-20 custom_xl:px-40 text-justify text-lg text-primary">
            <p className="w-full flex justify-center text-5xl custom_sm:text-6xl custom_nm:text-7xl custom_md:text-8xl font-fontAutography pb-10 custom_sm:py-10">a place to learn</p>
            {tutorials.map(prog_language => (
                <div key={prog_language.name}>
                    <p className="self-start text-2xl text-primarydark custom_lg:text-3xl font-semibold my-7">{prog_language.name}</p>
                    <div className="grid grid-cols-1 custom_nm:grid-cols-2 custom_md:grid-cols-3 custom_xl:grid-cols-4 gap-5 custom_md:gap-8 mb-10">
                        {prog_language.list.map(tutorial => (
                            <Link to={`/coding/${tutorial.path}`} className="group hover:bg-primarylight/70 p-2 custom_nm:p-5" key={tutorial.path}>
                                <img src={tutorial.image_link}/>
                                <div className="group relative w-max my-3 text-xl font-semibold group-hover:text-primarydark">
                                    <span>{tutorial.title}</span>
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
