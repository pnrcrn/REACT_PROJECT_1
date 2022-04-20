import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { createStream } from '../../actions';




//Formumuz için iki tane girdi alanı var
//biri title,diğeri description bunları da Field özelliği ile verdik

class StreamCreate extends React.Component {

renderError({error, touched}){
  if(touched && error){
    return(
      <div className='ui error message'>
        <div className='header'>{error}</div>
      </div>
    );
  }
};



  //burada inputa autocomplate özelliği vererek error mesajlarını
  //kullanıcı etkileşimine göre vermeyi ayarladık
  //arrow func olmasaydı da renderError'u undefined olarak görüp hata veriyordu
  renderInput=({ input, label,meta })=> {
    const className=`field ${meta.error&&meta.touched? 'error':''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>);//aslında bu probun giriş özelliğini alıyor ...input ile
  };

  onSubmit=(formValues)=> {
    this.props.createStream(formValues);
  }

  render() {
    return (

      <form
        className='ui form error'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field name='description' component={this.renderInput} label='Enter Description' />
        <button className='ui primary button'>Submit</button>
      </form>

    )
  }
};
//FORM VALİDATİON İŞLEMİ
const validate = formValues => {
  const errormessage = {};
  if (!formValues.title) {
    errormessage.title = 'Geçerli bir başlık girilmeli.'
  }
  if (!formValues.description) {
    errormessage.description = 'Geçerli bir açıklama girilmeli.'
  }
  return errormessage;
};

//AYnı anda hem connect hemde reduxFormle saramayacağımzdan
//sarılırda hoş olmaz :)
const formWrapped=reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
export default connect(null,{createStream})(formWrapped);




///RenderInput'u ilk önce bu şekilde yaptık
// renderInput(formProps){
//   return(
//     <input
//     onChange={formProps.input.onChange}
//     value={formProps.input.value}
//     ></input>
//   )
// }