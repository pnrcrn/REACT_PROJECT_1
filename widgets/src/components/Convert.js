import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, inputText }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(inputText);


    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(inputText);
        }, 500);
        return () => {
            clearTimeout(timerId);
        };

    }, [inputText]);



    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    // q: inputText,
                    q: debouncedText,//artık girilen son girdi ile arama yapıyoruz
                    //böylece sürekli google requestte bulunmuyoruz
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

                }
            });
            //json'dan alıyoruz
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
    },
        [language, debouncedText]);
    // [language, inputText]);

    return (<div>
        <h1 className='ui header'>{translated}</h1>
    </div>);

};
export default Convert;