var colors = generateRandomColor(6);
var pickedColor = pickRandomColor();

var squares = document.querySelectorAll('.square');
var header = document.querySelector('h1');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var resetBtn = document.getElementById('reset');

colorDisplay.textContent = pickedColor;
function init(){
    
    for (var i=0 ; i< squares.length ; i++ ){

        squares[i].style.backgroundColor = colors[i] ;
        squares[i].style.display="block";
        squares[i].addEventListener('click' , function(){
           var clickedColor = this.style.backgroundColor ;
           if ( clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            for(s of squares){
                s.style.backgroundColor=pickedColor;
            }
            header.style.backgroundColor=pickedColor;
            resetBtn.textContent = " Play Again ? ";
           }
           else {
                this.style.backgroundColor= "#232323";
                messageDisplay.textContent = "Try Again";
           }
        })
     
}
}


function pickRandomColor() {
    var rand = Math.random(); // number between 0 & 1 
    rand = Math.floor(rand * colors.length); // to remove decimal 
    return colors[rand] ;
}

function generateRandomColor(n){
    var arr = [];
    for ( var i = 0 ; i < n ; i++){
        arr[i]=randomColor();
    }
    return arr ;
}

function randomColor(){
    // generate rgb(0-225, 0-255, 0-255)
    var number = [];
    for ( i = 0 ; i< 3 ; i ++){
     number [i] =  Math.floor(Math.random()*256);
    }
    var color = "rgb("+number[0]+", "+number[1]+", "+number[2]+")";
    return color;
}

function Reset() {
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    colors = generateRandomColor(6);
    pickedColor=  pickRandomColor();
    colorDisplay.textContent = pickedColor;
    init();
    header.style.backgroundColor ="teal";

    
}
var easybtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
function Easy(){
    header.style.backgroundColor ="teal";
    messageDisplay.textContent = "";
    easyBtn.setAttribute("class", "selected");
    hardBtn.removeAttribute("class");
    colors = generateRandomColor(3);
    pickedColor=  pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for ( var i = 0 ; i < squares.length ; i++) {
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i] ;
        }
        else {
            squares[i].style.display="none";
        }
    }
    
}

function Hard(){
 
    hardBtn.setAttribute("class", "selected");
    easyBtn.removeAttribute("class");
    Reset();
 
   
    
}