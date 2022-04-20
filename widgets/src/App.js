import React, { useState, useEffect } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';




const items = [

    {
        title: 'What is React?',
        content: 'React is a front end JS framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }

];

const options = [

    {
        label: 'Red is color',
        value: 'red'
    },
    {
        label: 'Green is color',
        value: 'green'
    },
    {
        label: 'A shape of blue',
        value: 'blue'
    }

];

    export default()=>{
        const [selected,setSelected]=useState(options[0]);
        return <div>
            <Header/>
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                label='Bir renk seçiniz'
                options={options}
                selected={selected}
                onSelectedChange={setSelected}/>
            </Route>
            <Route path='/translate'>
                <Translate/>
            </Route>
          
        </div>;
    };









 
//     () => {
//         if (window.location.pathname === '/') {
//             return <Accordion items={items}></Accordion>;
//         }
//     };
//     const showList =
//     () => {
//         if (window.location.pathname === '/list') {
//             return <Search/>;
//         };
//     };
//     const showDropdown =
//     () => {
//         if (window.location.pathname === '/dropdown') {
//             return<Dropdown/ >;
//         }
//     };
//     const showTranslate =
//     () => {
//         if (window.location.pathname === '/translate') {
//             return <Translate/>;
//         }
//     };
// export default () => {
//     const [selected, setSelected] = useState(options[0]);
//     const [showDropdown, setShowDropDown] = useState(true);

//     return <div>
//         {showAccordion()}
//         {showList()}
//         {showDropdown()}
//         {showTranslate()}
//     </div>;

// };









// import React, { useState, useEffect } from 'react';
// import Accordion from './components/Accordion';
// import Dropdown from './components/Dropdown';
// import Search from './components/Search';
// import Translate from './components/Translate';




// const items = [

//     {
//         title: 'What is React?',
//         content: 'React is a front end JS framework'
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is a favorite JS library among engineers'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     }

// ];

// const options = [

//     {
//         label: 'Red is color',
//         value: 'red'
//     },
//     {
//         label: 'Green is color',
//         value: 'green'
//     },
//     {
//         label: 'A shape of blue',
//         value: 'blue'
//     }

// ];
// export default () => {
//     const [selected, setSelected] = useState(options[0]);
//     const [showDropdown, setShowDropDown] = useState(true);

//     return <div>


//         <Translate></Translate>
//         {/* <button onClick={() => setShowDropDown(!showDropdown)} >Renk Seç</button>
//         {showDropdown ?
//             <Dropdown
//                 selected={selected}
//                 onSelectedChange={setSelected}
//                 options={options} >
//             </Dropdown> : null
//         } */}
//         {/* <Search></Search>
//         <Accordion items={items}>

//         </Accordion> */}

//     </div>;

// };