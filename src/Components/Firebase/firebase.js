import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/analytics";
import "firebase/remote-config";
import "babel-polyfill";

const config = {
  apiKey: "AIzaSyAKm2FbTsGx3syCeDcQjgLuwPsurpzWZOs",
  authDomain: "shuffl-c277b.firebaseapp.com",
  databaseURL: "https://shuffl-c277b.firebaseio.com",
  projectId: "shuffl-c277b",
  storageBucket: "shuffl-c277b.appspot.com",
  messagingSenderId: "778145343796",
  appId: "1:778145343796:web:cbf5bb74eb745a1fc71d61",
  measurementId: "G-96W0DF17L3",
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
