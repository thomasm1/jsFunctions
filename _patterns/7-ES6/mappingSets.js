const question = new Map();
question.set('question', 'What is the latest JS version??');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES8');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :)');

question.set(false, 'Wrong-o, sorry!');

console.log(question.get('question'));
console.log(question.size);

if(question.has(4)) {
    //question.delete(4);
    console.log('answer 4 is here...')
}
// question.clear()

question.forEach((value, key) =>
console.log(`this is ${key}, and its set to value ${value}`));

for (let [key, value] of 
question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}:
        ${value}`);
    }
}  