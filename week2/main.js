/*const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);

const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
console.log(avengers.length);
console.log(avengers[avengers.length - 1]);
console.log(avengers);
for(let i=0, max=avengers.length; i < max; i++){
    console.log(avengers[i]);
}
for(const value of avengers){
    console.log(value);
}

const romanNumerals = new Map();
romanNumerals.set(1,'I');
console.log(romanNumerals);
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(romanNumerals);
console.log(romanNumerals.get(4));
console.log(romanNumerals.has(5));
Array.from(romanNumerals);
console.log(romanNumerals);

const heroes = new Map([ ['Clark Kent','Superman'],['Bruce Wayne', 'Batman']]);
console.log(heroes.size);
heroes.delete('Clark Kent');
console.log(heroes.size);

const age = 12;
if (age < 18) {
    console.log('Sorry, you are not old enough to play this game');
}

const n = 12;
if (n%2 === 0) {
    console.log('n is an even number');
} else {
    console.log('n is an odd number');
}

const x = 5;
x%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number');

console.log(`n is a ${(n%2 === 0)? 'even' : 'odd'} number`);

let number = 2;

switch (number) {
    case 4:
    console.log('You rolled a four');
    break;
    case 5:
    console.log('You rolled a five');
    break;
    case 6:
    console.log('You rolled a six');
    break;
    default:
    console.log('You rolled a number less than four');
    break;
}

let bottles = 10;
while (bottles > 0){
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
    bottles--;
}

let bottles = 11;
while (--bottles){    
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
}

let bottles = 10;
do {    
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
    bottles--;
} while (bottles > 0)

for(let i=1 ; j<13 ; i++){
    for(let i=1 ; j<13 ; j++){
        console.log(`${j} multiplied by ${i} is ${i*j}`);
    }
}

const quiz = [    
    ["What is Superman's real name?","Clark Kent"],fff
    ["What is Wonder Woman's real name?","Diana Prince"],    
    ["What is Batman's real name?","Bruce Wayne"]
];

let score = 0 // initialize score

for(const [question,answer] of quiz){    
    const response = prompt(question);    
    if(response === answer){        
        alert('Correct!');        
        score++;    
    } else {        
        alert(`Wrong! The correct answer was ${answer}`);    
    }
}

alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);

function hello(){    
    console.log('Hello World!');
}
hello();

const goodbye = function(){    
    console.log('Goodbye World!');
};
goodbye();

seeya = goodbye;
seeya();

function square(x){    
    return x*x;
}

console.log(square(4.5));

function mean(...values) {    
    let total = 0;    
    for(const value of values) {       
        total += value;    
    }    
    return total/values.length;
}

console.log(mean(2,8,13,11,4,2));

function hello(name='World') {    
    console.log(`Hello ${name}!`);
}

hello();
hello("Sweet Mustang");

function discount(price, amount=10) {    
    return price*(100-amount)/100;
}

console.log(discount(20));

console.log(discount(15, 20));
*/

const quiz = [    
["What is Superman's real name?","Clark Kent"],    
["What is Wonder Woman's real name?","Diana Prince"],    
["What is Batman's real name?","Bruce Wayne"]
];
function start(quiz){    
    let score = 0;
    // main game loop    
    for(const [question,answer] of quiz){       
        const response = ask(question);        
        check(response,answer);    
    }    
    // end of main game loop

    gameOver();

    // function declarations    
    function ask(question){        
        return prompt(question);    }
    function check(response,answer){        
        if(response === answer){        
            alert('Correct!');        
            score++;        
        } else {        
            alert(`Wrong! The correct answer was ${answer}`);        
        }    
    }
    function gameOver(){        
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);    
        }
    }
    start(quiz);