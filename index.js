var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomSolution = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomSolution);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomSolution2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomSolution2);

if(randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML= ("Winner Player 1");
}
else if(randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML= ("Winner Player 2");
}
else{
document.querySelector("h1").innerHTML= ("Match Tied");
}
