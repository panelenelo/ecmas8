
let count=0;
let countEl=document.getElementById("count-el");

console.log(document.querySelector("button"));

function increment(){
    count++;
    countEl.innerText=count;
}

function decrement(){
    count--;
    if(count<0){
        count=0;
    }
    countEl.innerText=count;
}

function reset(){
    count=0;
    countEl.innerText=count;
}

function save(){
    console.log(count);
}

