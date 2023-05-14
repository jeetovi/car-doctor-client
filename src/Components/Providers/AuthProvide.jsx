import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../Firebase/firebaseConfig";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvide = ({children}) => {
    const [user , setUser] = useState([]);
    const [lodding, setLodding] = useState(true)

// create user
   const createUser =(email, password) => {
    return createUserWithEmailAndPassword(auth,email, password)
   }
// sign user
const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

const authInfo = {
         user,
         lodding,
         createUser,
         signInUser 
}

  return <AuthContext.Provider value={authInfo}>
{children}
  </AuthContext.Provider>;
};

export default AuthProvide;
