//daha sonra değişmesini istemediğimiz, değişmediğinden emin olduğumuz
//değişkenleri büyük harflerle yazarız.
//Burada da kullancının giriş yapıp yapmama durumunu redux ile kontrol 
//ediyoruz

import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INTIAL_STATE={
    isSignedIn: null,
    userId:null  //kullanıcı giriş yapmış mı yapmamış mı diye kimliğini alıyoruz
    //Eğer yapmış ise ieride edit, delete giibi bazı özellikler vereceğiz
};

export default(state=INTIAL_STATE, action)=>{
    switch(action.type){
        case SIGN_IN:
            return {...state,isSignedIn:true, userId: action.payload };
        case SIGN_OUT:
            return {... state,isSignedIn: false, userId: null};
        default:
            return state;
    }
};
