import  "./styles/index.scss";

const greetings = {
    hello: 1,
    bye: 2,
    hey: 3
};

const words = {
    ...greetings,
    food: 4,
    work: 5
};

console.log(greetings);
console.log(words);
