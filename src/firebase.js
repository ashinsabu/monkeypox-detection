import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBEpfdBrvNBn2ulFH95VV436bYZL3a-OjM",
    authDomain: "monkeypox-detection-2bccd.firebaseapp.com",
    projectId: "monkeypox-detection-2bccd",
    storageBucket: "monkeypox-detection-2bccd.appspot.com",
    messagingSenderId: "205269813004",
    appId: "1:205269813004:web:c03e9af702937dd7b92b29",
    measurementId: "G-W552DHHGK9"
  };
const app = firebase.initializeApp(firebaseConfig);
firebase.getAnalytics(app);

export default firebase;
// to add features https://stackoverflow.com/questions/48492047/where-do-i-initialize-firebase-app-in-react-application
// https://stackoverflow.com/questions/51011486/initializing-firebase-cli-features-in-an-existing-firebase-project-directory
// deploy command firebase deploy --only hosting:monkeypoxdetect