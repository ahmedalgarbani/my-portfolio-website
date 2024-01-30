
import "./home.css"
import Social from "./social";
import Data from "./data";
import Info from "./info"
import Skill from "./skill"
import Footer from "./footer"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {useEffect} from "react";

export default function Home(){
useEffect(()=>{
AOS.init({duration:1000});
},[])


    return(
        <>
<section className=" home section  flex justify-center " id="home">
<div className="home__container container mx-auto  grid">
<div className="home__content grid grid-cols-2 md:grid-cols-3">
 <div className="bg-red-800">
 <Social/> 

 </div>
    <Data/> 

<div className="home__img" data-aos="fade-up"></div>

</div>
 <div className="wrapper ">
    
</div> 
<div className="pr-[30px]  sm:w-[870px] max-w-full mx-auto">
 <Info/>
 </div>
<div className="skill">
    <Skill/> 
</div>

</div>

</section>
<div className="relative bottom-0 w-full sm:pt-[100px] pb-[60px]">
<Footer/>
</div>
        </>
    );
}