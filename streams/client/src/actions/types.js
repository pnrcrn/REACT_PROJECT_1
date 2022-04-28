//Burada yaptığımız şey normalde string olarak tanımladığımız actionları
//hata aldığımızda ,yazım yanlışı yaptığımızda kolayca yakalamak için
//onları kendi adlarında sabit değişkenlere atmak

export const SIGN_IN='SIGN_IN';
export const SIGN_OUT='SIGN_OUT';
export const CREATE_STREAM='CREATE_STREAM';
export const FETCH_STREAMS='FETCH_STREAMS';//kayıtların tümünü alan stream
export const FETCH_STREAM='FETCH_STREAM';//tekil olan dışa aktarma
export const DELETE_STREAM='DELETE_STREAM';
export const EDİT_STREAM='EDİT_STREAM';


//ÖNCEDEN YAPTIĞIMIZ(authReducer)

// const INTIAL_STATE={
//     isSignedIn: null
// };

// export default(state=INTIAL_STATE, action)=>{
//     switch(action.type){
//         case 'SIGN_IN':
//             return {...state,isSignedIn:true};
//         case 'SIGN_OUT':
//             return {... state,isSignedIn: false};
//         default:
//             return state;
//     }
// };