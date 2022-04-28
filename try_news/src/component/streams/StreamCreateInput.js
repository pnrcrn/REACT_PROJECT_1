import React from "react";
import './streamCreate.css';


 function StreamCreateInput({label, placeholder,onChange,value}) {
  return (
    <div className="field">
        <label>{label}</label>
        <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        
        ></input>
    </div>
  )
}

export default StreamCreateInput;
