// 
// OBJECT DESTRUCTURING 
// 

// const person = {
//     name: 'Katie',
//     age: 31,
//     location: {
//         city: 'Greensboro',
//         temp: 64
//     }
// }

// // name = 'anonymous' sets default value for the variable
// const { name = 'anonymous', age } = person

// // console.log(`${person.name} is ${person.age}.`)
// console.log(`${name} is ${age}.`)

// // if (person.location.city && person.location.temp) {
// //     console.log(`It's ${person.location.temp} in ${person.location.city}.`)
// // }

// // temp: temperature - uses a different name for the variable than the original object property key
// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'The Secret Garden',
//     author: 'Francis Hodgson Burnett',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)


// 
// ARRAY DESTRUCTURING
// 

// const address = ['5710 Arringdon Park Dr', 'Morrisville', 'North Carolina', '27560']

// const [street, city, state = 'New York', zip] = address
// // To only create variables that you're using:
// // const [, city, state] = address

// // console.log(`You are in ${address[1]}, ${address[2]}.`)
// console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}.`)