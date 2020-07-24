import React from "react";
import firebase from 'firebase/app';

function Signin() {

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      console.log('Successfully signed up!');
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      console.log('Successfully signed in!');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log('Successfully signed out!');
    }).catch(function(error) {
      console.log(error.message);
    })
  }
}