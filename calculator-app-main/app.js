//first list of array numbers and conver it into a whole number
const button=document.querySelectorAll('.button');
const displayNumbers=document.querySelector('.number-placeholder')
console.log(displayNumbers);
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
