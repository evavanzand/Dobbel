//Code voor dobbelsteen. Genereerd een willekeurig getal van 1 t/m 6

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1)+1;

//Functie om afbeelding te wijzigen
function randomDice(randomNumber1){


    if (randomNumber1 === 1){
        document.getElementById("diceLinks").setAttribute("src", "/images/dice1.png");
} else if (randomNumber1 === 2){
    document.getElementById("diceLinks").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3){
    document.getElementById("diceLinks").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4){
    document.getElementById("diceLinks").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5){
    document.getElementById("diceLinks").setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 6){
    document.getElementById("diceLinks").setAttribute("src", "images/dice6.png");
}

}
randomDice();