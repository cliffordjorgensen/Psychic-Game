///Cliff Jorgensen///
randNum = () => {
    var genRand = Math.floor(Math.random() * 97) + 23
    return genRand;
}
var wins = 0;
var losses = 0;
var geussCount = 0;
var computerChoices = String.fromCharCode(randNum());
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var geussCountText = document.getElementById("geussCount-text");
document.onkeyup = function (event) {
    var userGuess = event.key;
    for (i = 0; i < 10; i++) {
        var computerChoices = String.fromCharCode(randNum())
    }
    if (userGuess === computerChoices) {
        wins++;
        alert("YOuWinnnnN!!")
    } else {
        geussCount++;
        losses++;
    }
    if (geussCount > 10) {
        alert("YOuLosE!!");
        alert("press OK to play again")
        wins = 0;
        losses = 0;
        geussCount = 0;
    };
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerChoices;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "osses: " + losses;
    geussCountText.textContent = "Geuss Count: " + geussCount;


}
