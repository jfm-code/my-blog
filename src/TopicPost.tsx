import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs, where, query } from "firebase/firestore";
import { PostObject, TopicObject } from './interfaces';
import { useLanguage } from './LanguageContext';

export const TopicPost = () => {
    const params = useParams<{ topicID: string }>();
    const { topicID } = params;
    const [posts, setPosts] = useState<PostObject[]>([]);
    const [currentTopic, setCurrentTopic] = useState<TopicObject | null>(null);
    const { currentLanguage } = useLanguage();

    useEffect(() => {
        const fetData = async () => {
            try {
                const q1 = query(collection(db, "topics"), where('name.EN', '==', topicID));
                const querySnapshot1 = await getDocs(q1);
                const querySnapshot2 = await getDocs(collection(db, "posts"));

                // Filter posts based on the tags array containing an object where 'EN' matches topicID
                const filteredPosts = querySnapshot2.docs.map(doc => doc.data() as PostObject)
                    .filter(post => post.tags.some(tag => tag.EN === topicID));
                setPosts(filteredPosts);

                let currentTopicData: TopicObject | null = null;
                currentTopicData = querySnapshot1.docs[0].data() as TopicObject;
                setCurrentTopic(currentTopicData);

            } catch(error) {
                console.log('Error fetching data:', error);
            }
        };
        fetData();
    }, [topicID]);

    return (
        <div className="flex flex-col items-center py-8 common-style">
            <div className="mb-8 w-max relative">
                <p className="uppercase font-semibold custom_sm:text-2xl">
                    {currentLanguage === "EN" ? "Posts about " : "Các bài viết về "} 
                    {currentLanguage === "EN" ? currentTopic?.name.EN : currentTopic?.name.VN}</p>
                <span className="absolute -bottom-0.5 left-0 h-0.5 bg-primary w-full"></span>
            </div>
            <div className="grid grid-cols-1 custom_nm:grid-cols-2 custom_md:grid-cols-3 custom_lg:grid-cols-4 custom_md:gap-2">
                {posts.map(post => (
                    <Link to={`/post/${post.path}`} className="group p-3 hover:bg-primarylight/70">
                        <img src={post.image_link}></img>
                        <div className="mt-3 mb-2 font-semibold group-hover:text-primarydark group-hover:underline group-hover:decoration-2 group-hover:underline-offset-8">{currentLanguage === "EN" ? post.title.EN : post.title.VN}</div>
                        <span className="italic">{currentLanguage === "EN" ? post.date.EN : post.date.VN}</span>
                        <p>{currentLanguage === "EN" ? post.short_description.EN : post.short_description.VN}</p>
                    </Link>
                ))}
            </div>
        </div>
        
    );
};