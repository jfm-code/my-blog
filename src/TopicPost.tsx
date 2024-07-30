import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs, where, query } from "firebase/firestore";
import { PostObject } from './interfaces';
import { useLanguage } from './LanguageContext';

export const TopicPost = () => {
    const params = useParams<{ topicID: string }>();
    const { topicID } = params;
    const [TopicpostContent, setTopicpostContent] = useState<PostObject[]>([]);
    const { currentLanguage } = useLanguage();

    useEffect(() => {
        const fetData = async () => {
            const q = query(collection(db, "posts"), where('tags', 'array-contains', topicID));
            const querySnapshot = await getDocs(q);

            const topicPostData: PostObject[] = [];
            querySnapshot.forEach((doc) => {
                topicPostData.push(doc.data() as PostObject);
            });
            setTopicpostContent(topicPostData);
        };
        fetData();
    }, [topicID]);

    return (
        <div className="flex flex-col py-10 px-5 items-center custom_sm:px-10 custom_md:px-20 custom_xl:px-40 text-lg text-primary">
            <div className="mb-8 w-max relative">
                <p className="uppercase font-semibold custom_sm:text-2xl">All posts about {topicID}</p>
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary w-full"></span>
            </div>
            <div className="grid grid-cols-1 custom_nm:grid-cols-2 custom_md:grid-cols-3 custom_lg:grid-cols-4 custom_md:gap-2">
                {TopicpostContent.map(post => (
                    <Link to={`/post/${post.path}`} className="group p-5 hover:bg-primarylight/70">
                        <img src={post.image_link}></img>
                        <div className="group relative w-fit mt-4 mb-2 text-xl font-semibold group-hover:text-primarydark">
                            <span>{currentLanguage ==="EN" ? post.title.EN : post.title.VN}</span>
                            <span className="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-primarydark group-hover:w-full"></span>
                        </div>
                        <span className="italic">{currentLanguage === "EN" ? post.date.EN : post.date.VN}</span>
                        <p>{currentLanguage === "EN" ? post.short_description.EN : post.short_description.VN}</p>
                    </Link>
                ))}
            </div>
        </div>
        
    );
};