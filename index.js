//Code voor dobbelsteen. Genereerd een willekeurig getal van 1 t/m 6

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1)+1;

//Functie om afbeelding te wijzigen
function randomDice1(randomNumber1){


if (randomNumber1 === 1){
        document.getElementById("diceLinks").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2){
    document.getElementById("diceLinks").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3){
    document.getElementById("diceLinks").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4){
    document.getElementById("diceLinks").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5){
    document.getElementById("diceLinks").setAttribute("src", "images/dice5.png");
} else{
    document.getElementById("diceLinks").setAttribute("src", "images/dice6.png");
}

}

randomDice1(randomNumber1)


//Code dobbelsteen nummer 2, functie + variabele
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2)+1;

function randomDice2(randomNumber2){
if (randomNumber2 === 1){
    document.getElementById("diceRechts").setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2){
document.getElementById("diceRechts").setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3){
document.getElementById("diceRechts").setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4){
document.getElementById("diceRechts").setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5){
document.getElementById("diceRechts").setAttribute("src", "images/dice5.png");
} else{
document.getElementById("diceRechts").setAttribute("src", "images/dice6.png");
}

}

randomDice2(randomNumber2)

var speler1 = randomNumber1;
var speler2 = randomNumber2;


function winnerTekst(speler1, speler2){
    if (speler1 < speler2){
        document.getElementById("title").innerHTML = "Speler 2 Wint!";
    } else if (speler2 < speler1) {
        document.getElementById("title").innerHTML = "Speler 1 Wint!";
    } else {
        document.getElementById("title").innerHTML = "Gelijkspel";
    }
}


winnerTekst(speler1, speler2);
