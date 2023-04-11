// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
   return cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}

function appendCat(name) {
    const newCats = [...cats, name]
    return newCats
}

function prependCat(name) {
    const prependCat = [name, ...cats]
    return prependCat;
}

function removeLastCat() {
    const removeLastCat = cats.slice(0, 2)
    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat = cats.slice(1)
    return removeFirstCat;
}   