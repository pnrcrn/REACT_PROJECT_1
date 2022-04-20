import React from 'react';
import './displaySeason.css'


const SeasonConfig={
    summer:{
        text: 'Lets hit the beach!..',
        iconName: 'sun outline'
    },
    winter:{
        text:'Burr, it is very cold!',
        iconName:'snowflake'
    }
};



const getSeason = (lat, mounth) => {

    if (mounth > 2 && mounth < 9) {
        return lat < 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName}= SeasonConfig[season];

    return (
        
        <div className={`season-display ${season}`}>
             <i className={`icon-left massive ${iconName} icon`}></i>
            <h1 >{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;



//6 ay yaz Nisan, mayıs,haziran, temmuz, ağustos eylül
//6 ay kış ocak Şubat Mart ekim kasım aralık


















// import React from 'react';


// const getSeason = (lat, mounth) => {

//     if (mounth > 2 && mounth < 9) {
//         return lat > 0 ? 'Summer' : 'Winter';
//     }
//     else {
//         return lat > 0 ? 'Winter' : 'Summer';
//     }
// }


// const SeasonDisplay = (props) => {
//     const season = getSeason(props.lat, new Date().getMonth());
//     console.log(season);
//     const text = (season === 'Winter' ? "Burr, it's chilly" : "Lets hit the beach");
//     const icon = (season === 'Winter' ? "snowflake" : " sun");

//     return (
        
//         <div >
//              <i className={`${icon} icon`}></i>
//             <h1 >{text}</h1>
//             <i className={`${icon} icon`}></i>
//         </div>
//     );
// };

// export default SeasonDisplay;



//6 ay yaz Nisan, mayıs,haziran, temmuz, ağustos eylül
//6 ay kış ocak Şubat Mart ekim kasım aralık