
let valueInputIsEmptyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-android" viewBox="0 0 16 16">
  <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>`;

let kissValue = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-kiss-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M16 8a8 8 0 1 0-2.697 5.99c-.972-.665-1.632-1.356-1.99-2.062-.388-.766-.419-1.561-.075-2.23.496-.97 1.73-1.466 2.762-1.05.65-.262 1.38-.162 1.957.19.028-.275.043-.555.043-.838ZM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5Zm1.512 3.647c-.347.08-.737.198-1.107.319a.5.5 0 1 1-.31-.95c.38-.125.802-.254 1.192-.343.37-.086.78-.153 1.103-.108.16.022.394.085.561.286.188.226.187.497.131.705a1.894 1.894 0 0 1-.31.593c-.077.107-.168.22-.275.343.107.124.199.24.276.347.142.197.256.397.31.595.055.208.056.479-.132.706-.168.2-.404.262-.563.284-.323.043-.733-.027-1.102-.113a14.87 14.87 0 0 1-1.191-.345.5.5 0 1 1 .31-.95c.371.12.761.24 1.109.321.176.041.325.069.446.084a5.609 5.609 0 0 0-.502-.584.5.5 0 0 1 .002-.695 5.52 5.52 0 0 0 .5-.577 4.465 4.465 0 0 0-.448.082Zm.766-.086-.006-.002c.004 0 .006.002.006.002Zm.002 1.867h-.001l-.005.001a.038.038 0 0 1 .006-.002Zm.157-4.685a.5.5 0 0 1-.874-.486A1.934 1.934 0 0 1 10.25 5.75c.73 0 1.356.412 1.687 1.007a.5.5 0 1 1-.874.486.934.934 0 0 0-.813-.493.934.934 0 0 0-.813.493ZM14 9.828c1.11-1.14 3.884.856 0 3.422-3.884-2.566-1.11-4.562 0-3.421Z"/>
</svg>`
let valueInput = prompt("Enter your Name");

let timeValue = new Date();

let todayValue = `${timeValue.getFullYear()} / ${timeValue.getMonth()+1} / ${timeValue.getDate()}`;

let currentClock = `${timeValue.getHours()} : ${timeValue.getMinutes()} : ${timeValue.getMilliseconds()}`;
let welcomeValue = document.querySelector("#hllbr");//
welcomeValue.classList.add("text-primary");
welcomeValue.style.textAlign = "center";
welcomeValue.style.backgroundColor = "yellowgreen";
document.body.style.backgroundColor = "black";

let dateValue = document.querySelector("#info");
dateValue.innerHTML = todayValue;
dateValue.classList.add("text-danger");
dateValue.style.backgroundColor = "yellowgreen";
dateValue.style.textAlign = "Center";

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    
    setTimeout(showTime, 1000);
    
}
let clockValue = document.getElementById("MyClockDisplay");
clockValue.style.textAlign = "center";
clockValue.style.fontFamily = "Orbitron";
clockValue.style.color = "#17D4FE";
clockValue.style.letterSpacing = "7px";
clockValue.style.fontSize = "60px";
showTime();

let ınfo2 = document.querySelector("#info2");
ınfo2.innerHTML = `${valueInput !== null ? valueInput : "Sevgili Ziyaretçi "} Merhaba Sayfami Ziyaret Ettiğiniz için Teşekkür Ederim ${valueInput !== null ? kissValue : valueInputIsEmptyIcon}`;
ınfo2.style.backgroundColor = (valueInput !== null ? "yellowgreen" : "purple");
ınfo2.style.color =(valueInput !== null ? "purple" : "yellowgreen");
ınfo2.style.textAlign="center";
ınfo2.style.fontSize = "30px";

console.log(todayValue);
