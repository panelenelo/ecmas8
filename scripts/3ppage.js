
function subscribe(){
    if(document.querySelector("#ytsub").innerHTML == "Subscribe"){
        document.querySelector("#ytsub")
        .innerHTML = "Unsub";
    }else{
        unsubscribe();
    }    
}

function unsubscribe(){
    document.querySelector("#ytsub")
        .innerHTML = "Subscribe";
}

function calculate(){
    let price = document.getElementById("shipOrder").valueAsNumber;
    if(price < 40){
        price = price + 10;
    }
    document.querySelector("#js-shipPrice").innerHTML = price;
}
