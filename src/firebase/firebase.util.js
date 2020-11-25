import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGpkpbQvua341WPJbxwMQd-9BhK32-L4E",
  authDomain: "crown-db-b1ba0.firebaseapp.com",
  databaseURL: "https://crown-db-b1ba0.firebaseio.com",
  projectId: "crown-db-b1ba0",
  storageBucket: "crown-db-b1ba0.appspot.com",
  messagingSenderId: "596585520858",
  appId: "1:596585520858:web:81d6a16cddc56be6d84fe3",
  measurementId: "G-PLPJ6EBBZG",
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;