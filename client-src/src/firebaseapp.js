import firebase from 'firebase';
import config from './config';
const firebaseApp = firebase.initializeApp({
    "apiKey": config.apiKey,
    "databaseURL": config.databaseURL,
    "storageBucket": config.storageBucket,
    "authDomain": config.authDomain,
    "messagingSenderId": config.messagingSenderId,
    "projectId": config.projectId
});


export default firebaseApp;