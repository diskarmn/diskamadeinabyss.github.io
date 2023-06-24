const pinggir=document.querySelectorAll(".dpict");
for(let i=0; i<pinggir.length;i++){
    if(i%2==0){
        pinggir[i].style.outline="2px solid white";
    }else{
        pinggir[i].style.outline="2px solid black";
        
    }
}