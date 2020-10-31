var fruits = ["banana","apple","grapes","papaya"];
var num = [1,2,3,4,5];

function myFunction(){
    if (fruits.length === 0) {
        document.getElementById('demo').innerHTML= '';
    }
   else {
        document.getElementById('demo').innerHTML= 'The Fruits Array is - ' + fruits;
   }
}
function fruitLength(){
    if (fruits.length === 0){
        document.getElementById('demo').innerHTML= '';
        document.getElementById('demo1').innerHTML= 'Oops! There are no fruits in your array';
    }
    else {
        document.getElementById('demo1').innerHTML= 'The length of Fruits Array is <strong>' + fruits.length + '</strong>';
    }
}
function myNum(){
    if (num.length === 0){
        document.getElementById('demo2').innerHTML= '';
    }
    else {
        document.getElementById('demo2').innerHTML= 'The Numbers Array is - ' + num;
    }
}
function numLength(){
    if (num.length === 0){
        document.getElementById('demo2').innerHTML= '';
        document.getElementById('demo3').innerHTML= 'Oops! There are no fruits in your array';
    }
    else {
        document.getElementById('demo3').innerHTML= 'The length of Numbers Array is <strong>' + num.length + '</strong>';
    }
    
}
function pushMango(){
    if (fruits.length >= 10){
        document.getElementById('demo').innerHTML= 'The Fruits Array is - ' + fruits;
        document.getElementById('demo4').innerHTML = 'You have exhausted limit!';
        fruitLength();
    }
    else{
        fruits.push('mango');
        document.getElementById('demo').innerHTML= 'The Fruits Array is - ' + fruits;
        fruitLength();
    }
}
function unshiftKiwi(){
    if (fruits.length >= 10){
        document.getElementById('demo').innerHTML= 'The Fruits Array is - ' + fruits;
        document.getElementById('demo4').innerHTML = 'You have exhausted limit!';
        fruitLength();
    }
    else { 
        fruits.unshift('kiwi');
        document.getElementById('demo').innerHTML='The Fruits Array is - ' + fruits;
        fruitLength();
    }
    
}
function shiftFruit(){
    if (fruits.length <= 11) {
        fruits.shift();
        document.getElementById('demo').innerHTML= 'The Fruits Array is - ' + fruits;
        document.getElementById('demo4').innerHTML = '';
        fruitLength();
    }
    else{
        fruits.shift();
        document.getElementById('demo').innerHTML= 'The Fruits Array is - ' +fruits;
        fruitLength();
    }
    
}
function popFruit(){
    if (fruits.length <= 11) {
        fruits.pop();
        document.getElementById('demo').innerHTML= 'The Fruits Array is - ' + fruits;
        document.getElementById('demo4').innerHTML = '';
        fruitLength();
    }
    else{
        fruits.pop();
        document.getElementById('demo').innerHTML= 'The Fruits Array is - ' +fruits;
        fruitLength();
    }
    
}
function pushSix(){
    if (num.length >= 10){
        document.getElementById('demo2').innerHTML= 'The Numbers Array is - ' + num;
        document.getElementById('demo5').innerHTML = 'You have exhausted limit!';
        numLength();
    }
    else{
        num.push('6');
        document.getElementById('demo2').innerHTML= 'The Numbers Array is - ' + num;
        numLength();
    }
}
function unshiftZero(){
    if (num.length >= 10){
        document.getElementById('demo2').innerHTML= 'The Numbers Array is - ' + num;
        document.getElementById('demo5').innerHTML = 'You have exhausted limit!';
        numLength();
    }
    else{
        num.unshift('0');
        document.getElementById('demo2').innerHTML= 'The Numbers Array is - ' + num;
        numLength();
    }
}
function shiftNum(){
    if (num.length <= 11){
        num.shift();
        document.getElementById('demo2').innerHTML= 'The Numbers Array is - ' + num;
        document.getElementById('demo5').innerHTML = '';
        numLength();
    }
    else {
        num.shift();
        document.getElementById('demo2').innerHTML='The Numbers Array is - ' +  num;
        numLength();
    }
    
}
function popNum(){
    if (num.length <= 11){
        num.pop();                  
        document.getElementById('demo2').innerHTML= 'The Numbers Array is - ' + num;
        document.getElementById('demo5').innerHTML = '';
        numLength();
    }
    else {
        num.pop();
        document.getElementById('demo2').innerHTML='The Numbers Array is - ' +  num;
        numLength();
    }
}