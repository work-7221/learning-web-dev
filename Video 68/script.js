console.log("Code is running")

const boxes = document.getElementsByClassName("box");

console.log(boxes);

boxes[2].style.backgroundColor = "red";


document.getElementById("BOX2").style.backgroundColor = "green";

document.querySelector(".box").style.backgroundColor = "pink"; //modifies first selector match 


// document.querySelectorAll(".box").forEach(
//     e => {
//         console.log(e);
//         e.style.backgroundColor = "pink";
//     }
// ); 

e = document.getElementsByTagName("div");

console.log(e);

console.log(e[1].matches("#BOX2"));
console.log(e[2].matches("#BOX2"));


console.log(e[1].closest("#BOX2"));


console.log(e[1].closest(".container"));
