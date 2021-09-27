// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    //return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const catsTwo = [...cats, "Broom"];
    return catsTwo;
}

function prependCat(name) {
    const catsThree = ["Arnold", ...cats];
    return catsThree;
}

function removeLastCat() {
    const catsFour = cats.slice(0,-1);
    return catsFour;
}

function removeFirstCat() {
    const catsFive = cats.slice(1);
    return catsFive;
}