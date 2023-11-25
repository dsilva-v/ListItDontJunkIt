import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBot3W_UDIfKznqE54iS5cbF_Xx01hUX0k",
  authDomain: "fir-practise-project.firebaseapp.com",
  databaseURL: "https://fir-practise-project.firebaseio.com",
  projectId: "fir-practise-project",
  storageBucket: "fir-practise-project.appspot.com",
  messagingSenderId: "563511217677",
  appId: "1:563511217677:web:eea4890e06b834c4258f44"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth}