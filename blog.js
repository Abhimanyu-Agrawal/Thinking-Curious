let b1= document.querySelector("i")

let touch = 0

b1.style.color='white'

b1.addEventListener("click", function(){
    if(touch==0){
        b1.style.color='wheat'
        touch++
    }
    else{
        b1.style.color='white'
        touch--
    }
}
);