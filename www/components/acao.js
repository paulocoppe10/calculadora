var display = "";
var n1 = 0;
var n2 = 0;
var ope = "";
$(document).on('click', '#numeros', function(){
var n = $(this).html();
display +=n;
$('#display').html(display);
});
function CE(){
  display = "";
$('#display').html(0);
}
$(document).on('click', '#ce', function(){
$('#display').html("0");
CE();
});

$(document).on('click', '#modo', function(){
n1 = display;
ope = $(this).html();
CE();
});
$(document).on('click', '#resultado', function(){
n2 = display;
var calculo = 0;
if (modo == "+"){
calculo = parseFloat(n1)+parseFloat(n2);
$('#display').html(calculo);
}

if (modo == "-"){
calculo = parseFloat(n1)-parseFloat(n2);
$('#display').html(calculo);
}

if (modo == "x"){
calculo = parseFloat(n1).parseFloat(n2);
$('#display').html(calculo);
}

if (modo == "%"){
calculo = parseFloat(n1)/parseFloat(n2);
$('#display').html(calculo);
}

display = calculo;
});