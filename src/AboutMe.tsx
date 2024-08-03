import './styles/fonts.css';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { AboutMeObject } from './interfaces';

export const AboutMe = () => {

    const [aboutMeInfo, setAboutMeInfo] = useState<AboutMeObject | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const queryInfo = await getDocs(collection(db, "aboutme"));
            let aboutmeData: AboutMeObject | null = null;
            if (!queryInfo.empty) {
                aboutmeData = queryInfo.docs[0].data() as AboutMeObject;
            }
            setAboutMeInfo(aboutmeData);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center text-justify common-style">
            <p className="w-full flex justify-center text-5xl custom_sm:text-6xl custom_nm:text-7xl custom_md:text-8xl font-fontAutography pb-10 custom_sm:py-10">a place to know</p>
            <img className="size-64 custom_sm:size-80 rounded-full" src={aboutMeInfo?.profilepic_link}></img>
            <p className="py-10">{aboutMeInfo?.overview_myself}</p>
            <p className="self-start heading-2">How this blog was born</p>
            <div className="w-full flex flex-col-reverse custom_lg:flex-row space-x-0 custom_lg:space-x-10 custom_xl:space-x-14 items-center">
                <p className="pt-4 pb-10 custom_lg:w-3/4 px-0">{aboutMeInfo?.overview_blog}</p>
                <div className="custom_lg:w-1/4 mt-10 custom_lg:mt-0">
                    <img className="size-64 custom_sm:size-80 custom_lg:size-auto rounded-full" src={aboutMeInfo?.blogpic_link}></img>
                </div>
            </div>
            <p className="self-start heading-2">My life in a nutshell</p>
            <div className="w-full py-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-primary before:translate-x-[-5px] md:before:mx-auto md:before:translate-x-0">
                {aboutMeInfo?.timeline.map(element => (
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-white bg-primary group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div className="flex justify-center mb-2 font-bold italic text-xl">{element.year}</div>
                            <div className="flex font-bold text-left text-primarydark text-xl capitalize">{element.summary}</div>
                            {element.details.map(line => (
                                <div className="text-left">
                                    {line}
                                    <br ></br>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
