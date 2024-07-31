import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { NavigationObject } from './interfaces';
import { useLanguage } from './LanguageContext';

export const Footer = () => {

    const [footerContent, setfooterContent] = useState<NavigationObject[]>([]);
    const { currentLanguage } = useLanguage();

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

    return (
        <div className="w-full flex flex-row justify-around bg-primary text-lg custom_sm:text-xl text-primary px-5 custom_md:px-20 custom_xl:px-40">
            {footerContent.map(section => (
                <div className="my-8 grid-cols- custom_lg:my-14  hidden custom_lg:block">
                    <div className=" space-y-3">
                        <p className="text-white font-bold mb-2 uppercase">{section.name}</p>
                        {section.list.map(line => (
                            <p className="group relative w-max">
                                <Link to={line.path} className="text-white">{currentLanguage === "EN" ? line.name.EN : line.name.VN}</Link>
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                            </p>
                        ))}
                    </div>
                </div>
            ))}
            <form className="pl-3 custom_sm:pl-0 my-8 custom_lg:my-14 space-y-8">
                <p className="text-white font-bold uppercase">
                    {currentLanguage === "EN" ? "SUBSCRIBE FOR EMAILS FROM JFM BLOG" : "Đăng ký để nhận email thông báo từ JFM Blog"}
                </p>
                <div className="space-y-1">
                    <p className="text-white">
                        {currentLanguage === "EN" ? "Full name" : "Họ và tên"}
                    </p>
                    <input className="px-3 py-1 text-white w-72 custom_sm:w-80 bg-primary border border-white border-0 border-b outline-none focus:text-primary focus:bg-white focus:shadow-lg"></input>
                </div>
                <div className="space-y-1">
                    <p className="text-white">Email</p>
                    <input className="px-3 py-1 text-white w-72 custom_sm:w-80 bg-primary border border-white border-0 border-b outline-none focus:text-primary focus:bg-white focus:shadow-lg"></input>
                </div>
                <input className="mt-10 p-2 w-24 text-lg text-white border border-white bg-primary hover:bg-white hover:text-primary" type="submit" value={currentLanguage === "EN" ? "Sign Up" : "Đăng ký"}></input>
            </form>
        </div>
    )
};
