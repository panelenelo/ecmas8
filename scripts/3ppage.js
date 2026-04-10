
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