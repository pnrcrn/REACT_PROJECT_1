import React,{useEffect,useState} from 'react';
import './RestCountries.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountryList() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
            .then(response => setCountries(response.data))
            .catch(error => console.log({ error }));
    }, []);

    return (
        <div className='countrylist'>
            {countries.map(country => {
                return (
                    <div key={country.name}>
                        <Link to={`/country/${country.alpha3Code}`}>
                                            <h3>{country.name}</h3>
                                        </Link>
                    </div>
                )})}
        </div>
    );
};

export default CountryList;