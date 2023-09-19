import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Form } from "../layout/Form";
import { IForm, IFormProps } from "../../types/models";

export const SignInPage = () => {
  //Google authentication
  const navigate = useNavigate();

  const { emailAndPasswordSignIn } = useContext(AuthContext);

  //Email and Password authentication

  const handlSignInEmailAndPassword = async (data: IForm) => {
    try {
      await emailAndPasswordSignIn(data);
      window.alert("successfully login");
      navigate("/");
    } catch (error) {
      window.alert(error);
    }
  };

  const signInText: IFormProps = {
    buttonText: "Sign In",
    haveAccount: "Don`t have an account",
    haveAccountText: "Sign Up",
    haveAccountLink: "/signUp",
    EmailAndPasswordAuth: handlSignInEmailAndPassword,
  };

  return (
    <Form
      buttonText={signInText.buttonText}
      haveAccount={signInText.haveAccount}
      haveAccountText={signInText.haveAccountText}
      haveAccountLink={signInText.haveAccountLink}
      EmailAndPasswordAuth={signInText.EmailAndPasswordAuth}
    />
  );
};
