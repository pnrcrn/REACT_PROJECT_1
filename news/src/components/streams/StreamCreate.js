import React, { useState } from 'react';
import StreamCreateInput from './StreamCreateInput';
import db,{auth} from '../firebase/FirebaseConfig';
import DateSelect from '../../datepicker/DateSelect';
import {Link } from 'react-router-dom';
import {DateTime} from './DateTime'


const images = require('../../image/cat.jpg');
const firebaseImages = require('../../image/news_3.png');

function StreamCreate({user}){

  
 
  const [title, setTitle]=useState('');
  const [content, setContent]=useState('');
  const [url, setUrl]=useState('');
  const[image,setImage]=useState('');
  const createdUserData=user.displayName;


  const addDatabase=(e)=>{
    e.preventDefault();
        db.collection('news').add({
          newsTitle: title,
          newsContent:content,
          url:url,
          date:DateTime(),
          newsImage:firebaseImages,
          screencontent:'',
          createdUser: createdUserData,
          updateUser:'',
          updateDate:''
        })
       };
     
 return (
    
      <div className='field'>
        <div className='ui form'>
      <form >
        <br></br>
        <div className='field'>
          <button 
            className='tiny ui right floated  teal button'
            onClick={()=>auth.signOut()}
            > Çıkış Yap</button>

            <h1>Hoşgeldiniz {user.displayName}</h1>
    
          </div>

      <div className='field'>
           <label>Haber Görseli</label>
             <img  value={image} 
             onChange={(e)=>setImage(e.target.value)}
             src={images }
              // src={setImage}
              />
                <button className="tiny ui right floated orange button">Ekle</button>
                   </div>
            <br></br>
            <StreamCreateInput
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            label='Haber Başlığı'
            placeholder='Haber Başlığı'>
            </StreamCreateInput>
              
            <StreamCreateInput
            label='Haber İçeriği'
            placeholder='Haber İçeriği'
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            >
            </StreamCreateInput>

            <StreamCreateInput
            label='Haber Linki '
            placeholder='mysite.com'
            value={url}
            onChange={(e)=>setUrl(e.target.value)}>
            
            </StreamCreateInput>
          
            <br></br>
            <div>
            
          <button className="ui inverted orange button"
             onClick={addDatabase}>
             Kaydet</button>
             <Link 
            
             to='/StreamDelete'>
              <button
              className='ui right inverted orange button'>
              Koleksiyona Git
        </button>
        </Link>
          <div>
       
           </div>
        </div>
            
      </form>
    </div>
  </div>
 
 )
}
export default StreamCreate;













// import React from 'react';
// import {Form, Field} from 'react-final-form';
// import './streamCreate.css';
// import DateSelect from '../../datepicker/DateSelect';
// import {  validate } from './errors';
// import db, { auth } from '../firebase/FirebaseConfig';

// const images = require('../../image/cat.jpeg');

// class StreamCreate extends React.Component{

// renderInput({input,meta,placeholder}){


//   return ( <div>
//   <input type="text" 
//     placeholder={placeholder}
//     {...input}/>
//     {meta.touched && meta.error && <div>{meta.error}</div>}
//   </div>);
// };
// render(user){
//   const onSubmit=()=>{
//     console.log();
//     // db.collection('news').add({
//     //   newsTitle: 'newsTitle',
//     //   newsContent:'newsContent',
//     //   url:'url',
//     //   date:'date',
//     //   newsImage:''
//     // })
//    };
//  return (
   
//    <div className='container'>
//      <div className='ui form'>

//        <div className='field'>
//        <button  onClick={()=>auth.signOut()}   className='tiny ui right floated  teal button'> Çıkış Yap</button>
//        <h1>Hoşgeldiniz {this.props.user.displayName}</h1>
//        </div>
   
//         <Form
//             onSubmit={onSubmit}
//             validate={validate}
//             render={({ handleSubmit }) => (
//     <form onSubmit={handleSubmit}>
//        <div className='field'>
//           <label> Görsel Ekle</label>
//           <button className='ui right floated grey button'>Ekle</button>
//              <img className='ui large image' src={images}/>
         
//      </div>

//         <div className='field '>
//          <label>Haber Başlığı </label>
//             <Field 
//               name="newsTitle" 
//               placeholder="Haber başlığı"
//               component={this.renderInput}
//              />
//      </div>

//         <div className='field '>
//          <label>Haber İçeriği</label>
//             <Field 
//               name='newsContent'
//               placeholder="Haber İçeriği"
//               component={this.renderInput }
//       />
//       </div> 
//         <div className="field">
//             <label>Haber Linki</label>
//              <Field 
//               name='url'
//               placeholder="mysite.com"
//               component={this.renderInput
//           }
//       />
//       </div>
//       <div className='field'>
//       <label>Haber Yayın Tarihi</label>
//       <Field name='date'
//            render ={({meta})=>(
//              <div>
//        <DateSelect></DateSelect>
//         {meta.touched && meta.error && <div>{meta.error}</div>}
      
//       </div>
//          )}
//          />
//          </div>
//          <div>
//           <button className=' ui floated  teal button' type="submit">Kaydet</button>
//        </div> 
//           <br></br> 
//     </form>
//   )
// }
//   />
//   </div>
//   </div>
//   )
// }
// }

// export default StreamCreate;