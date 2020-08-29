import * as firebase from "firebase";

function getFirebaseKey() {

    return {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };
}

class FirebaseInterface {
    static shared: FirebaseInterface;

    constructor() {
        if (!firebase.apps.length) {
            const config = getFirebaseKey();
            firebase.initializeApp(config)
        }
    }

    get firestore() {
        return firebase.firestore();
    }

    static get firestore() {
        return FirebaseInterface.shared.firestore;
    }

    get database() {
        return firebase.database();
    }

    static get database() {
        return FirebaseInterface.shared.database;
    }

}
FirebaseInterface.shared = new FirebaseInterface();
export default FirebaseInterface

