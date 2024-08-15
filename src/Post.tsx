import './styles/fonts.css';
import { Checkbox } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { TopicObject, PostObject } from './interfaces';
import { useLanguage } from './LanguageContext';

export const Post = () => {  
    const [topics, setTopics] = useState<TopicObject[]>([]);
    const [posts, setPosts] = useState<PostObject[]>([]);
    const [currentTopics, setCurrentTopics] = useState<string[]>([]);
    const { currentLanguage } = useLanguage();

    const selectTopic = (topic: string) => {
        console.log("topic passing in", topic);

        setCurrentTopics(prevTopics => {
            // Create a copy of the previous state
            const updatedTopics = [...prevTopics];
            // Check if the topic is already in the list
            const index = updatedTopics.indexOf(topic.toLocaleLowerCase());
            if (index === -1) {
                updatedTopics.push(topic.toLocaleLowerCase());
            } else {
                // Remove topic if already in the list
                updatedTopics.splice(index, 1);
            }
            return updatedTopics;
        });
    };

    const fetchData = async () => {
        try {
        const querySnapshot1 = await getDocs(collection(db, "topics"));
        const querySnapshot2 = await getDocs(collection(db, "posts"));

        const albumsData: TopicObject[] = [];
        let postsData: PostObject[] = [];

        querySnapshot1.forEach((doc) => {
            albumsData.push(doc.data() as TopicObject);
        });
        setTopics(albumsData);

        let tempPost: PostObject;
        querySnapshot2.forEach((doc) => {
            console.log("array size: ", currentTopics.length);
            if (currentTopics.length > 0) {
                tempPost = doc.data() as PostObject;
                for (const tag of tempPost.tags) {
                    if (currentTopics.includes(tag.EN)) {
                        postsData.push(tempPost);
                        break;
                    }
                }
            }
            else {
                postsData.push(doc.data() as PostObject);
            }
        });
        setPosts(postsData);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    useEffect(() => {
        fetchData();
    }, [currentTopics]);

    return (
        <div className="flex flex-col items-center text-justify common-style">
            <p className="heading-1">a place to write</p>
            <div className="w-full flex flex-col custom_md:flex-row custom_md:space-x-8 custom_lg:space-x-16">
                <img className="flex self-center w-full custom_nm:w-4/5 custom_md:self-start custom_md:w-2/5 custom_md:h-full" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-1.JPG?alt=media&token=06767790-e40c-4c87-9d38-06618e011104"></img>
                <div className="flex flex-col mt-5 w-full custom_nm:w-4/5 self-center custom_md:mt-0 ">
                    <p className="text-xl custom_sm:text-2xl font-medium">Post title and link goes here</p>
                    <p className="my-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <input className="button w-fit" type="submit" value="Read more"></input>
                </div>
            </div>
            <div className="w-full flex flex-col flex-auto mb-10 pt-5 custom_lg:flex-row custom_lg:space-x-5 custom_lg:my-10">
                <div className="flex flex-col mb-5 custom_lg:mx-0 custom_lg:mb-0">
                    <p className="flex self-center custom_lg:self-start text-2xl font-semibold mb-2">TOPICS</p>
                    <div className="w-full custom_lg:w-1/6 flex justify-start flex-wrap custom_lg:flex-col">
                        {topics.map(topic => (
                            <div className="flex items-center min-w-52">
                                <Checkbox onClick={() => selectTopic(topic.name.EN)} className="w-6 h-6 rounded-none checked:bg-primary border-primary border-2 checked:border-none" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
                                <label className="cursor-pointer">{currentLanguage === "EN" ? topic.name.EN : topic.name.VN}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex self-center w-full custom_lg:w-5/6">
                    <div className="post-grid">
                        {posts.map(post => (
                        <Link to={`/post/${post.path}`} className="group p-3 hover:bg-primarylight/70" key={post.path}>
                            <img src={post.image_link}/>
                            <div className="group relative w-fit mt-4 mb-2 text-xl font-semibold group-hover:text-primarydark">
                                <span className="group-hover:text-primarydark">{currentLanguage === "EN" ? post.title.EN : post.title.VN}</span>
                                <span className="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-primarydark group-hover:w-full"></span>
                            </div>
                            <span className="italic">{currentLanguage === "EN" ? post.date.EN : post.date.VN}</span>
                            <p>
                                {currentLanguage === "EN" ? post.short_description.EN : post.short_description.VN}
                            </p>
                        </Link>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
