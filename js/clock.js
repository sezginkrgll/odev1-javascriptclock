let name = prompt("Adınızı Giriniz:")
let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")
myName.innerHTML = `${name}`

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes(); 
    let s = today.getSeconds();
    let d = today.getDay();
    switch(d){
        case 0:
            d = "Pazar"
            break;
        case 1:
            d = "Pazartesi"
            break;
        case 2:
            d = "Salı"
            break;
        case 3:
            d = "Çarşamba"
            break;
        case 4:
            d = "Perşembe"
            break;
        case 5:
            d = "Cuma"
            break;
        case 6:
            d = "Cumartesi"
            break;
    }
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + " " + d;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
