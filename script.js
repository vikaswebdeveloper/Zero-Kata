function myFunction(x) {
    if (x.matches) {
        let clickMusic = new Audio("click.wav");
        let victory = new Audio("Vsound.mp3");
        let gameOver = false;

        let turn = "O";

        const changeTurn = () => {
            if (turn == "X") {
                return "O";
            } else {
                return "X";
            }
        }

        const checkWin = () => {
            let areas = document.getElementsByClassName('area');
            let wins = [
                [0, 1, 2, 0, 7, 0],
                [3, 4, 5, 0, 22, 0],
                [6, 7, 8, 0, 38, 0],
                [0, 3, 6, 22, 15, 90],
                [1, 4, 7, 22, 0, 90],
                [2, 5, 8, 22, -15, 90],
                [0, 4, 8, 16, 16, 45],
                [2, 4, 6, 16, -16, 135],
            ]

            wins.forEach(e => {
                if ((areas[e[0]].innerText == areas[e[1]].innerText) && (areas[e[1]].innerText == areas[e[2]].innerText) && areas[e[0]].innerText != '') {
                    document.querySelector('.info').innerText = areas[e[1]].innerText + " won";
                    gameOver = true;
                    victory.play();
                    document.querySelector('.danceImage').style.width = "10rem";
                    document.querySelector('.line').style.transform = `rotate(${e[5]}deg) translate(${e[3]}vw, ${e[4]}vw)`;
                    document.querySelector('.line').style.width = `45vw`;
                }
            })
        }

        let boxes = document.getElementsByClassName("box");
        Array.from(boxes).forEach(element => {
            let area = element.querySelector('.area');
            element.addEventListener('click', () => {
                if (area.innerText == '') {
                    area.innerText = turn;
                    turn = changeTurn();
                    clickMusic.play();
                    checkWin();
                    if (gameOver == false) {
                        document.getElementsByClassName("info")[0].innerText = turn + "'s turn";
                    }
                }
            })
        })

        reset.addEventListener('click', () => {
            let area = document.getElementsByClassName("area");
            Array.from(area).forEach(element => {
                element.innerText = '';
            });
            turn = 'O';
            gameOver = false;
            document.getElementsByClassName("info")[0].innerText = turn + "'s turn";
            document.querySelector('.danceImage').style.width = "0px";
            document.querySelector('.line').style.width = `0vw`;
        })
    } else {
        let clickMusic = new Audio("click.wav");
        let victory = new Audio("Vsound.mp3");
        let gameOver = false;

        let turn = "O";

        const changeTurn = () => {
            if (turn == "X") {
                return "O";
            } else {
                return "X";
            }
        }

        const checkWin = () => {
            let areas = document.getElementsByClassName('area');
            let wins = [
                [0, 1, 2, 0, 5, 0],
                [3, 4, 5, 0, 15, 0],
                [6, 7, 8, 0, 25, 0],
                [0, 3, 6, 15, 10, 90],
                [1, 4, 7, 15, 0, 90],
                [2, 5, 8, 15, -10, 90],
                [0, 4, 8, 10.5, 10.5, 45],
                [2, 4, 6, 10.5, -10.5, 135],
            ]

            wins.forEach(e => {
                if ((areas[e[0]].innerText == areas[e[1]].innerText) && (areas[e[1]].innerText == areas[e[2]].innerText) && areas[e[0]].innerText != '') {
                    document.querySelector('.info').innerText = areas[e[1]].innerText + " won";
                    gameOver = true;
                    victory.play();
                    document.querySelector('.danceImage').style.width = "10rem";
                    document.querySelector('.line').style.transform = `rotate(${e[5]}deg) translate(${e[3]}vw, ${e[4]}vw)`;
                    document.querySelector('.line').style.width = `30vw`;
                }
            })
        }

        let boxes = document.getElementsByClassName("box");
        Array.from(boxes).forEach(element => {
            let area = element.querySelector('.area');
            element.addEventListener('click', () => {
                if (area.innerText == '') {
                    area.innerText = turn;
                    turn = changeTurn();
                    clickMusic.play();
                    checkWin();
                    if (gameOver == false) {
                        document.getElementsByClassName("info")[0].innerText = turn + "'s turn";
                    }
                }
            })
        })

        reset.addEventListener('click', () => {
            let area = document.getElementsByClassName("area");
            Array.from(area).forEach(element => {
                element.innerText = '';
            });
            turn = 'O';
            gameOver = false;
            document.getElementsByClassName("info")[0].innerText = turn + "'s turn";
            document.querySelector('.danceImage').style.width = "0px";
            document.querySelector('.line').style.width = `0vw`;
        })
    }
}
  
var x = window.matchMedia("(max-width: 500px)")
myFunction(x);