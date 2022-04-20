import React,{useState,useEffect} from "react";

const Route=({path,children})=>{
    const [currentPath, setCurrentPath]=useState(window.location.pathname)

useEffect(()=>{
    const onLocationChange=()=>{
        setCurrentPath(window.location.pathname);
    };
      window.addEventListener('popstate', onLocationChange);
         return()=>{
    window.removeEventListener('popstate',onLocationChange);//(206 şema)
        };
    
},[]);


return currentPath===path
          ?children
          :null;
    };
export default Route;

// Burada bulunan sayfanın yolunu alarak o path'e karşılık gelen 
//function dosyalarını döndürüyoruz.
//her bir dosya path'ine karşılık gelen sınıfı kendine
//CHİLDREN olarak bağlıyoruz.








////UseEffect kullanamdan önce 
// const Route=({path,children})=>{

//     return window.location.pathname===path
//     ?children
//     :null;
//     };
//     export default Route;
    
//     // Burada bulunan sayfanın yolunu alarak o path'e karşılık gelen 
//     //function dosyalarını döndürüyoruz.
//     //her bir dosya path'ine karşılık gelen sınıfı kendine
//     //CHİLDREN olarak bağlıyoruz.