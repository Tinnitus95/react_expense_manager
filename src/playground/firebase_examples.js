// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
//
// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
//
// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     }).catch((e) => {
// //         console.log('Something went wrong', e);
// //     })
//
// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })
// //         console.log(expenses);
// //     })
// //
//     // setTimeout(() => {
//     //     database.ref('expenses').push({
//     //         description: 'Rent',
//     //         note: 'Paid in full',
//     //         amount: 8500,
//     //         createdAt: 12381293
//     //     })
//     // }, 3500)
//
//
//
//
//
//
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     const user = snapshot.val();
// //     console.log(user);
// //     console.log(`${user.name} is a ${user.job.title} at ${user.job.company}`);
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // })
//
// //
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // })
// //
//
// // setTimeout(() => {
// //     database.ref().off('value', onValueChange);
// // }, 7000)
// //
// //
// //
// // setTimeout(() => {
// //     database.ref('age').set(22);
// // }, 10500)
//
//
//
// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }).catch((e) => {
// //         console.log('Error fetching data', e);
// //     })
//
// // database.ref().set({
// //     name: 'Oscar Fredriksson',
// //     age: 22,
// //     stressLevel: 9001,
// //     job: {
// //         title: 'Web Developer',
// //         company: 'Netflix'
// //     },
// //     isSingle: false,
// //     location: {
// //         city: 'Stockholm',
// //         country: 'Sweden'
// //     }
// //
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log('This failed', e);
// // });
// //
// // database.ref().update({
// //     stressLevel: 9,
// //     'location/city': 'Seattle',
// //     'job/company': 'Amazon'
// // });
//
// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log('Data was removed');
// //     }).catch((e) => {
// //         console.log('Data was not removed', e);
// //     })
