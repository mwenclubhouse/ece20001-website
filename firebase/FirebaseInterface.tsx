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

    get storage() {
        return firebase.storage();
    }

    static get firestore() {
        return FirebaseInterface.shared.firestore;
    }

    static get storage() {
        return FirebaseInterface.shared.storage;
    }

    get database() {
        return firebase.database();
    }

    get db() {
        return firebase.firestore()
    }

    static get database() {
        return FirebaseInterface.shared.database;
    }

    static async getType() {
        const database = FirebaseInterface.shared.database;
        const type = await database.ref("type").once("value");
        return type.val();
    }

    static async getLectures() {
        const database = FirebaseInterface.shared.database;
        const type = await database.ref("ece20001").once("value");
        return type.val();
    }

    static async getRouteUid(ref) {
        const database = FirebaseInterface.shared.database;
        const type = await database.ref("ece20001/lectures/" + ref).once("value");
        return type.val();
    }

    static async getImageFromRef(ref) {
        const storage = FirebaseInterface.shared.storage;
        return await storage.ref(ref).getDownloadURL();
    }


}
FirebaseInterface.shared = new FirebaseInterface();
export default FirebaseInterface

