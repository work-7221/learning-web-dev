console.log("Code is running..")


for (let i = 1; i <= 100; i++){
    console.log("The number is : " + i)
}

let obj = {
    name : "harry",
    role : "programmer",
    company: "code with harry"
}

for (key in obj) {
    element = obj[key];
    console.log(key, element)
}


for (const element of "rohan") {
    // console.log(element)
    console.log(element)
    
}
console.log("Code has been executed successfully!")

