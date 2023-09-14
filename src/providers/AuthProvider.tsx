import React, { useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = React.createContext({
  user: {} as User | null,
  googleSignIn: () => {},
  logOut: () => {},
});

type ContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  const value = {
    user,
    googleSignIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };
