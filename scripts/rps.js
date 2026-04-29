const max = 3

const win=document.querySelector("#wins");
const loss=document.querySelector("#losses");
const tie=document.querySelector("#ties");

const user=document.querySelector("#usr-choice");
const computer=document.querySelector("#cmptr-choice");


function rps(sign){
    let comp_sign = getRandomInt(max);
    let result = sign - comp_sign;
    showSign(sign, user);
    showSign(comp_sign, computer);
    switch(result){
        case -2:
            increment(win);
            break;
        case -1:
            increment(loss);
            break;
        case 0:
            increment(tie);
            break;
        case 1:
            increment(win);
            break;
        case 2:
            increment(loss);
            break;
    }
}

function showSign(sign, user){
    switch(sign){
        case 0:
            user.innerText = "Rock";
            break;
        case 1:
            user.innerText = "Paper";
            break;
        case 2:
            user.innerText = "Scissors";
            break;
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function increment(elem){
    count = elem.innerText;
    count++;
    elem.innerText=count;
    console.log(elem.innerText)
}

function reset(){
    win.innerText = 0;
    tie.innerText = 0;
    loss.innerText = 0;
}
