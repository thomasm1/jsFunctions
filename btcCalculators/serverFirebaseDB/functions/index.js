const functions = require('firebase-functions');

// // https://firebase.google.com/docs/functions/write-firebase-functions

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.sendMessage = functions.firestore
    .document('users/{id}')
    .onCreate(event => {
        const userId = event.params.id;
        const name = event.data.data().name;
        const userRef = admin.firestore().collection('users').doc(userId)

        return userRef.update({ message: `Welcome ${name}! ..Your Analytics Armchair is officially yours!` })
    });

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Default Messaging ...");
// });