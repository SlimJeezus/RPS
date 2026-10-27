let score = document.body.getElementsByTagName("h1")[4];
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let yourImage = document.body.getElementsByTagName("img")[0];
let computerImage = document.body.getElementsByTagName("img")[1];
let computerScore = 0
let youScore = 0
let tieScore = 0

function rockClick() {
    yourImage.src = "img/rock.avif";
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1){
        computerImage.src = "img/rock.avif"
        tieScore++
        score.textContent = ("You:" + youScore + " ------ Computer:" + computerScore + " ------ Tie:" + tieScore)
    }
    else if (randomNumber == 2){
        computerImage.src = "img/paper.webp"
        computerScore++
        score.textContent = ("You:" + youScore + " ------ Computer:" + computerScore + " ------ Tie:" + tieScore)
    }
    else if (randomNumber == 3){
        computerImage.src = "img/scissors.webp"
        youScore++
        score.textContent = ("You:" + youScore + " ------ Computer:" + computerScore + " ------ Tie:" + tieScore)
    }
}

function paperClick() {
    yourImage.src = "img/paper.webp";
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1){
        computerImage.src = "img/rock.avif"
        youScore++
        score.textContent = ("You:" + youScore + " ------ Computer:" + computerScore + " ------ Tie:" + tieScore)
    }
    else if (randomNumber == 2){
        computerImage.src = "img/paper.webp"
        tieScore++
        score.textContent = ("You:" + youScore + " ------ Computer:" + computerScore + " ------ Tie:" + tieScore)
    }
    else if (randomNumber == 3){
        computerImage.src = "img/scissors.webp"
        computerScore++
        score.textContent = ("You:" + youScore + " ------ Computer:" + computerScore + " ------ Tie:" + tieScore)
    }

}

function scissorsClick() {
    yourImage.src = "img/scissors.webp";
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1){
        computerImage.src = "img/rock.avif"
        computerScore++
        score.textContent = ("You:" + youScore + " ------ Computer:" + computerScore + " ------ Tie:" + tieScore)
    }
    else if (randomNumber == 2){
        computerImage.src = "img/paper.webp"
        youScore++
        score.textContent = ("You:" + youScore + " ------ Computer:" + computerScore + " ------ Tie:" + tieScore)
    }
    else if (randomNumber == 3){
        computerImage.src = "img/scissors.webp"
        tieScore++
        score.textContent = ("You:" + youScore + " ------ Computer:" + computerScore + " ------ Tie:" + tieScore)
    }

}