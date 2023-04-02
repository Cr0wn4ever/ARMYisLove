function timeDate(){
    const today = new Date();
    let hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds();
    document.getElementById("date").innerHTML = `${hour}:${minute}:${second} | ${today.toDateString()}`;
    setTimeout(timeDate, 1000);
}