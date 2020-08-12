import firebase from  'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDukoYPrSlXoao0o2o6qbkgn-7-6vFFujY",
    authDomain: "slack-clone-fefe4.firebaseapp.com",
    databaseURL: "https://slack-clone-fefe4.firebaseio.com",
    projectId: "slack-clone-fefe4",
    storageBucket: "slack-clone-fefe4.appspot.com",
    messagingSenderId: "294006426553",
    appId: "1:294006426553:web:d020dc6b52e9a9a0c84468",
    measurementId: "G-GW2HXHV1N9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth,provider}
  export default db;