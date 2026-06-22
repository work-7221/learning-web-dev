// let change = document.createElement("div");

// change.setAttribute("class", "created");
// change.innerHTML = "I have been inserted <b>INSERTED BY ROHAN </b>"

// document.querySelector(".container").append(change);


let cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforebegin",
    '<div class = "box"> This is a box <b>inserted via insertAdjacentHTML function</b> </div>'
)


console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);    

// document.querySelector(".container").classList.add("ROHAN");
// console.log(document.querySelector(".container").classList);
// document.querySelector(".container").classList.add("ROHAN");
// console.log(document.querySelector(".container").classList);
// document.querySelector(".container").classList.add("ROHAN");
// console.log(document.querySelector(".container").classList);
// document.querySelector(".container").classList.add("ROHAN");
// console.log(document.querySelector(".container").classList);
// document.querySelector(".container").classList.add("ROHAN");
// console.log(document.querySelector(".container").classList);


document.querySelector(".container").classList.toggle("red");