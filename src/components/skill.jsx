
// import Image from 'next/image'
import "./skill.css";

import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles




export default function Skill(){
   useEffect(()=>{
   AOS.init({duration:300});
   },[])


    const [t,i18n]=useTranslation()
  
    useEffect(()=>{
        let localS = localStorage.getItem("i18nextLng")
      if(localS=="ar"){
        
    //i18n.changeLanguage("en")
    
      }else{
        
   // i18n.changeLanguage("ar")
    
      }
    },[])  

 return(<>

 <div className="skill__main sm:pt-[100px]" id="skills">
     <div className="skill__title" data-aos="zoom-in-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h2>
          {t("MY SKILL")}
         </h2>
     </div>
      <div className="skill__language">

         <div className="language_item1 container flex justify-center">
            <section class="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 Skills_icons">
             
 <div className="Skills_card__2OoQ1 fil">
                  <span>HTML</span>
                  <div className="Html "></div>
                 </div>
 <div className="Skills_card__2OoQ1 fil">
                  <span>CSS</span>
                  <div className="Css "></div>
                 </div>
 <div className="Skills_card__2OoQ1 fil">
                  <span>JavaScript</span>
                  <div className="JavaScript "></div>
                 </div>
 <div className="Skills_card__2OoQ1 fil">
                  <span>React Js</span>
                  <div className="React "></div>
                 </div>
 <div className="Skills_card__2OoQ1 fil">
                  <span>Next</span>
                  <div className="nextt "></div>
                 </div>
 <div className="Skills_card__2OoQ1 fil">
                  <span>Laravel</span>
                  <div className="Laravel "></div>
                 </div>
 <div className="Skills_card__2OoQ1 fil">
                  <span>Git</span>
                  <div className="Git "></div>
                 </div>


                
                 
                 
                 
            </section>
         </div> 
     </div> 
 </div>

 
 

 
</>)
}