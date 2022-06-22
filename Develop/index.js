// console.log("wires connected");
const today = document.getElementById("currentDay");

today.textContent = (moment().format("MMMM Do YYYY, HH:mm"));

let myHour = parseInt((moment().format("HH")));

let all = document.querySelectorAll(".hour")

let timeBlocks = document.querySelectorAll(".row")





function colorChange() {
    for (let i = 0; i < all.length; i++){
        let hourNumber = parseInt(all[i].textContent);
        console.log(hourNumber);
        if (hourNumber<myHour){
            timeBlocks[i].classList.add("past");
        } else if (hourNumber===myHour){
            timeBlocks[i].classList.add("present");
        } else if (hourNumber>myHour){
            timeBlocks[i].classList.add("future");
        }
    }
}

document.onload = colorChange();