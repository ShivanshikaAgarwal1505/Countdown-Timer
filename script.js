const newYear = '1 Jan 2024';
function countDown(){
    const newYearDate=new Date(newYear);
    const curDate= new Date();

    const Totalseconds= (newYearDate-curDate)/1000;

    const days= Math.floor(Totalseconds/3600/24);
    const hours= Math.floor(Totalseconds/3600) %24;
    const mins= Math.floor(Totalseconds/60)%60;
    const seconds= Math.floor(Totalseconds%60)
    console.log(seconds, mins, hours, days);

    document.getElementById("day").innerText=formatTime(days);
    document.getElementById("hour").innerText=formatTime(hours);
    document.getElementById("min").innerText=formatTime(mins);
    document.getElementById("sec").innerText=formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
setInterval(countDown, 1000);