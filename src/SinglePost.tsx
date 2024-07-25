import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const SinglePost = () => {
    const params = useParams<{ postID: string }>();
    const { postID } = params;

    const otherPosts = [
        { id: 'bus-experience', title: 'What I learned when sitting in the bus', image_link: 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-3.jpg?alt=media&token=3e861c8b-7396-4e59-8044-066e25748230'},
        { id: 'home-isnt-home', title: "When home isn't a safe place anymore", image_link: 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-1.jpg?alt=media&token=3c0f89db-9457-4d76-ba3b-e54b089e4ed8'},
        { id: 'feminine-energy', title: "What if I get hired because of my gender?", image_link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/middle-school%2Fmiddle-school-1.jpg?alt=media&token=506736c5-758a-4871-8e44-4f6542fdf6a8'},
    ];

    const postInfo: Record<string, string[]> = {
        'bus-experience': ['What I learned when sitting in the bus', 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-3.jpg?alt=media&token=3e861c8b-7396-4e59-8044-066e25748230'],
        'home-isnt-home': ["When home isn't a safe place anymore", 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-1.jpg?alt=media&token=3c0f89db-9457-4d76-ba3b-e54b089e4ed8'],
        'feminine-energy': ["What if I get hired because of my gender?", 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/middle-school%2Fmiddle-school-1.jpg?alt=media&token=506736c5-758a-4871-8e44-4f6542fdf6a8']
    };

    const title = postID && postInfo[postID][0]
    const link = postID && postInfo[postID][1]

    return (
        <div className="mx-0 custom_nm:mx-10 custom_md:mx-20 custom_lg:mx-40 custom_xl:mx-60 my-10 flex flex-col text-primary items-center text-lg space-y-8">
            <div className="px-10 custom_lg:px-40 custom_xl:px-60 space-y-5">
                <div className=" w-full flex self-center">
                    <div className="w-max relative">
                        <p className="font-semibold">TOPIC NAME</p>
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary w-full"></span>
                    </div>
                </div>
                <p className="w-full  flex self-center text-4xl custom_md:text-5xl font-semibold">{title}</p>
                <div className="w-full  flex flex-row space-x-3 italic">
                    <p className="">July 16, 2019</p><span>|</span>
                    <p className="">3 minutes read</p>
                </div>
                <img className="w-full" src={link}></img>
            </div>
            
            <p className="px-10 custom_xl:px-40 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            
            <div className="w-full">
                <div className="w-full px-10 custom_lg:px-20 custom_xl:px-40 flex self-center mb-2">
                    <div className="w-max relative">
                        <p className="font-semibold">READ MORE POSTS ABOUT <span>TOPIC NAME</span></p>
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary w-full"></span>
                    </div>
                </div>
                    
                <div className="px-5 custom_nm:w-full grid custom_nm:grid-cols-2 custom_lg:grid-cols-3 gap-0">
                        {otherPosts.map(post => (
                        <Link to={`/post/${post.id}`} className="group p-5 hover:bg-primarylight/70" key={post.id}>
                            <img src={post.image_link}/>
                            <div className="group relative w-fit mt-4 mb-2 text-xl font-semibold group-hover:text-primarydark">
                                <span>{post.title}</span>
                                <span className="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-primarydark group-hover:w-full"></span>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </Link>
                        ))}
                </div>
            </div>
            
        </div>
    );
};
