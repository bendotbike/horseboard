function go() {

    // get input
    var word = document.getElementById("word-box").value;
    var players = document.getElementById("players-box").value;

    //alert("word: " + word + ", players: " + players);

    window.location.href = "scoreboard.html#" + word + "," + players;   

}

function scoreboardInit() {
    var word = window.location.href.split("#")[1].split(",")[0];
    var players = window.location.href.split("#")[1].split(",")[1];

    document.getElementById("word-header").innerHTML = word;

    for (i = 0; i < players; i++) {
        document.getElementById("players").innerHTML += "<b>Player " + (i+1) + " - <span id='player-" + i + "'>0</span></b><br>";
    }

    for (i = 0; i < players; i++) {
        document.getElementById("buttons").innerHTML += "<button id='button-" + i + "' onclick='addScore(" + i + ")'>Player" + (i+1) + "</button>";
    }

}

function addScore(playerNum) {
    document.getElementById("player-" + playerNum).innerHTML = parseInt(document.getElementById("player-" + playerNum).innerHTML) + 1;
    var score = parseInt(document.getElementById("player-" + playerNum).innerHTML);
    if (score > window.location.href.split("#")[1].split(",")[0].length) {
        alert("Player " + (playerNum+1) + " loses!");
        document.getElementById("player-" + playerNum).innerHTML = "<font color='red'>Lost!</font>";
        document.getElementById("button-" + playerNum).style.display = "none";
    }
}