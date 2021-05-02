import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';

const firebaseConfig = {
    apiKey: "AIzaSyDir4hP9Pjza7PMyl05knI7B-vTg6GKeLs",
    authDomain: "ecomm-clothing-1656e.firebaseapp.com",
    projectId: "ecomm-clothing-1656e",
    storageBucket: "ecomm-clothing-1656e.appspot.com",
    messagingSenderId: "110510924564",
    appId: "1:110510924564:web:d754ad154e08e7117f5801",
    measurementId: "G-GNHM0M1GPZ"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) 
        return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) { //create user data if doesn't exist
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);

        }

    }
    return userRef;
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;