// resolve and reject can only be called once and with one argument
// promises are usually created by the library, rare to create them yourself
const promise = new Promise((resolve, reject) => {
    // resolve('This is my resolved data')
    reject('Something went wrong!')
})

// .then runs after a promise is resolved
// .catch runs after a promise is rejected
promise.then((data) => {
    console.log(data)
}).then(() => {
    console.log('this is a chained promise that runs after the first then passes')
}).catch((error) => {
    console.log('error: ', error)
})

// .then could also take a second callback function as a replacement for .catch