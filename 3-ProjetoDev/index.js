//Query Selector

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var h1 = document.querySelector("h1");
var p = document.querySelector("p");

//Numeros Aleatorios

var ramdomNumberPlayer1 = Math.floor(Math.random() * 6) + 1;
var ramdomNumberPlayer2 = Math.floor(Math.random() * 6) + 1;

//automação
var ft1 = `images/dice${ramdomNumberPlayer1}.png`;
var ft2 = `images/dice${ramdomNumberPlayer2}.png`;

// Player 1

img1.setAttribute("src", ft1);

//Player 2

img2.setAttribute("src", ft2);

//vencedor
if (ramdomNumberPlayer1 > ramdomNumberPlayer2) {
    h1.innerHTML = "Jogador 1 Ganhou! <i class='fa-solid fa-flag-checkered'></i>"
}else if (ramdomNumberPlayer1 < ramdomNumberPlayer2) {
    h1.innerHTML = "Jogador 2 Ganhou! <i class='fa-solid fa-flag-checkered'></i>"
}else{
    h1.innerHTML = "Empate!</i>"
}

