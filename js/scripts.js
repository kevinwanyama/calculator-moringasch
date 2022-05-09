// jQuery('h1').click(function(){
//     alert("This is a heading tag")
// });
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

$(document).ready (function(){
$("form#add").submit(function(event) {
event.preventDefault();
var number1 = parseInt($("#add1").val());
var number2 = parseInt($("#add2").val());
// var results = divide(number1, number2);
var result = (add(number1, number2));
$("#output").text(result);
});
});

