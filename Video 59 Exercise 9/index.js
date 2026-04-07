let A = prompt("Enter the value of A: ")

let B = prompt("Enter the value of B: ")

let chances = (Math.random() * 100);
let ops = prompt("Enter the operation you want to perform: ")

if (chances >= 10 || chances <= 0) {
    let count = 0;



    if (ops === "*") {
        count += 1
        ops = "/"
    }

    if (count  == 1) {

    } else {

        if (ops === "+") {
            count += 1
            ops = "-"
        }
    
        if (ops === "-") {
            count += 1
            ops = "+"
        }
    
        if (ops === "/") {
            count += 1
            ops = "*"
        }
    }


}