import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
// import Info from "./Component/info";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
//import { i18n } from 'i18next';



function App() {
  const [local,setLocal]=useState("ar");
  const {t,i18n}=useTranslation();


 function handellanguage(){

  setLocal("ar")
  i18n.changeLanguage('ar')
  
 }

  return (
    <>
       <Header />
     
       <Home /> 
    




   {/* #213fb9 */}
    </>
  );
}

export default App;
