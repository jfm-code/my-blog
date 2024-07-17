import './styles/fonts.css';
import { Checkbox } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


export const Post = () => {
    const posts = [
        { id: 'bus-experience', title: 'What I learned when sitting in the bus' },
        { id: 'home-isnt-home', title: "When home isn't a safe place anymore" },
        { id: 'feminine-energy', title: "What if I get hired because of my gender?" },
    ];

    const topics = [
        { name: 'Education'},
        { name: 'Work'},
        { name: 'Friendship'},
        { name: 'Family'},
        { name: 'Relationship'},
        { name: 'Dream'},
        { name: 'Psychology'},
        { name: 'Beauty'},
        { name: 'Personality'},
        { name: 'Justice'},
        { name: 'Mental Health'},
        { name: 'Book Review'},
        { name: 'Year-End Review'}
    ]

    const images: Record<string, string> = {
        'bus-experience': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-3.jpg?alt=media&token=3e861c8b-7396-4e59-8044-066e25748230',
        'home-isnt-home': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-1.jpg?alt=media&token=3c0f89db-9457-4d76-ba3b-e54b089e4ed8',
        'feminine-energy': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/middle-school%2Fmiddle-school-1.jpg?alt=media&token=506736c5-758a-4871-8e44-4f6542fdf6a8'
    };

    return (
        <div className="flex flex-col items-center px-5 custom_sm:px-10 custom_md:px-20 custom_xl:px-40 text-justify text-lg text-primary">
            <p className="w-full flex justify-center text-5xl custom_sm:text-6xl custom_nm:text-7xl custom_md:text-8xl font-fontAutography pb-10 custom_sm:py-10">a place to write</p>
            <div className="w-full w-full flex flex-col custom_md:flex-row custom_md:space-x-8 custom_lg:space-x-16">
                <img className="flex self-center w-full custom_nm:w-4/5 custom_md:self-start custom_md:w-2/5 custom_md:h-full" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-1.JPG?alt=media&token=06767790-e40c-4c87-9d38-06618e011104"></img>
                <div className="flex flex-col mt-5 w-full custom_nm:w-4/5 self-center custom_md:mt-0 ">
                    <p className="text-xl custom_sm:text-2xl font-medium">Post title and link goes here</p>
                    <p className="my-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <input className="mt-5 mb-10 p-2 w-28 text-lg text-white border border-white bg-primary hover:bg-white hover:text-primary hover:border-primary" type="submit" value="Read more"></input>
                </div>
            </div>
            <div className="w-full flex flex-col flex-auto mb-10 custom_lg:flex-row custom_lg:space-x-20 custom_lg:my-10">
                <div className="flex flex-col mb-5 custom_lg:mb-0">
                    <p className="flex self-center custom_lg:self-start ml-10 text-2xl font-semibold mb-2 ml-2">TOPICS</p>
                    <div className="w-full flex justify-between flex-wrap custom_lg:flex-col w-1/6">
                        {topics.map(topic => (
                            <div className="flex items-center ml-8 min-w-52">
                                <Checkbox className="w-6 h-6 rounded-none checked:bg-primary border border-primary border-2 checked:border-none" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
                                <label className="cursor-pointer text-lg">{topic.name}</label>
                            </div>
                        ))}
                </div>
                </div>
                <div className="flex self-center w-full custom_nm:w-11/12 custom_lg:w-5/6">
                    <div className="grid custom_nm:grid-cols-2 custom_lg:grid-cols-3 gap-10">
                        {posts.map(post => (
                        <div key={post.id}>
                            <img className="" src={images[post.id]}/>
                            <div className="mt-5 mb-1 text-xl font-semibold hover:underline">
                                <Link to={`/post/${post.id}`}>{post.title}</Link>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
