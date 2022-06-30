import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAxvoNRlmyKAgpXP7y3tZQDiVuUp8d2anE",
    authDomain: "mundofinanciero-a35b2.firebaseapp.com",
    projectId: "mundofinanciero-a35b2",
    storageBucket: "mundofinanciero-a35b2.appspot.com",
    messagingSenderId: "851189565834",
    appId: "1:851189565834:web:d6eda723817e3c44f36073",
    measurementId: "G-5MP4K22M4K"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)

  export const auth = getAuth(app)