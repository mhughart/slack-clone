import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyBS3SrK8bf_oeDs71MhhsNAkxhGweUT1pw',
	authDomain: 'slack-clone-323c3.firebaseapp.com',
	databaseURL: 'https://slack-clone-323c3.firebaseio.com',
	projectId: 'slack-clone-323c3',
	storageBucket: 'slack-clone-323c3.appspot.com',
	messagingSenderId: '881246900235',
	appId: '1:881246900235:web:6eb7acd188f0dfe195b70e',
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
