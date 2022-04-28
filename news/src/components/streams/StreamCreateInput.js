import React from 'react';
import './streamCreate.css';

function StreamCreateInput({ label, placeholder, onChange, value }) {
    return (
        <div className='field'>
            <label>{label}</label>
            <input
                value={value}
                onChange={onChange}
                type='text'
                placeholder={placeholder}>
            </input>
            {/* {meta.touched && meta.error && <div>{meta.error}</div>} */}
        </div>
    )
}

export default StreamCreateInput
