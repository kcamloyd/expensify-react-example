import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBXYN4KJ_jfVpjZGRLo0hNx-TYVLAK-DTU",
    authDomain: "expensify-9d640.firebaseapp.com",
    databaseURL: "https://expensify-9d640.firebaseio.com",
    projectId: "expensify-9d640",
    storageBucket: "expensify-9d640.appspot.com",
    messagingSenderId: "630784450448"
  }

firebase.initializeApp(config)

const database = firebase.database()

// // subscribe to child added:
// // also calls function for all existing children
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(`${snapshot.key} was added.`)
// })

// // subscribe to child change:
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(`${snapshot.key} was changed`)
// })

// // subscribe to child removed event:
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(`${snapshot.key} was removed`)
// })

// // turn firebase list objects into React/Redux arrays:
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// })

// // Firebase .push - records a new object with a unique, automatically generated id:
// database.ref('list').push({
//     title: 'item 2',
//     body: 'this is another list item'
// })

// // read data one time:
// // pass event type ('value' in this case) to once()
// database.ref().once('value').then((snapshot) => {
//     console.log(snapshot.val())
// }).catch((e) => {
//     console.log('error fetching data', e)
// })

// // read data every time it changes:
// // can't use promises because they can only be run once
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('error with data fetching', e)
// })

// // cancel all subscriptions for a reference:
// database.ref().off()

// // cancel a particular subscription for a reference:
// // .on() returns the callback function, off must be called with the same function
// database.ref().off(onValueChange)

// // write and update data:
// database().ref().set({
//     name: 'Katie Loyd',
//     age: 31,
//     isSingle: false,
//     location: {
//         city: 'Greensboro',
//         state: 'North Carolina'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed.', e)
// })

// database.ref('isSingle')
//     .remove().then(() => {
//         console.log('data was removed')
//     }).catch((e) => {
//         console.log('data was not successfully removed', e)
//     })

// database.ref('isSingle').set(null)

// database.ref().update({
//     name: 'Katie Irene Loyd',
//     age: 10,
//     stressLevel: 6,
//     job: {
//         title: 'Web Developer',
//         company: 'RTI'
//     },
//     isSingle: null
// })

// // update nested objects:
// database.ref().update({
//     'job/company': 'Elon',
//     stressLevel: 2,
//     'location/city': 'Summerfield'
// })