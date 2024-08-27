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
    const [readingTime, setReadTime] = useState<number>(0);

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

                        // get the reading time
                        const wordCounts = text.split(' ').filter(word => word.length > 0).length;
                        console.log(wordCounts);
                        const wordsPerMinute = 230; // Average reading speed
                        const estimatedReadingTime = Math.ceil(wordCounts / wordsPerMinute);
                        setReadTime(estimatedReadingTime);
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
            <div className="w-full custom_sm:w-5/6 custom_md:w-2/3 space-y-5">
                <div className=" w-full flex self-center">
                    {current_topics && current_topics.map((topic, index) => (
                        <div className="w-max relative">
                            <div className="w-full flex flex-row space-x-0.5 font-semibold">
                                <Link to={`/post/topic/${topic.EN}`} className="hover:bg-primarylight hover:rounded-sm hover:text-primarydark px-1.5 uppercase tracking-wide">{currentLanguage === "EN" ? topic.EN : topic.VN}</Link>
                                <span className={`pr-0.5 ${index === current_topics.length - 1 ? 'hidden' : ''}`}>&#x2022;</span>
                            </div>
                            <span className="absolute -bottom-0.5 left-0 h-0.5 bg-primary w-full"></span>
                        </div>
                    ))}
                </div>
                <p className="w-full flex self-center text-2xl custom_md:text-4xl font-semibold text-primarydark tracking-wide">{currentLanguage === "EN" ? currentPost?.title.EN : currentPost?.title.VN}</p>
                <div className="w-full  flex flex-row space-x-3 italic">
                    <p>{currentLanguage === "EN" ? currentPost?.date.EN : currentPost?.date.VN}</p><span>|</span>
                    <p>{readingTime} {currentLanguage === "EN" ? "minute(s) read" : "phút đọc"}</p>
                </div>
                <img className="w-full" src={image_link}></img>
            </div>
            
            <p className="w-full custom_sm:w-5/6 custom_md:w-2/3 text-justify whitespace-break-spaces">{postContent}</p>
            
            <div className="w-full">
                <div className="w-full flex self-center mb-2">
                    <div className="w-max relative">
                        <p className="font-semibold tracking-wide">{currentLanguage === "EN" ? "MORE POSTS TO READ" : "CÁC BÀI VIẾT KHÁC"}</p>
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary w-full"></span>
                    </div>
                </div>
                    
                <div className="post-grid">
                    {otherPost.map(post => (
                        <Link to={`/post/${post.path}`} className="group p-3 hover:bg-primarylight/70" key={post.path}>
                            <img src={post.image_link}/>
                            <div className="mt-3 mb-2 tracking-wide font-semibold group-hover:text-primarydark group-hover:underline group-hover:decoration-2 group-hover:underline-offset-8">{currentLanguage === "EN" ? post.title.EN : post.title.VN}</div>
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
