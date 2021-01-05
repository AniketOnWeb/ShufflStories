import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/analytics";
import "firebase/remote-config";
import "babel-polyfill";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APREACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }

  submitStory(response) {
    return app
      .firestore()
      .collection("Projects")
      .add(response)
      .then((res) => {
        // console.log("Document written with ID: ", res.id);
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
      });
  }
}

export default new Firebase();
