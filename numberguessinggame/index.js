const answer = Math.floor(Math.random()*10 +1)
let guesses = 0;
console.log("link");
document.getElementById("subbtn").onclick = function(){
    let guess = document.getElementById("guess").value;
    guesses+=1
    if (guess == answer){
        alert (`Guess is correct. The answer was ${answer} and it took you ${guesses} tries`);
    }
    else if(guess < answer){
        alert("Too small");
    }
    else{
        alert("too large");
    }
}