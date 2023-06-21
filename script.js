let calcBtn = document.getElementById('btn');
let getPlayer1 = document.getElementById('player1');
let getPlayer2 = document.getElementById('player2');
let getDynamic = document.getElementById('dynamic');

calcBtn.addEventListener("click", () => {
    var player1 = parseInt(getPlayer1.value);
    var player2 = parseInt(getPlayer2.value);

    if (player1 > 54) {
        noInput("54 is max")
    }

    if (player2 > 54) {
        noInput("54 is max")
    }

    var totalHcp = calculateHcp(player1, player2);
    console.log(totalHcp);

    if (totalHcp > 0) {
        getDynamic.innerHTML = `Team will get ${totalHcp} in HCP - adjusted ${Math.round(totalHcp)}`
    }
});


function calculateHcp(p1, p2) {
    var totalHcp;
    var player1Lowest;

    if (p1 < p2) {
        player1Lowest = true;
    } else {
        player1Lowest = false;
    }

    if (player1Lowest) {
        let hcpP1 = p1 * 0.5;
        let hcpP2 = p2 * 0.2;

        totalHcp = hcpP1 + hcpP2;
    }

    if (!player1Lowest) {
        let hcpP1 = p1 * 0.2;
        let hcpP2 = p2 * 0.5;

        totalHcp = hcpP1 + hcpP2;
    }

    return totalHcp;
}


function noInput(msg) {
    alert(msg);
    console.log("ERROR");
};

