import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCQAX5aK7sTlX1372PzrXPRU6al4UtkUbE',
  authDomain: 'my-projects-for-portfolio.firebaseapp.com',
  projectId: 'my-projects-for-portfolio',
  storageBucket: 'my-projects-for-portfolio.appspot.com',
  messagingSenderId: '583777165137',
  appId: '1:583777165137:web:45dfddbfb4e4978299fd70',
  measurementId: 'G-3QBVH3BDXJ',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
