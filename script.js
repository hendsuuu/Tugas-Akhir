document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";      
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})


var i = 1;
setInterval(function(){
    document.getElementById('radio' + i).checked = true;
    i++;
    if(i>5){
        i = 1;
    }
},10000)

function forder(){
    document.querySelector(".tambah").style.display = "flex";
    fAdd();
}

var a = 0;
function fAdd(){
    a += 1;
     if(a>10){
         a=10;
     }
     document.getElementById("hasil").innerHTML=a;
}
function fmin(){
     a -= 1;
     if(a==0){
        document.querySelector(".tambah").style.display = "none";
     }
     document.getElementById("hasil").innerHTML=a;
}




