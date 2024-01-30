
import { useState,useEffect } from "react";
import "./header.css"
import { useTranslation } from 'react-i18next';
// import Link from 'next/link';
//iconscout

import {UilEstate,UilTimes,UilApps ,UilCloudInfo,UilFileAlt,UilMessage, } from '@iconscout/react-unicons'




export default function Header() {
  const [Toggle,setToggle]=useState(false) 
  
  const [local,setLocal]=useState("ar") 
    
  const {t,i18n}=useTranslation()
  
  // useEffect(()=>{
  //   let localS = localStorage.setItem("i18nextLng",local)
  //   setLocal(localS)
  //     },[])


     useEffect(()=>{
   let localS = localStorage.getItem("i18nextLng")
   setLocal(localS)
     },[local])
  
    function changeLanguageHandelButton(){
      
  console.log(local)
      if(local =="ar"){
        
        setLocal("en")
        i18n.changeLanguage('en');
  console.log(local)
      }else{
        
        setLocal("ar")
        i18n.changeLanguage('ar');
        
  console.log(local)
      }
        }
  



  return (<>
    
     <header className="header  px-[20px] fixed bottom-0  w-[100%]  top-0 left-0 z-[999999] bg-[#F9F9F9] opacity-0.8  h-[83px] rounded-[0px_0_10px_10px] shadow-[0_4px_10px_0px_rgba(92,0,0,0.2)]">
      <nav className="
     nav
     pb-[-30px]
      flex
      justify-between
      items-center
      gap-[1rem]
      co  ">
        <a href="/" className="
         
        nav__logo

       pb-[15px]
        ">
      {t('Ahmed')}<b className="text-[4rem] contents text-[#008080]">.</b>
        </a>
        <div className={Toggle?"nav__menu show-menu":"nav__menu"}>
          <ul className="
         nav__list grid
          ">
            <li className="nav__item"><div className="lang_div" onClick={changeLanguageHandelButton}>
    
    <div className="lang" >{local=="en"? "AR":"EN"}</div>
    
   </div>
            </li>
            <li className="nav__item">
              <a href="#home" style={{transition:"0.3s"}} className="flex
    flex-col
    items-center
    text-[0.875rem]
    text-[#33333]
    font-medium
    
    ">
     
       <UilEstate className="active-link nav__icon airplay"/>
      {t('Home')}
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className=" nav__link">
          <UilCloudInfo className="nav__icon airplay"/>
          {t('about me')}
              </a>
            </li>
            <li className="nav__item">
                          <a href="#skills" className="nav__link">
            <UilFileAlt className="uil  nav__icon airplay"/> {t('Skills')}
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
            <UilMessage className="uil uil-message  nav__icon airplay"/>
            {t("contact")}
              </a>
            </li>
          </ul>
          <div>
          <UilTimes class="  uil uil-times nav__close" onClick={()=>{
            setToggle(!Toggle);
            console.log("close " +Toggle)
          }} />
          </div>
        </div>

        <div className="nav__toggle  pt-[20px] sm:pt-0">
        <UilApps class="uil uil-apps" onClick={()=>{
        
            setToggle(!Toggle);
            console.log("app " +Toggle)
          }} />
        </div>
      </nav>
  
    </header>
  
   
     </>
  );
}

