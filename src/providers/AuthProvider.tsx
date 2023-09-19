import React, { useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { IForm } from "../types/models";

export const AuthContext = React.createContext({
  user: {} as User | null,
  googleSignIn: () => {},
  emailAndPasswordSignUp: (data: IForm) => {},
  emailAndPasswordSignIn: (data: IForm) => {},
  logOut: () => {},
});

type ContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const emailAndPasswordSignUp = async (data: IForm) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      throw error as Error;
    }
  };

  const emailAndPasswordSignIn = async (data: IForm) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      throw error as Error;
    }
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
    emailAndPasswordSignUp,
    emailAndPasswordSignIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };
