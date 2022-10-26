import { createContext, useState } from "react";



export const AuthContext = createContext() ;    ///// Let, AuthContext is defined as the name of Context API


const AuthProvider = ({ children }) => {                          ///// AuthProvider is the component that used to process Data and make it ready to share as Context API.  
    const [user , setUser] = useState(null);
                                                                     //   AuthContext.Provider shares the Data by value={} to its child elements.  
    return (
     <AuthContext.Provider value={{user , setUser }}>                
        { children }
    </AuthContext.Provider>
    );
}; 

export default AuthProvider ;