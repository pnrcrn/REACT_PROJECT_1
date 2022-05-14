import React, { useEffect, useState } from 'react';
import database from '../firebase/FirebasePushData';

 function Details() {
     const [news,setNews]=useState([]);

     useEffect(()=>{
         database(setNews);
     })

    return (

        <div>
            {news.map(({ id, data: { date,updateDate,updateUser,createdUser } }) =>
            (
                <div className='form' key={id}>
              
                        <div className='distance'></div>
                        <div
                            className="header" >{date}</div>
                        <br></br>
                        {updateDate}
                        <br></br>
                   
                    <br></br>
                </div>

            ))}

        </div>

    );
  
}

export default Details;