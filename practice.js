function sum() {
    const a = Number.parseInt(prompt("Give a number!"), 10);
    const b = Number.parseInt(prompt("Give another number!", 10))
    return console.log (a + b);
}
sum();

function multiply () {
    return console.log (a * b);
}

multiply ();

function getCharCount() {
    let names = String(prompt("What are your names?"));
    return console.log(names.length);
}
getCharCount(); 

function shoutMyName() {
    return console.log(names.toUpperCase());
}
shoutMyName();

function lowerName() {
    return console.log(names.toLowerCase());
}
lowerName();

function getFirstCharacter() {
    return console.log(names[0]);
}
getFirstCharacter();

function getLastCharacter() {
    return console.log(names[names.length - 1]);
}
getLastCharacter();

function skipFirstCharacter() {
    return console.log(names.substring(1));
} 
skipFirstCharacter();
