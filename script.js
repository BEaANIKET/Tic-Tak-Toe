let turn = 'X';
let gameover=false;

let startDance = function(){
    console.log("dance");
    let dance = document.querySelector('.dance');
    let img = dance.querySelector('img');
    img.style.width = '175px';
}
let stopDance = function(){
    let dance = document.querySelector('.dance');
    let img = dance.querySelector('img');
    img.style.width = '0px';
}

let cheakWin = function(){
    let boxtext = document.getElementsByClassName('boxtext');
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    win.forEach(function(element){
        if((boxtext[element[0]].innerText === boxtext[element[1]].innerText ) && (boxtext[element[1]] .innerText=== boxtext[element[2]].innerText) && (boxtext[element[0]].innerText!=='')){
            gameover=true;
            document.querySelector('.turnText').innerText = boxtext[element[0]].innerText + " Win The Game";
            startDance();
        }
    })  
}

let changeTurn = function(){
    return turn==='X' ? 'O' : 'X';
} 


document.querySelector('.reset').addEventListener('click',function(){
    console.log("reset");
    let box = document.querySelectorAll('.box');
    Array.from(box).forEach(function(element){
        let boxtext=element.querySelector('.boxtext');
        boxtext.innerText="";
        stopDance();
        turn='X';
    })
})



let box = document.querySelectorAll('.box');
Array.from(box).forEach(function(element){
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',function(){
       if( boxtext.innerText === '' ){
        boxtext.innerText = turn;
        turn = changeTurn();
        document.querySelector('.turnText').innerText = "Turn For " + turn;
        cheakWin();
       }
   
    })
})
