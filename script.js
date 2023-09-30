//——————————–––––––––––––––––(Generating random numbers 1 and match them to HTML)--------

var randomNumber1 = Math.floor(Math.random() * 6 + 1); // 1 ~ 6

var randomDiceeImage = "dice" + randomNumber1 + ".png"; // dicee1.png ~ dicee6.png

var randomImageSource = "images/" + randomDiceeImage; // "src: image/dicee6.png"

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//——————————–––––––––––––––––(Generating random numbers 2 and match them to HTML)--------

var randomNumber2 = Math.floor(Math.random() * 6 + 1); // 1 ~ 6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// ——————————––––––––––––––––(if player 1 wins)–-----------------------------------------

if (randomNumber1 > randomNumber2) document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
else if (randomNumber1 < randomNumber2) document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
else document.querySelector("h1").textContent = "Draw!";

//——————————–––––––––––––––––------------------------------------------------------------