import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
  arrayUnion,
  query,
  where,
  Timestamp,
  addDoc,
  arrayRemove,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjFzwMjtsRNg7RMADtzhmc2u0DiLCRpbc",
  authDomain: "kpop-a-month.firebaseapp.com",
  projectId: "kpop-a-month",
  storageBucket: "kpop-a-month.appspot.com",
  messagingSenderId: "597317334729",
  appId: "1:597317334729:web:2d6f29e7fe60622a133f18",
  measurementId: "G-DCZ6ZVTSCM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);

export const initFirebase = () => {
  try {
    app;
    console.log("Firebase was successfully init.");
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error("Firebase initialization error", err.stack);
    }
  }
};

const db = getFirestore();

export const saveStory = (value) => {
  console.log("saveStory", value);
  const save = async (value) => {
    console.log(value.postID); // 270
    const docRef = doc(db, "Kpop-chatbroad", `${value.postID}`); //doc(db, "collection", "document target");
    // const docSnap = await getDoc(docRef);
    await setDoc(docRef, {
      ...value,
    });
  };
  save(value);
};

export const getStory = async () => {
  console.log("getStory");
  const allPost =[]
  const chatbroad = collection(db, 'Kpop-chatbroad');
  const querySnapshot = await getDocs(chatbroad);
 
  querySnapshot.forEach((doc) => {
    const postData = doc.data()
    allPost.push(postData)
    // const x =  Object.keys(userFavObj).filter(i => userFavObj[i].userId === userID).reduce( (res, key) => (res[0] = userFavObj[key], res), {} )
    // const newArray = appendObjTo(allPost, doc.data());
    
    // console.log(doc.id, " => ", doc.data());
  });
  console.log(" => ", allPost);
  return allPost
};
