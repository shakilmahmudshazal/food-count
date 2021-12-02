import * as firebase from 'firebase';
//const 

const config = {
  apiKey: "AIzaSyCzFkfDGy0EfakSGY64GnvFhnHEqS_jW8c",
  authDomain: "foodcount-7d19e.firebaseapp.com",
  databaseURL: "https://foodcount-7d19e-default-rtdb.firebaseio.com",
  projectId: "foodcount-7d19e",
  storageBucket: "foodcount-7d19e.appspot.com",
  messagingSenderId: "740771838193",
  appId: "1:740771838193:web:cdb175252d422067559150",
  measurementId: "G-F3PRBGZN2M"
};

//test
// const config = {
//   apiKey: "AIzaSyC4UHnUgrD70jh_zbyWg93u8TIy8U3uQgI",
//   authDomain: "test-d0194.firebaseapp.com",
//   databaseURL: "https://test-d0194.firebaseio.com",
//   projectId: "test-d0194",
//   storageBucket: "test-d0194.appspot.com",
//   messagingSenderId: "487345387045",
//   appId: "1:487345387045:web:d83bae8c6ad5ec1c51f1cc",
//   measurementId: "G-E5ZVNH0P29"
// };



// production
// const config = {
//   apiKey: "AIzaSyApbSlpzYw_yvIFUdO0CtZFn45IZ47VcVg",
//   authDomain: "foodcount-e830c.firebaseapp.com",
//   databaseURL: "https://foodcount-e830c.firebaseio.com",
//   projectId: "foodcount-e830c",
//   storageBucket: "foodcount-e830c.appspot.com",
//   messagingSenderId: "594386529430",
//   appId: "1:594386529430:web:f3e0787f914242b87966b7",
//   measurementId: "G-K5K7S08KTJ"
// };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });






// // database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // });

// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // })

// // Setup data sub -> Andrew is a Software Developer at Amazon.

// // Change the data and make sure it reprints

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Andrew Mead',
// //   age: 26,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Philadelphia',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Data is saved!');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log('Did not remove data', e);
// //   });
