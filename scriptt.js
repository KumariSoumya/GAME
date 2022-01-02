console.log("WELCOME TO TIC TAC TOE")
let turn="X"
let gameover="false"
let gameover1=false
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}
const checkWin =()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
    ]
    
 wins.forEach(e=>{
     if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[1]].innerText!==''))
    { if(gameover==="false"){
        // document.querySelector('.info')[0].innerText=boxtext[e[0]].innerText + " WON"
        document.getElementsByClassName("info")[0].innerText=boxtext[e[0]].innerText + " WON"
       gameover="true"
       gameover1=true}}
       else{
        gameover="false"  
       }
    })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
           turn= changeTurn();
            checkWin();
            if(!gameover1){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;}}
        
          })
        
})
reset.addEventListener('click',()=>{
let boxtexts=document.querySelectorAll('.boxtext');
Array.from(boxtexts).forEach(element=>{
    element.innerText=""
    turn="X"
    gameover="false"
    gameover1=false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})
})