document.getElementById("submit").onclick = function(){
    let temp = document.getElementById("temp").value;
    temp = Number(temp)
    console.log("here");
    if(document.getElementById("celsius").checked){
        temp = toCelsius(temp);
        document.getElementById("output").innerHTML = temp +"°C";
    }
    else if(document.getElementById("fahrenheit").checked){
        temp = toFahrenheit(temp);
        document.getElementById("output").innerHTML = temp +"°F";
    }
    else{

        document.getElementById("output").innerHTML = "Select an unit";
    }
}
function toCelsius(temp){
    return (temp-32)*(5/9);
}
function toFehrenheit(temp){
    return temp*9/5 +32;
}