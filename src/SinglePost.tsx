import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";
import { PostObject } from './interfaces'

export const SinglePost = () => {
    const params = useParams<{ postID: string }>();
    const { postID } = params;
    
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

                    const url = postData.content; // Use the link from Firestore
                    if (url) {
                        const response = await fetch(url);
                        const text = await response.text();
                        setPostContent(text);
                        console.log(postContent)
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

        fetchPost()
    }, [postID]);

    const generateRandomIndexes = (arrLen: number, count: number) : number[] => {
        const indexes = new Set<number>()
        while (indexes.size < count) {
            indexes.add(Math.floor(Math.random() * arrLen))
        }
        return Array.from(indexes);
    };

    const title = currentPost?.title
    const image_link = currentPost?.image_link
    const created_date = currentPost?.date
    // const content = currentPost?.content
    const current_topics = currentPost?.tags

    return (
        <div className="mx-0 custom_nm:mx-10 custom_md:mx-20 custom_lg:mx-40 custom_xl:mx-60 my-10 flex flex-col text-primary items-center text-lg space-y-8">
            <div className="px-10 custom_lg:px-40 custom_xl:px-60 space-y-5">
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
                <p className="w-full  flex self-center text-4xl custom_md:text-5xl font-semibold">{title}</p>
                <div className="w-full  flex flex-row space-x-3 italic">
                    <p className="">{created_date}</p><span>|</span>
                    <p className="">3 minutes read</p>
                </div>
                <img className="w-full" src={image_link}></img>
            </div>
            
            <p className="px-10 custom_xl:px-40 text-justify whitespace-break-spaces">{postContent}</p>
            
            <div className="w-full">
                <div className="w-full px-10 custom_lg:px-20 custom_xl:px-40 flex self-center mb-2">
                    <div className="w-max relative">
                        <p className="font-semibold">MORE POSTS TO READ</p>
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary w-full"></span>
                    </div>
                </div>
                    
                <div className="px-5 custom_xl:px-28 grid custom_nm:grid-cols-2 custom_lg:grid-cols-3 gap-0">
                    {otherPost.map(post => (
                        <Link to={`/post/${post.path}`} className="group p-5 hover:bg-primarylight/70" key={post.path}>
                            <img src={post.image_link}/>
                            <div className="group relative w-fit mt-4 mb-2 text-xl font-semibold group-hover:text-primarydark">
                                <span>{post.title}</span>
                                <span className="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-primarydark group-hover:w-full"></span>
                            </div>
                            <span className="italic">{post.date}</span>
                            <p>
                                {post.short_description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    );
};
