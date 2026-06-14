function zegar(){
    document.getElementById("zegar").innerHTML =
    new Date().toLocaleTimeString();
}

setInterval(zegar,1000);