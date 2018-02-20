const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const firebaseApp = firebase.initializeApp( functions.config().firebase );

const postRef = firebaseApp.database().ref('posts')

const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({message: 'Welocme to API'})
})

app.get('/api/hello', (req, res) => {
    res.json({message: 'Hello'})
})

// get posts

app.get('/api/posts', (req, res) => {
    postRef.once('value')
        .then(snap => res.json(snap.val()))
})

// Create new post

app.post('/api/posts', (req, res) => {
    postRef.push({title: req.body.title,body: req.body.body})
        .then(data => {

            res.json({message: 'Yep! post created successfully!'})

        })
})

exports.app = functions.https.onRequest(app);
