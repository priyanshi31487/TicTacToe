console.log("Welcome to Tic Toc Toe")
let music=new Audio("mixkit-arcade-game-opener-222.wav")
let touch=new Audio("mixkit-game-ball-tap-2073.wav")
let gameover=new Audio("crowd-cheer-ii-6263.mp3")
let turn="X"
let isgameover=false
music.autoplay = true;

const changeTurn=()=>{
    return turn === "X"?"O":"X"
}
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
wins.forEach(e=>{
    if ((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
    document.querySelector(".info").innerText=boxtext[e[0]].innerText + " Won";
    isgameover=true;
    gameover.play();
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px'
    }
})

}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
       if (boxtext.innerText === '') {
        boxtext.innerText = turn;
        turn=changeTurn();
        touch.play();
        checkWin();
        if (!isgameover){
        document.getElementsByClassName('info')[0].innerText='Turn for '+turn;
        }
       }
    })
})

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameover=false
    document.getElementsByClassName('info')[0].innerText='Turn for '+turn;
    gameover.pause();
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px'
    music.play();
})