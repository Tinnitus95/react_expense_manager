// Object destucturing


// console.log('destructure');
//
// const person = {
//     name: 'Anonymous',
//     age: 22,
//     location: {
//         city: 'Stockholm',
//         temp: 100
//     }
// };
//
// const {name: firstName = 'Andrew', age} = person;
//
// console.log(`${firstName} is ${age}`);
//
// const {city, temp:temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: '12 rules for life',
//     author: 'john appleseed',
//     publisher: {
//
//     }
// };
//
// const { name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName)


//Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//
// const [, city, state = 'New york',] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [medium , ,price] = item;

console.log(`A medium ${medium} costs ${price}`);
