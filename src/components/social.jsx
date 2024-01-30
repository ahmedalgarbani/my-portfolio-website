
import "./home.css"
import {UilInstagram,UilDribbble,UilGithubAlt} from '@iconscout/react-unicons'

// import Link from 'next/link';


export default function Social(){
    return(
        <>
<div className="home__social bg-green-800 relative">
    <div className="sochial absolute right-[10%] grid grid-cols-1 gap-[30px]">
    <a href="#" className="home__social-icon " >
<UilInstagram/>

</a>



    <a href="#" className="home__social-icon" target="_blank">
    
<UilDribbble/>
    </a>


    <a href="#" className="home__social-icon" target="_blank">

<UilGithubAlt/>
    </a>

    </div>
   
</div>
        </>
    );
}