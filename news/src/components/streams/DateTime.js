export function DateTime(){
    const today = new Date();
    var currentDate = today.getDay() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getFullYear()  ;
    // var time = today.getHours() + ' - ' + today.getMinutes() + ' - ' + today.getSeconds();
    // const  createdDate=currentDate+ " / "+ time;
    const  createdDate=currentDate;
    return createdDate;
    }