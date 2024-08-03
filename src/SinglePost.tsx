import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";
import { PostObject } from './interfaces'
import { useLanguage } from './LanguageContext';

export const SinglePost = () => {
    const params = useParams<{ postID: string }>();
    const { postID } = params;
    const { currentLanguage } = useLanguage();
    
    const [currentPost, setCurrentPost] = useState<PostObject | null>(null);
    const [otherPost, setOtherPost] = useState<PostObject[]>([]);
    const [postContent, setPostContent] = useState<string>("");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const q = query(collection(db, "posts"), where("path", "==", postID))
                const querySnapshot = await getDocs(q);
                let postData: PostObject | null = null;

                const queryOtherSnapshot = await getDocs(collection(db, "posts"));
                let allpostData: PostObject[] = [];

                if (!querySnapshot.empty) {
                    postData = querySnapshot.docs[0].data() as PostObject;
                    let url = currentLanguage === "EN" ? postData.content.EN : postData.content.VN;
                    if (url) {
                        const response = await fetch(url);
                        const text = await response.text();
                        setPostContent(text);
                        console.log("content babi", text)
                    }
                }
                setCurrentPost(postData);

                queryOtherSnapshot.forEach((doc) => {
                    allpostData.push(doc.data() as PostObject);
                }); 

                let selectedPostData: PostObject[] = [];
                if (allpostData.length > 0) {
                    const randomIndexes = generateRandomIndexes(allpostData.length, 3);
                    selectedPostData = randomIndexes.map(index => allpostData[index]);
                }
                setOtherPost(selectedPostData)

            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchPost();
    }, [postID, currentLanguage]);

    const generateRandomIndexes = (arrLen: number, count: number) : number[] => {
        const indexes = new Set<number>()
        while (indexes.size < count) {
            indexes.add(Math.floor(Math.random() * arrLen))
        }
        return Array.from(indexes);
    };

    const image_link = currentPost?.image_link
    const current_topics = currentPost?.tags

    return (
        <div className="flex flex-col items-center space-y-8 my-10 common-style">
            <div className="w-2/3 space-y-5">
                <div className=" w-full flex self-center">
                    {current_topics && current_topics.map((topic, index) => (
                        <div className="w-max relative">
                            <div className="w-full flex flex-row space-x-1.5 font-semibold">
                                <p className="uppercase">{topic}</p>
                                <span className={`pr-1.5 ${index === current_topics.length - 1 ? 'hidden' : ''}`}>&#x2022;</span>
                            </div>
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary w-full"></span>
                        </div>
                    ))}
                </div>
                <p className="w-full flex self-center text-4xl custom_md:text-5xl font-semibold">{currentLanguage === "EN" ? currentPost?.title.EN : currentPost?.title.VN}</p>
                <div className="w-full  flex flex-row space-x-3 italic">
                    <p>{currentLanguage === "EN" ? currentPost?.date.EN : currentPost?.date.VN}</p><span>|</span>
                    <p>3 minutes read</p>
                </div>
                <img src={image_link}></img>
            </div>
            
            <p className="w-2/3 text-justify whitespace-break-spaces">{postContent}</p>
            
            <div className="w-full">
                <div className="w-full flex self-center mb-2">
                    <div className="w-max relative">
                        <p className="font-semibold">MORE POSTS TO READ</p>
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary w-full"></span>
                    </div>
                </div>
                    
                <div className="post-grid">
                    {otherPost.map(post => (
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
    );
};
