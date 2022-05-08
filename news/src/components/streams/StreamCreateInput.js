import React from 'react';




function StreamCreateInput({ label, placeholder, onChange, value ,validate}) {
    return (
        <div 
        className='field'>
            <label >{label}</label>
            <input
                className='input'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type='text'
                validate={validate}
               >
            </input>
            
            {/* {meta.touched && meta.error && <div>{meta.error}</div>} */}
        </div>
    )
}

export default StreamCreateInput
