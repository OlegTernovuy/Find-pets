import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Form } from "../layout/Form";
import { IForm, IFormProps } from "../../types/models";

export const SignUpPage = () => {
  //Google authentication
  const navigate = useNavigate();

  const { emailAndPasswordSignUp } = useContext(AuthContext);

  //Email and Password authentication

  const handlSignUpEmailAndPassword = async (data: IForm) => {
    try {
      await emailAndPasswordSignUp(data);
      window.alert("successfully registered");
      navigate("/");
    } catch (error) {
      window.alert(error);
    }
  };

  const signUpText: IFormProps = {
    buttonText: "Sign Up",
    haveAccount: "Have an account",
    haveAccountText: "Sign In",
    haveAccountLink: "/signIn",
    EmailAndPasswordAuth: handlSignUpEmailAndPassword,
  };

  return (
    <Form
      buttonText={signUpText.buttonText}
      haveAccount={signUpText.haveAccount}
      haveAccountText={signUpText.haveAccountText}
      haveAccountLink={signUpText.haveAccountLink}
      EmailAndPasswordAuth={signUpText.EmailAndPasswordAuth}
    />
  );
};
