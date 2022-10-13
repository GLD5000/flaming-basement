const firebaseConfig = {
  apiKey: "AIzaSyCEm6dnpThXzgVIUBg_phBPZtyb1l9y9hM",
  authDomain: "first-project-8b0b2.firebaseapp.com",
  projectId: "first-project-8b0b2",
  storageBucket: "first-project-8b0b2.appspot.com",
  messagingSenderId: "955240141201",
  appId: "1:955240141201:web:976a37b4542930a5300a30",
  measurementId: "G-GG8XMFCT2T",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const elements = {};
elements.array = [
  "signInBtn",
  "signOutBtn",
  "whenSignedIn",
  "whenSignedOut",
  "userDetails",
  "thingslist",
  "createThing",
];

elements.array.forEach((elementName) => {
  elements[elementName] = document.getElementById(elementName);
});

elements.signInBtn.onclick = () => auth.signInWithPopup(provider);
elements.signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged((user) => {
  if (user) {
    elements.whenSignedIn.hidden = false;
    elements.whenSignedOut.hidden = true;
    elements.userDetails.innerHTML = `Welcome ${user.displayName}!`;
  } else {
    elements.whenSignedIn.hidden = true;
    elements.whenSignedOut.hidden = false;
  }
});

const db = firebase.firestore();
let dbLocationReference = db.collection("stuff");
let unsubscribe;
auth.onAuthStateChanged((user) => {
  if (user) {
    elements.createThing.onclick = () => {
      let docRef = dbLocationReference.doc();
      docRef.set({
        uid: user.uid,
        name: `test${Math.random().toFixed(5)}`,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    };
  }
});
