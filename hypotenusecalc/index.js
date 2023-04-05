let a;
let b;
let c;

document.getElementById("Mybutton").onclick =  function(){
    a = Number(document.getElementById(("sidea")).value);
    b = Number(document.getElementById(("sideb")).value);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("output").innerHTML = "The hypotenuse is " + c;
}