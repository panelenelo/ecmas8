
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
    let price = document.querySelector("#shipOrder").valueAsNumber;
    if(price < 0 || isNaN(price)){
        document.querySelector("#js-shipPrice").innerHTML = "Invalid price";
        return;
    }

    if(price < 40){
        price = price + 10;
    }
    document.querySelector("#js-shipPrice").innerHTML = `R$${price}`;
}

