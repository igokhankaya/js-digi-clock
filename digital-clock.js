let userName = prompt('Please, enter your name:')
document.querySelector("#Name").innerHTML = userName


function showTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    document.querySelector("#myClock").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(showTime, 1000);

}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}


showTime()