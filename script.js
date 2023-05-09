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
        hh = hh - 12;
        session = "PM";
    }
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    let time = hh + ":" + mm + ":" + ss + " " + session;
    
    // Set greeting message based on current hour
    // console.log(hh);
    // console.log(session)

    let greeting;
    if (session === "AM") {
        greeting = "Buenos dias, la hora exacta...";
    } else if (session === "PM" && hh<=7) {
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

function getWeather(city, callback) {
    var url = 'https://api.openweathermap.org/data/2.5/weather?appid=60acd26add5f2b4eeaf7d840d0a8b8b4&units=metric&q=Santo Domingo,DO';
    var apiKey = "5e017caa041adc8c7e499bdfe5a10f53";
    $.ajax({
        dataType: "jsonp",
        url: url,
        jsonCallback: 'jsonp',
        data: { q: city, appid: apiKey },
        cache: false,
        success: function(data) {
            callback(data.main.temp);
            console.log(data);
        }
    });
}

getWeather('Santo Domingo, DO', function(temp) {
    // Update greeting with temperature information
    let greetingtemp = "La temperatura... "
    let temperature = Math.ceil(temp) + ' grados centigrados';
    document.getElementById("greetingtemp").innerText = greetingtemp;
    document.getElementById("temp").innerText = temperature;

console.log(getWeather);
});
