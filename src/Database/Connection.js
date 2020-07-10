import firebase from 'firebase';
import apiKey from './apiKey';

const firebaseConfig = {
  apiKey: "AIzaSyCXYLU2pq-LR7LrTW3KpA1Tmvc8FhbWcY4",
  authDomain: "saudenahorapma.firebaseapp.com",
  databaseURL: "https://saudenahorapma.firebaseio.com",
  projectId: "saudenahorapma",
  storageBucket: "saudenahorapma.appspot.com",
  messagingSenderId: "491340321782",
  appId: "1:491340321782:web:10b44afaf898452147add7"
};


class Firebase{
  constructor(){
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  logar(email,password){
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  logout(){
    return this.auth.signOut();
  }

}



export default new Firebase();

