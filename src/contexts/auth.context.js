import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, signInWithPopup, updateProfile } from "firebase/auth";
import  app  from "../firebase/firebase.init.js";



export const AuthContext = createContext() ;    ///// Let, AuthContext is defined as the name of Context API

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider() ;

// Get name , email , password from register.jsx component and send them to Firebase Authentication to Create a new user Account. 

////////Create User ///////
// const createUser = (email, password) =>{
//         return createUserWithEmailAndPassword(auth, email, password);
// }

// /////// Update Name /////////
// const updateName = (name) =>{
//     return updateProfile(auth.currentUser, { displayName: name }); 
// }

// /////// Email Verify ///////
// const verifyEmail = () =>{
//      return  sendEmailVerification(auth.currentUser)
// }


//////// Google Sign In ///////

const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
}




const AuthProvider = ({ children }) => {  ///// AuthProvider is the component that used to process Data and make it ready to share as Context API.  
  
    const [user , setUser] = useState(null);

     
    // Get name , email , password from register.jsx component and send them to Firebase Authentication to Create a new user Account. 

////////Create User ///////
const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

/////// Update Name /////////
const updateName = (name) =>{
return updateProfile(auth.currentUser, { displayName: name }); 
}

/////// Email Verify ///////
const verifyEmail = () =>{
 return  sendEmailVerification(auth.currentUser)
}





                                                                     //   AuthContext.Provider shares the Data by value={} to its child elements.  
    return (
     <AuthContext.Provider value={{user , setUser , createUser, updateName , verifyEmail , signInWithGoogle }}>                
        { children }
    </AuthContext.Provider>
    );
}; 

export default AuthProvider ;