import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import  app  from "../firebase/firebase.init.js";
import { toast } from "react-toastify";



export const AuthContext = createContext() ;    ///// Let, AuthContext is defined as the name of Context API

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider() ;





const AuthProvider = ({ children }) => {  ///// AuthProvider is the component that used to process Data and make it ready to share as Context API.  
  
    const [user , setUser] = useState({});

     
    // Get name , email , password from register.jsx component and send them to Firebase Authentication to Create a new user Account. 

////////Create User ///////
const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

/////// Update Name /////////
const updateName = (name) =>{
return updateProfile(auth.currentUser, { displayName: name   }); 
}

/////// Email Verify ///////
const verifyEmail = () =>{
 return  sendEmailVerification(auth.currentUser)
}

//////// Google Sign In ///////

const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
}


/////////// Log Out ////////////////////
 const logout = () =>{
    return signOut(auth);
 } 


////////// Log In With Email & Password ////////////
const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
} 


///////// Forget Password /////////////
   const resetPassword = (email) =>{
       return sendPasswordResetEmail(auth, email)
   }




    useEffect(()=>{

     //This block of code will be executed when the component is mounted.
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })

        return ()=>{
           //This block of code will be execute when the component is unmounted.
             unsubscribe();   
          }
    },[])



                                                                     //   AuthContext.Provider shares the Data by value={} to its child elements.  
    return (
     <AuthContext.Provider value={{user , setUser , createUser, updateName , verifyEmail , signInWithGoogle, logout , signIn , resetPassword }}>                
        { children }
    </AuthContext.Provider>
    );
}; 

export default AuthProvider ;