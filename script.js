document.querySelector("#dark-mode-btn").addEventListener("click", function () {
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.querySelector(".clockcontainer").style.border = "2px solid black";
        document.querySelector(".hour").style.border = "2px solid black";
        document.querySelector(".minute").style.border = "2px solid black";
        document.querySelector(".second").style.border = "1px solid black";

    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelector(".clockcontainer").style.border = "2px solid white";
        document.querySelector(".hour").style.border = "2px solid white";
        document.querySelector(".minute").style.border = "2px solid white";
        document.querySelector(".second").style.border = "1px solid white";
    }
});

function updateTime() {
    document.querySelector(".time").innerHTML = new Date().toLocaleTimeString();
}

function updateDate() {
    document.querySelector(".date").innerHTML = new Date().toLocaleDateString();
}

function secondhand() {
    const s = document.querySelector(".second");
    let seconds = new Date().getSeconds();
    s.style.transform = `rotate(${seconds * 6 - 90}deg)`;
}

function minutehand() {
    const m = document.querySelector(".minute");
    let minutes = new Date().getMinutes();
    m.style.transform = `rotate(${minutes * 6 - 90}deg)`;
}

function hourhand() {
    const h = document.querySelector(".hour");
    let hours = new Date().getHours();
    h.style.transform = `rotate(${hours * 30 - 90}deg)`;
}

setInterval(() => {
    updateTime();
    updateDate();
    secondhand();
}, 1000);
setInterval(() => {
    minutehand();
}, 1000);
setInterval(() => {
    hourhand();
}, 1000);

// function secondHand() {
//     for(i=0;i<360;i+=6){
//         currentAngle += 20;
//         document.querySelector(".second").style.transform = `rotate(${currentAngle}deg)`;
//     }
// }
// setInterval(secondHand, 1000);

