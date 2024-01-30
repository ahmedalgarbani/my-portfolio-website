
import "./info.css"
import {useEffect} from 'react'
import {useTranslation} from 'react-i18next';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles



// useEffect(()=>{
// AOS.init({duration:1000});
// },[])
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles




export default function Info(){
  useEffect(()=>{
  AOS.init({duration:1000});
  },[])

  const [t,i18n]=useTranslation()
  
  useEffect(()=>{
      let localS = localStorage.getItem("i18nextLng")
    if(localS=="ar"){
      
  //i18n.changeLanguage("en")
  
    }else{
      
  //i18n.changeLanguage("ar")
  
    }
  },[])  

    return(
        <>
<div className="info__title sm:pt-[100px]">
                <h1 data-aos="fade-left" >{t("ABOUT ME")}</h1>
            </div>
<div class=" grid gap-4 mx-auto grid-cols-1 md:grid-cols-2">
  <div className=" ">
            <div className="info__me p-5 " data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <div className="info__subtitle">
                {t("FULL STACK DEV")}
                </div>
                <div className="info__descip ">
                    <h4 className="w-[50%] md:w-[100%]">{t('Web Developer Web Developer I have a great passion to learn everything related to web application development. I can help you build the website you want.')}</h4>
                    <h1  class="more">{t("more information")}</h1>
<pre id="pre">
{t("Name : Ahmed")} <br/>
 {t("From : Yemen")}  <br/>
 {t("Age  : 20")} <br />
{t("city : sanaa")} <br />
 {t("Specialization: IT level(3)")} <br />
</pre> 
<a href="#cv" className="button button--flex text-teal">
                    {t("download cv")}
                    <svg className="button__icon  text-teal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.859888.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.5110.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="#fff"
                  ></path>
                </svg>
                </a>
                </div>
            </div>
  </div>
  <div className=" w-full   "  >
    <div className="info__img w-[10px] sm:w-full h-full max-w-full" 
    data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     >
    </div>
  </div>

</div>
        </>
    );
}