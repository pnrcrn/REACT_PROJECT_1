import React from 'react';

const ApprovalCard=(props)=>{
    return(
<div className='ui card'>
    <div className='content'>{props.children}{/* burada approvalcard'ımıza child bağladık*/}
    <div className='extra content'>
        <div className='ui two buttons'>
            <div className='ui basic green button'>Appprove</div>
            <div className='ui basic red button'>Reject</div>
        </div>
    </div>
    </div>
{/* {props.children} BURADADA VEREBİLİRİZ*/}
</div>
    );
};

export default ApprovalCard;








// import React from 'react';

// const ApprovalCard=()=>{
//     return(
// <div className='ui card'>
//     <div className='content'>Are you sure?
//     <div className='extra content'>
//         <div className='ui two buttons'>
//             <div className='ui basic green button'>Appprove</div>
//             <div className='ui basic red button'>Reject</div>
//         </div>
//     </div>
//     </div>

// </div>
//     );
// };

// export default ApprovalCard;