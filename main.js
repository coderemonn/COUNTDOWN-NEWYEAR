let daysItem=document.getElementById('days');
let hoursItem=document.getElementById('hours');
let minItem=document.getElementById('min');
let secItem=document.getElementById('sec');

let countDown= () => {
    let futureDate=new Date('1 january 2024');
    let currentDate=new Date();
    let myDate= futureDate - currentDate;
    let days=Math.floor(myDate / 1000/60/60/24);
    let hours=Math.floor(myDate / 1000/60/60) % 24;
    let min=Math.floor(myDate / 1000/60) % 60;
    let sec=Math.floor(myDate / 1000)% 60;
    console.log(days);
    console.log(hours);
    console.log(min);
    console.log(sec);


    daysItem.innerHTML=days;
    hoursItem.innerHTML=hours;
    minItem.innerHTML=min;
    secItem.innerHTML=sec;


    
}

countDown();
setInterval(countDown,1000)

