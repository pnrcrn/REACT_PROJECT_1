import React from 'react'
import * as ReactDOM from 'react-dom/client';
import CommandDetails from './commandDetails';
import { faker } from '@faker-js/faker';
import ApprovalCard from './approvalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>{/*BURADA APPROVAL KARTIMIZIN İÇİNE CHİLDREN OLARAK COMMANDETAİL'LERİMZİİ VERDİK*/}
                <CommandDetails author='Pınar' tarih='4:00 PM' avatar={faker.image.avatar()} content='Good luck' />
            </ApprovalCard>
            <ApprovalCard>
                <CommandDetails author='İlknur' tarih='4:45 PM' avatar={faker.image.avatar()} content='Good evening' />
            </ApprovalCard>
            <ApprovalCard>
                <CommandDetails author='Ayşe' tarih='3:40 PM' avatar={faker.image.avatar()} content='Have a good day' />
            </ApprovalCard>
            <ApprovalCard>
                <CommandDetails author='Deniz' tarih='5:00 PM' avatar={faker.image.avatar()} content='Good luck ' />
            </ApprovalCard>
        </div>

    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);





// import React from 'react'
// import * as ReactDOM from 'react-dom';
// import faker from '@faker-js/faker';
// import CommandDetails from '/commandDetails';


// const App = () => {
//     return (
//         <div className="ui container comments">
//             <div className='comment'>
//                 <a href='/' className='avatar' >
//                     <img alt='avatar' src={faker.image.avatar()} />
//                 </a>
//                 <div className='content'>
//                     <a href='/' className='author'>Sam
//                     </a>
//                     <div className='metadata'>
//                         <span className='date'>Today at 1:00PM</span>
//                     </div>
//                     <div className='text'>NİCE DAAY..</div>
//                 </div>
//             </div>

//         </div>

//     );
// };
// ReactDOM.render(<App />, document.querySelector('#root'));







