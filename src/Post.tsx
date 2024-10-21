import './styles/fonts.css';
import { Checkbox } from "@material-tailwind/react";
import { DefaultPagination } from './Pagination';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { TopicObject, PostObject } from './interfaces';
import { useLanguage } from './LanguageContext';

export const Post = () => {  
    const [topics, setTopics] = useState<TopicObject[]>([]);
    const [posts, setPosts] = useState<PostObject[]>([]);
    const [latestpost, setLatestPost] = useState<PostObject | null>(null);
    const [currentTopics, setCurrentTopics] = useState<string[]>([]);
    let [latestpostContent, setLatestPostContent] = useState<string>("");
    const [currentPage, setCurrentPage] = useState(1); // For the pagination component
    let [postsPerPage, setPostPerPage] = useState(3);
    const { currentLanguage } = useLanguage();
    const viewportWidth = window.innerWidth;

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

        const topicData: TopicObject[] = [];
        let postsData: PostObject[] = [];

        querySnapshot1.forEach((doc) => {
            topicData.push(doc.data() as TopicObject);
        });
        setTopics(topicData);

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

        if (!querySnapshot2.empty) {
            const latestPostData = querySnapshot2.docs[querySnapshot2.docs.length - 1].data() as PostObject;
            setLatestPost(latestPostData);
            let url = currentLanguage === "EN" ? latestPostData.content.EN : latestPostData.content.VN;
                if (url) {
                    const response = await fetch(url);
                    const text = await response.text();
                    setLatestPostContent(text);
                    console.log("content babi", text)
                }
        } else {
            setLatestPost(null);
        }

        setPosts(postsData.reverse()); // Show the most recent post first

        } catch (error) {
          console.error('Error fetching data in post component:', error);
        }
    };

    useEffect(() => {
        fetchData();
        if (viewportWidth <= 500) {
            setPostPerPage(3);
        } else {
            setPostPerPage(6);
        }
    }, [currentTopics, currentLanguage, viewportWidth]);

    // For the pagination component
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <div className="flex flex-col items-center text-justify common-style">
            <p className="heading-1">a place to write</p>
            <div className="w-full flex flex-col custom_md:flex-row custom_md:space-x-8 custom_lg:space-x-16">
                <img className="flex self-center w-full custom_nm:w-4/5 custom_md:self-start custom_md:w-2/5 custom_md:h-full" src={latestpost?.image_link}></img>
                <div className="flex flex-col mt-5 w-full custom_nm:w-4/5 self-center custom_md:mt-0 ">
                    <p className="text-xl custom_sm:text-2xl font-medium">{currentLanguage === "EN" ? latestpost?.title.EN : latestpost?.title.VN}</p>
                    <p className="my-2">
                        {viewportWidth <= 500 
                            ? latestpostContent.split(" ").slice(0, 50).join(" ") + "..." 
                            : latestpostContent.split(" ").slice(0, 100).join(" ") + "..."}
                    </p>
                    <Link to={`/post/${latestpost?.path}`}>
                        <input className="button w-fit" type="submit" value={currentLanguage === "EN" ? "Read more" : "Đọc thêm"}></input>
                    </Link>
                </div>
            </div>
            <div className="w-full flex flex-col flex-auto mb-10 pt-5 custom_lg:flex-row custom_lg:space-x-5 custom_lg:my-10">
                <div className="flex flex-col mb-5 custom_lg:mx-0 custom_lg:mb-0">
                    <p className="flex self-center custom_lg:self-start text-xl tracking-wide font-semibold mb-2">{currentLanguage == "EN" ? "TOPICS" : "CHỦ ĐỀ"}</p>
                    <div className="w-full custom_lg:w-1/6 flex justify-start flex-wrap custom_lg:flex-col">
                        {topics.map(topic => (
                            <div className="flex items-center min-w-52">
                                <Checkbox ripple={false} onClick={() => selectTopic(topic.name.EN)}  className="w-5 h-5 rounded-none checked:bg-primary border-primary border-2 checked:border-none before:h-10 before:w-10" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
                                <label className="capitalize">{currentLanguage === "EN" ? topic.name.EN : topic.name.VN}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col self-center custom_lg:self-start w-full custom_lg:w-5/6">
                    <div className="post-grid">
                        {currentPosts.map(post => (
                        <Link to={`/post/${post.path}`} className="group p-3 hover:bg-primarylight/70" key={post.path}>
                            <img src={post.image_link}/>
                            <div className="mt-3 mb-2 tracking-wide font-semibold group-hover:text-primarydark group-hover:underline group-hover:decoration-1.5 group-hover:underline-offset-[5.5px]">{currentLanguage === "EN" ? post.title.EN : post.title.VN}</div>
                            <span className="italic">{currentLanguage === "EN" ? post.date.EN : post.date.VN}</span>
                            <p>
                                {currentLanguage === "EN" ? post.short_description.EN : post.short_description.VN}
                            </p>
                        </Link>
                        ))}
                    </div>
                    {/* The pagination component locates here */}
                    <DefaultPagination currentPage={currentPage} setPage={setCurrentPage} totalPages={totalPages} />
                </div>
            </div>
        </div>
    )
}
