import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB8Oe7LiUhJL6aACXChLuy_gGKl6AoEqlg",
    authDomain: "auth-development-setup.firebaseapp.com",
    projectId: "auth-development-setup",
    storageBucket: "auth-development-setup.appspot.com",
    messagingSenderId: "263591982006",
    appId: "1:263591982006:web:22eb5fbe66a45997cd4717",
    measurementId: "G-VX1J5LFKV7"
})

export const auth = app.auth()
export default app;
