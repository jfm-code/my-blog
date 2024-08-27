import './styles/fonts.css';
import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { AboutMeObject } from './interfaces';
import { useLanguage } from './LanguageContext';

export const AboutMe = () => {

    const [aboutMeInfo, setAboutMeInfo] = useState<AboutMeObject | null>(null);
    const { currentLanguage } = useLanguage();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const queryInfo = await getDocs(collection(db, "aboutme"));
                let aboutmeData: AboutMeObject | null = null;
                if (!queryInfo.empty) {
                    aboutmeData = queryInfo.docs[0].data() as AboutMeObject;
                }
                setAboutMeInfo(aboutmeData);
            } catch (error) {
                console.error("Error fetching data in about me component: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center text-justify common-style">
            <p className="heading-1">a place to know</p>
            <img className="size-64 custom_sm:size-80 rounded-full" src={aboutMeInfo?.profilepic_link}></img>
            <div className="py-10">
                {aboutMeInfo?.overview_myself.map(paragraph => (
                    <p className="py-1">{currentLanguage === "EN" ? paragraph.EN : paragraph.VN}</p>
                ))}
            </div>
            <p className="self-start heading-2">How this blog was born</p>
            <div className="w-full flex flex-col-reverse custom_lg:flex-row space-x-0 custom_lg:space-x-10 custom_xl:space-x-14 items-center mt-3 mb-8">
                <div className="custom_lg:w-3/4 flex flex-col mt-5 custom_lg:mt-0">
                    {aboutMeInfo?.overview_blog.map(paragraph => (
                        <p className="py-1">{currentLanguage === "EN" ? paragraph.EN : paragraph.VN}</p>
                    ))}
                </div>
                <div className="custom_lg:w-1/4 mt-10 custom_lg:mt-0">
                    <img className="size-64 custom_sm:size-80 custom_lg:size-auto rounded-full" src={aboutMeInfo?.blogpic_link}></img>
                </div>
            </div>
            <p className="self-start heading-2">My life in a nutshell</p>
            <div className="w-full py-8 space-y-8 relative before:mt-3 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-primary before:translate-x-[-9px] custom_md:before:mx-auto custom_md:before:translate-x-0">
                {aboutMeInfo?.timeline.map(element => (
                    <div className="relative flex items-center justify-between custom_md:justify-normal custom_md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-6 h-6 custom_md:w-8 custom_md:h-8 rounded-full border border-white bg-primary group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 custom_md:order-1 custom_md:group-odd:-translate-x-3/4 custom_md:group-even:translate-x-3/4">
                        </div>
                        <div className="w-[calc(100%-4rem)] custom_md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div className="flex justify-center font-bold italic text-xl">{element.year}</div>
                            <div className="flex font-bold text-left my-2 text-primarydark text-xl capitalize tracking-wide">{currentLanguage === "EN" ? element.summary.EN : element.summary.VN}</div>
                            {element.details.map(line => (
                                <div className="text-left">
                                    {currentLanguage === "EN" ? line.EN : line.VN}
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
