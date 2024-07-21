import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";
import { NavigationObject } from './interfaces';

export const Footer = () => {

    const [footerContent, setfooterContent] = useState<NavigationObject[]>([]);

    useEffect(() => {
        const fetchFooterData = async () => {
            const querySnapshot = await getDocs(collection(db, "navigation"));
            const footerData: NavigationObject[] = [];
            querySnapshot.forEach((doc) => {
                footerData.push(doc.data() as NavigationObject);
            })
            setfooterContent(footerData);
        }
        fetchFooterData();
    }, []);

    const content = [
        {
            header:'SECTIONS',
            content_list: [
                { name:'About me', path:'/about'},
                { name:'Posts', path:'/post'},
                { name:'Album', path:'/album'},
                { name:'Videos', path:'/video'},
                { name:'Coding', path:'/coding'}
            ]
        },
        {
            header:'TOPICS',
            content_list: [
                { name:'Education', path:'/'},
                { name:'Work', path:'/'},
                { name:'Friendship', path:'/'},
                { name:'Family', path:'/'},
                { name:'Mental Health', path:'/'}
            ]
        },
        {
            header:'ALBUM',
            content_list: [
                { name:'Nha Trang 2024', path:'/'},
                { name:'Being Daisy', path:'/album/being-daisy'},
                { name:'LHP Graduation', path:'/album/lhp-graduation'},
                { name:'Phan Thiet 2022', path:'/'},
                { name:'Da Lat 2021', path:'/album/dalat-2021'}
            ]
        }
    ]

    return (
        <div className="flex flex-row justify-around bg-primary text-lg custom_sm:text-xl text-primary px-5 custom_md:px-20 custom_xl:px-40">
            {footerContent.map(section => (
                <div className="flex flex-col my-8 custom_lg:my-14 space-y-3 hidden custom_nm:block">
                    <p className="text-white font-bold mb-2 uppercase">{section.name}</p>
                    {section.list.map(line => (
                        <p className="group relative w-max">
                            <Link to={line.path} className="text-white">{line.name}</Link>
                            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </p>
                    ))}
                </div>
            ))}
            <form className="pl-3 custom_sm:pl-0 my-8 custom_lg:my-14 space-y-8">
                <p className="text-white font-bold">SUBSCRIBE FOR EMAILS FROM JFM BLOG</p>
                <div className="space-y-1">
                    <p className="text-white">Full name</p>
                    <input className="px-3 py-1 text-white w-72 custom_sm:w-80 bg-primary border border-white border-0 border-b outline-none focus:text-primary focus:bg-white focus:shadow-lg"></input>
                </div>
                <div className="space-y-1">
                    <p className="text-white">Email</p>
                    <input className="px-3 py-1 text-white w-72 custom_sm:w-80 bg-primary border border-white border-0 border-b outline-none focus:text-primary focus:bg-white focus:shadow-lg"></input>
                </div>
                <input className="mt-10 p-2 w-24 text-lg text-white border border-white bg-primary hover:bg-white hover:text-primary" type="submit" value="Sign Up"></input>
            </form>
        </div>
    )
};
