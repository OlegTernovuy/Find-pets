import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";

import { object, string } from "yup";
import { useFormik } from "formik";

import FPLogo from "../../assets/logo.jpg";
import GoogleLogo from "../../assets/googleLogo.png";
import AppleLogo from "../../assets/appleLogo.png";
import GitHubLogo from "../../assets/gitHubLogo.png";

import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Link, useNavigate } from "react-router-dom";
import { IFormProps } from "../../types/models";
import { AuthContext } from "../../providers/AuthProvider";

export const Form = ({
  buttonText,
  haveAccount,
  haveAccountText,
  haveAccountLink,
  EmailAndPasswordAuth,
}: IFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = object({
    email: string().email("Enter a valid email").required("Email is required"),
    password: string()
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      EmailAndPasswordAuth(formik.values);
    },
  });

  return (
    <div className="bg-blue rounded-md w-96 flex mx-auto my-[5%] p-8  flex-col ">
      <div className="flex justify-around items-center mb-8">
        <img
          src={FPLogo}
          alt="Logo"
          className="mix-blend-darken"
          width="100"
          height="100"
        />
        <p className="text-[#2f3651] text-2xl">Find Pets</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col mb-5">
          <label className="text-lg">Email</label>
          <TextField
            id="email"
            name="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineOutlinedIcon />
                </InputAdornment>
              ),
            }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-lg">Password</label>
          <TextField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HttpsOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <button
          className="h-12 bg-[#2f3651] text-white w-full rounded-md text-lg hover:text-blue mb-8"
          type="submit"
        >
          {buttonText}
        </button>
        <div className="mb-5 text-center">
          <p className="mb-2">You can connect with</p>
          <div className="flex justify-center">
            <img
              src={GoogleLogo}
              alt="GoogleLogo"
              height={50}
              width={50}
              className="hover:cursor-pointer"
              onClick={handleSignIn}
            />
            <img
              src={AppleLogo}
              alt="AppleLogo"
              height={50}
              width={80}
              className="hover:cursor-pointer"
            />
            <img
              src={GitHubLogo}
              alt="GitHubLogo"
              height={50}
              width={80}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
        <p className="flex justify-center">
          {haveAccount}
          <Link to={haveAccountLink} className="text-orange-400 ml-3">
            {haveAccountText}
          </Link>
        </p>
      </form>
    </div>
  );
};
