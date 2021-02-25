console.log('message')

let game = []

function play(clickedId) {

    let clickedElement = document.getElementById(clickedId);
    let playerSpan = document.getElementById('player');

    let topLeft = game[0];
    let midLeft = game[3];
    let botLeft = game[6];
    let midTop = game[1];
    let Middle = game[4];
    let botMid = game[7];
    let topRight = game[2];
    let midRight = game[5];
    let botRight = game[8];

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        game[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        game[clickedId] = 'O';
    }
    console.log(game);

    if (topLeft !== undefined && topLeft === midTop && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (topLeft !== undefined && topLeft === Middle && topLeft === botRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (midTop !== undefined && midTop === Middle && midTop === botMid) {
        alert(`${midTop} is the winner`);
        return;
    }
    if (topRight !== undefined && topRight === midRight && topRight === botRight) {
        alert(`${topRight} is the winner`);
        return;
    }
    if (topRight !== undefined && topRight === Middle && topRight === botLeft) {
        alert(`${topRight} is the winner`);
        return;
    }
    if (botLeft !== undefined && botLeft === botMid && botLeft === botRight) {
        alert(`${botLeft} is the winner`);
        return;
    }
    if (midLeft !== undefined && midLeft === Middle && midLeft === midRight) {
        alert(`${midLeft} is the winner`);
        return;
    }

    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        if (game[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true) {
        alert(`Cat's game, there is no Winner`);
    }


    // function StartOver() {
    //     document.getElementById(StartOver).reset()

    //         < input type = 'button' onclick = 'StartOver' value = 'Reset Game' ></input >
    // }
}
///////
// [0, 1, 2] [0, 3, 6] [0, 4, 8] [1, 4, 7] [2, 5, 8] [2, 4, 6] [6, 7, 8] [3, 4, 5]
////////