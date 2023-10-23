const star=document.querySelectorAll(".star");
const container=document.getElementById("container-star");


let filled=0;

//when click on start
container.addEventListener("click",(e)=>{
    let currClick=e.target.dataset.index;
    for(let i=0;i<filled;i++){
        star[i].classList.remove("star-filled")
    }
    for(let i=0;i<currClick;i++){
        star[i].classList.add("star-filled")
    }
    

    document.getElementById("count").innerText=`Rating Count: ${currClick}`
    filled=currClick;
})

//when hover over star
container.addEventListener("mouseover",(e)=>{
    let currClick=e.target.dataset.index;
    for(let i=0;i<5;i++){
        star[i].classList.remove("star-filled")
    }
    for(let i=0;i<currClick;i++){
        star[i].classList.add("star-filled")
    }
    
})

//after leaving the hover
container.addEventListener("mouseleave",()=>{
    
    for(let i=0;i<5;i++){
        star[i].classList.remove("star-filled")
    }
    for(let i=0;i<filled;i++){
        star[i].classList.add("star-filled")
    }
   
})