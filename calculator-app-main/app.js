//first list of array numbers and conver it into a whole number
const button=document.querySelectorAll('.button');
const displayNumbers=document.querySelector('.number-placeholder')
console.log(button);
//function for caculations
let numbers=[];
let symbols='';
let equalSign='';
let numbers2=[];
let finalAnswer='';

button.forEach((btn)=>{
    btn.addEventListener('click',function(e){
if(e.target.value=='+'||e.target.value=='-'||e.target.value=='*'||e.target.value=='/'||e.target.value=='='){
    
//step 2: after a symbol is clicked the values inside the numbers array gets passed into a function and the numbers array is reset to nothing
symbols=e.target.value;
displayNumbers.innerHTML=`${symbols}`
list(numbers);
numbers=[];

//step 5: takes the whole array of numbers2 and finish the final answer for the calculation
if(e.target.value=='='){
numbers2.pop();
const answer =numbers2.join(' ');
finalAnswer=eval(answer); //the final answer of calculations
numbers=[finalAnswer]; //allows the entire calculation to loop after getting the final value
numbers2=[];
displayNumbers.innerHTML=`${finalAnswer}`
}
} 

//delete button
else if(e.target.value=='del'){
    numbers.pop();
    console.log(numbers);
displayNumbers.innerHTML=`${numbers.join('')}`
}
//reset button
else if(e.target.value=='reset'){ 
    numbers=[];
    numbers2=[];
   displayNumbers.innerHTML=`${0}`
    console.log(numbers)
}

//step 1: the numbers clicked will initially go through here and be passed inside the numbers array
else{
let number=e.target.value;
numbers.push(number);
displayNumbers.innerHTML=`${numbers.join('')}`
console.log(number)
}

})
})

//step 3: convert the values of the numbers array into a whole int and throw that new int and symbol into the array numbers2 (this loops until we are done)
function list(...numbers){
let listOfNumbers=numbers;
const wholeNumbers=parseFloat(listOfNumbers.toString().replace(/,/g, ''));
numbers2.push(wholeNumbers);
numbers2.push(symbols);

/* step 4:checks to see if array numbers2 is longer than 3. If it is than calculate the two int 
and reset the numbers2 into the value of the calculation*/
if(numbers2.length>=3){
numbers2.pop();
numbers2=[eval(numbers2.join(' '))]
numbers2.push(symbols);
}
}



//toggle button
const switcher=document.querySelector('.switch');
const toggleButton=switcher.firstElementChild;
/*Elements style that needs to be changed;

body: background-color;
title: color;
display-container: color and background-color;
grid-container: background-color
button: background-color
reset button:background-color
equal button:background-color
delete button:background-color
*/
const body=document.body;
const title=document.querySelector('.title');
const displayContainer=document.querySelector('.display-container');
const gridContainer=document.querySelector('.grid-container');
const resetButton=document.querySelector('#reset').firstElementChild;
const equalButton=document.querySelector('#equal').firstElementChild;

console.log(button[3]);

let switchNumber=parseInt(toggleButton.value); 
toggleButton.addEventListener('click', function(){
    //if clicked then add the value by one. Depending on where the value is at the color of the theme changes and the slider moves to a certain point based on the value
    switchNumber=switchNumber+1;

    if(switchNumber>3){
        switchNumber=1;
    }

    switch(switchNumber){
        case 1:
    body.style.backgroundColor="hsl(222, 26%, 31%)";
    title.style.color="whitesmoke";
    displayContainer.style.color="whitesmoke";
    displayContainer.style.backgroundColor="hsl(224, 36%, 15%)";
    gridContainer.style.backgroundColor="hsl(223, 31%, 20%)";
    button.style.backgroundColor="hsl(223, 31%, 20%)";
    resetButton.style.backgroundColor="hsl(225, 21%, 49%)";
    equalButton.style.backgroundColor="hsl(6, 63%, 50%)";
    button[3].style.backgroundColor="hsl(225, 21%, 49%)";
        break;
        case 2:
body.style.backgroundColor="hsl(0, 0%, 90%)";
    title.style.color="black";
    displayContainer.style.color="black";
    displayContainer.style.backgroundColor="hsl(0, 0%, 93%)";
    gridContainer.style.backgroundColor="hsl(0, 5%, 81%)";
     button.style.color="black";
    button.style.backgroundColor="hsl(185, 42%, 37%)";
    resetButton.style.backgroundColor="hsl(185, 42%, 37%)";
    equalButton.style.backgroundColor="hsl(25, 98%, 40%)";
    button[3].style.backgroundColor="hsl(225, 21%, 49%)";
        break;
        case 3:
body.style.backgroundColor="hsl(268, 75%, 9%)";
    title.style.color=" hsl(52, 100%, 62%)";
    displayContainer.style.color=" hsl(52, 100%, 62%)";
    displayContainer.style.backgroundColor="hsl(268, 71%, 12%)";
    gridContainer.style.backgroundColor="hsl(268, 71%, 12%)";
    button.style.color="hsl(52, 100%, 62%)";
    button.style.backgroundColor="hsl(281, 89%, 26%)";
    resetButton.style.backgroundColor="hsl(185, 42%, 37%)";
    equalButton.style.backgroundColor="hsl(25, 98%, 40%)";
    button[3].style.backgroundColor="red";
        break;
    }

    console.log(switchNumber);
})
