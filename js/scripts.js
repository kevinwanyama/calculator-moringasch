jQuery('h1').click(function(){
    alert("This is a heading tag")
});
var add = function(number1, number2){
    return number1 + number2;
};
var substract = function(number1, number2){
    return number1 - number2;
};
var multiply = function(number1, number2){
    return number1 * number2;
};
var divide = function(number1, number2){
    return number1 / number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var results = divide(number1, number2);
alert(results);
