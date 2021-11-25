//exo1

let number = document.getElementById("is-integer");
if (Number.isInteger(number)) {
    number.innerHTML = "la valeur est un nombre entier";
}
else {
    number.innerHTML = "la valeur n'est pas un nombre entier";
}

//exo2

let para = document.getElementById("is-nan");
if (Number.isNaN(parseInt(para.innerHTML))) {
    para.innerHTML = "La valeur est NaN";
}
else {
    para.innerHTML = "La valeur est un nombre";
}

// exo 3

let population = document.getElementById("parse-float");
let i = 33;
let recupNumber = parseInt(population.innerHTML);
let result = recupNumber * i ;
population.innerHTML = result;

//exo4

let para2 = document.getElementById("parse-int");
let age = 33;
let recupNumber2 = parseInt(para2.innerHTML);
let result2 = recupNumber2 / age;
para2.innerHTML = (Math.trunc(result2)).toString();


//exo5

let value = document.getElementById("to-fixed");
let res = Number.parseFloat(value.innerHTML).toFixed(2);
value.innerHTML = res.toString();