 import Link from "./Link";
 
 const Header=()=>{
     return(
         <div className="ui secondary pointing menu">
             <Link href="/" className="item">
                 Accordion
             </Link>
             <Link href="/list" className="item">
                 Search
             </Link>
             <Link href="/dropdown" className="item">
                 Dropdown
             </Link>
             <Link href="/translate" className="item">
                 Translate
             </Link>
            
         </div>
     );
 };
 export default Header;






// //   Burada yan menü oluşturup hepsine ait yapıları verdik
// //   Fakat Link vermek optimal bir çzöüm olacak. Çünkü hepsi yan yana olunca 
// //   request isteklerimiz tekrar tekrar çalışıyor
// //   Bu durum için Link dosyası oluşturduk.
//  const Header=()=>{
//     return(
//         <div className="ui secondary pointing menu">
//             <a href="/" className="item">
//                 Accordion
//             </a>
//             <a href="/list" className="item">
//                 Search
//             </a>
//             <a href="/dropdown" className="item">
//                 Dropdown
//             </a>
//             <a href="/translate" className="item">
//                 Translate
//             </a>
           
//         </div>
//     );
// };
// export default Header;