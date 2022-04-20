
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM;
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const langs = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'

    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label:'Turkish',
        value:'tr'
    }
];



const Translate = () => {
    const [language, setLanguage] = useState(langs[0]);
    const [inputText, setInputText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={ inputText } 
                    onChange={(e) => setInputText(e.target.value)}>
                    </input>
                </div>
            </div>
            <Dropdown
                label='SEÇ'
                selected={language}
                onSelectedChange={setLanguage}
                options={langs}>
            </Dropdown>
            <hr/>
            <h3 className='ui header'>Output</h3>
            <Convert inputText={inputText} language={language}/>
        </div>

    );
};
export default Translate;