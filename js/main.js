let screen=document.querySelectorAll(".calculator .screen-calculator #screen");
console.log(screen)
let divbutton=document.querySelector(".calculator .button-calculator");
let postiveNegative=document.querySelector(".postive-negative")

divbutton.addEventListener("click",function(event) {
    if(event.target.classList.contains("btn")){
        screen[0].value += event.target.value
    }
    if(event.target.classList.contains("clear")){
        screen[0].value=""
    }
    if(event.target.classList.contains("clearNumByNum")){   
        let clearNum=screen[0].value.split("").slice(0,-1).join("")
        screen[0].value=clearNum
    }
    if(event.target.classList.contains("result")){
        calcOpration(screen[0].value)
    }
})
function calcOpration(value){
    try{
        screen[0].value=eval(value)
    }catch(error){
        screen[0].value="Error"
    }
}
postiveNegative.onclick=function(params) {
    screen[0].value="-"
}