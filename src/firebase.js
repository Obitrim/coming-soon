import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCf7NWBxSE1uxPt_pNd8AxoaKmxuJhP5jQ",
	authDomain: "fear-women.firebaseapp.com",
	projectId: "fear-women",
	storageBucket: "fear-women.appspot.com",
	messagingSenderId: "449382942376",
	appId: "1:449382942376:web:2dd40f850c44b4163e249d",
	measurementId: "G-31QTTZ78E0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };