const fs = require('fs')


let person = {
    name: 'Daniel',
    age: 27
};

const personJSON = JSON.stringify(person);


fs.writeFileSync('person.json', personJSON);

// console.log(personJSON);

let dateBuffer = fs.readFileSync('person.json');
// console.log(dateBuffer);


// let dataJSON = dateBuffer.toString();


let data = JSON.parse(dataJSON)

console.log(data)