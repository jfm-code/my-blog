import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { db } from './FirebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";
import { NavigationObject } from './interfaces';
import { useLanguage } from './LanguageContext';

export const NavBar = () => {

  const [isOpenMenuDropdown, setIsOpenMenuDropdown] = useState(false);
  const menuDropdownRef = useRef<HTMLDivElement>(null);
  const [isOpenLanguageDropdown, setIsOpenLanguageDropdown] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const [navbarContent, setnavbarContent] = useState<NavigationObject | null>(null);
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  const changeLanguageToEN = () => {
    setCurrentLanguage("EN");
  };

  const changeLanguageToVN = () => {
    setCurrentLanguage("VN");
  }

  const handleOpenMenuDropdown = () => {
    setIsOpenMenuDropdown(!isOpenMenuDropdown);
  };

  const handleOpenLanguageDropdown = () => {
    setIsOpenLanguageDropdown(!isOpenLanguageDropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target as Node)) {
      setIsOpenMenuDropdown(false);
    }
    if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
      setIsOpenLanguageDropdown(false);
    }
  };

  useEffect(() => {
    const navbarResponsive = async () => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    };

    const fetchNavbar = async () => {
      const q = query(collection(db, "navigation"), where("name", "==", "sections"));
      const querySnapshot = await getDocs(q);
      let navbarInfo: NavigationObject | null = null;

      if (!querySnapshot.empty) {
        navbarInfo = querySnapshot.docs[0].data() as NavigationObject;
      }
      setnavbarContent(navbarInfo);
    }

    navbarResponsive();
    fetchNavbar();
  }, []);

  return (
    <nav className="w-full custom_xl:px-20 custom_md:px-10 px-5 py-10 text-primary relative">
      <div className="w-full flex items-start custom_md:justify-between">
        <div className="hidden mt-2 custom_md:flex custom_md:flex-row custom_md:space-x-5 custom_xl:space-x-10">
          {navbarContent && navbarContent.list.map(element => (
            <p className="group relative w-max">
              <Link to={element.path} className="uppercase text-xl font-bold hover:text-primarydark">{element.name}</Link>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
            </p>
          ))}
        </div>
        <div className="w-full custom_md:w-fit flex flex-col">
          <div className="flex flex-row items-center w-full custom_md:w-fit justify-between">
            <div className="hidden custom_lg:pl-10 custom_lg:flex custom_lg:flex-row custom_lg:items-center custom_lg:space-x-2 custom_xl:space-x-5">
              <a href="mailto:my.giangvu@gmail.com"><i className="text-xl p-2 hover:bg-primarylight hover:text-primarydark rounded-lg fa-solid fa-envelope"></i></a>
              <a href="https://www.facebook.com/giangmy.04/"><i className="text-xl p-2 hover:bg-primarylight hover:text-primarydark rounded-lg fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/jfm_blog/"><i className="text-2xl p-2 hover:bg-primarylight hover:text-primarydark rounded-lg fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/jessica-vu-uml/"><i className="text-2xl p-2 hover:bg-primarylight hover:text-primarydark rounded-lg fa-brands fa-linkedin-in"></i></a>
              <a href="https://github.com/jfm-code"><i className="text-2xl p-2 hover:bg-primarylight hover:text-primarydark rounded-lg fa-brands fa-github"></i></a>
            </div>
            <button onClick={handleOpenMenuDropdown} id="button-hamburger" type="button" className="custom_md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-primary rounded-lg hover:bg-primarylight hover:text-primarydark focus:outline-none" aria-controls="navbar-hamburger" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <button onClick={handleOpenLanguageDropdown} id="button-language" data-dropdown-toggle="dropdown" className="text-lg ml-4 text-primary hover:text-primarydark font-bold hover:bg-primarylight/70 focus:outline-none focus:ring-blue-300 rounded-lg p-2 text-center inline-flex items-center" type="button">{currentLanguage} 
              <svg className="w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <form className="border w-72 ml-5 hidden custom_lg:block">   
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                        <svg className="w-4 h-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="search" className="block w-full p-2 ps-10 text-lg text-primarydark border border-primary border-0 border-b-2 bg-gray-50 focus:shadow-md focus:outline-none" placeholder="Search" required />
                </div>
            </form>
          </div>

          {isOpenMenuDropdown && (
            <div ref={menuDropdownRef} id="navbar-hamburger" className="custom_md:hidden w-full px-2">
              <div onClick={handleOpenMenuDropdown} className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50">
                {navbarContent && navbarContent.list.map(element => (
                  <Link to={element.path} className="block py-2 px-3 text-primary hover:text-white hover:bg-primary">{element.name}</Link>
                ))}
              </div>
            </div>
          )}

          {isOpenLanguageDropdown && (
            <div ref={languageDropdownRef} id="navbar-language" className="w-fit px-2 self-end custom_md:self-start custom_lg:self-center">
              <div onClick={handleOpenLanguageDropdown} className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 ">
                  <p onClick={changeLanguageToEN} className="justify-end custom_md:justify-center w-full flex py-2 px-3 text-primary hover:text-white hover:bg-primary">English - EN</p>
                  <p onClick={changeLanguageToVN} className="justify-end custom_md:justify-center w-full flex py-2 px-3 text-primary hover:text-white hover:bg-primary">Tiếng Việt - VN</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
