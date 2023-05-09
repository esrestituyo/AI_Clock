function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh;
        session = "PM";
    }
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    let time = hh + ":" + mm + ":" + ss + " " + session;
    
    // Set greeting message based on current hour
    console.log(hh);
    console.log(session)

    let greeting;
    if ((hh >= 6 && hh < 12) && (session = "AM")) {
        greeting = "Buenos dias, la hora exacta...";
    } else if ((hh >= 12 && hh < 18) && (session = "PM")) {
        greeting = "Buenas tardes, la hora exacta...";
    } else {
        greeting = "Buenas noches, la hora exacta...";
    }
    
    document.getElementById("clock").innerText = time;
    document.getElementById("greeting").innerText = greeting; // Update greeting element
    let t = setTimeout(function() {
        currentTime()
    }, 1000);
}
currentTime();