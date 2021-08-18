
let username = prompt("Hoşgeldiniz, lütfen isminizi yazınız.")

let usrnm = document.querySelector("#user")

usrnm.innerHTML = `${username}`


function getDateTime() {
    var now     = new Date(); 
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();
    var day = now.getDay();
   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }

    var dateTime = hour+':'+minute+':'+second;   
     return dateTime;
}

setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("saat").innerHTML = currentTime;
}, 10);

  var tarih = new Date();
  var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  document.getElementById("gun").innerHTML=(gunler[tarih.getDay()]);
