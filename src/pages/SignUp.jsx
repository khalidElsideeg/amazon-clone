import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { MdPlayArrow } from "react-icons/md";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";

const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  // input state
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  // error state
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrpassword] = useState("");
  const [errCpassword, setErrCpassword] = useState("");
  const [firebaseError, setFirebaseError] = useState("");

  // loading state
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // validationPatern
  const validationPatern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //   handle state function
  const handleClientName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrpassword("");
  };
  const handleCpassword = (e) => {
    setCpassword(e.target.value);
    setErrCpassword("");
  };

  //   Email validation
  const emailValidation = (email) => {
    return String(email).toLowerCase().match(validationPatern);
  };

  //   handle submit function
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your name");
    }
    if (!email) {
      setErrEmail("Enter your email or mobile phone number");
      setFirebaseError("");
    } else {
      if (!emailValidation(email)) {
        setErrEmail(
          "Wrong or invalid email or mobile phone number. Please correct and try again."
        );
      }
    }
    if (!password) {
      setErrpassword("Enter your password");
    } else {
      if (password.length < 6) {
        setErrpassword("Minimum 6 characters requierd");
      }
    }
    if (!cPassword) {
      setErrCpassword("Confirm your password");
    } else {
      if (cPassword !== password) {
        setErrCpassword("Password not matched");
      }
    }
    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cPassword &&
      cPassword === password
    ) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: clientName,
          });

          // Signed up
          const user = userCredential.user;
          setLoading(false);
          setSuccessMsg("Account Created Successfully!");
          setTimeout(() => {
            navigate("/signin");
          }, 2000);
          // ...
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseError("Email Alraedy in use! Please try anther one");
          }
          // ..
        });

      setClientName("");
      setEmail("");
      setPassword("");
      setCpassword("");
      setFirebaseError("");
    }
  };
  return (
    <div className="pt-4 w-full">
      <div className="w-full bg-gray-100 pb-8">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <Link to={"/"}>
            <img
              src={"https://logo-base.com/logo/amazon-logo.png"}
              alt="amazon-logo"
              className="w-28 pb-4"
            />
          </Link>
          <div className="w-full border border-zinc-300 p-6 rounded-md">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create account
            </h2>
            <div className="flex flex-col gap-3 font-titleFont">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Your name</p>
                <input
                  type="text"
                  value={clientName}
                  placeholder="First and last name"
                  onChange={handleClientName}
                  className="input placeholder:text-sm"
                />
                {errClientName && (
                  <p className="text-red-600 text-xs font-semibold flex items-center gap-2 -mt-1.5 tracking-wide animate-bounce">
                    <span className="font-extrabold italic text-base font-titleFont">
                      !
                    </span>
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Email or mobile number</p>
                <input
                  type="email"
                  value={email}
                  placeholder="example@gmail.com"
                  onChange={handleEmail}
                  className="input placeholder:text-sm"
                />
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold flex items-center gap-2 -mt-.5 tracking-wide animate-bounce">
                    <span className="font-extrabold italic text-base font-titleFont">
                      !
                    </span>
                    {errEmail}
                  </p>
                )}
                {firebaseError && (
                  <p className="text-red-600 text-xs font-semibold flex items-center gap-2 -mt-.5 tracking-wide animate-bounce">
                    <span className="font-extrabold italic text-base font-titleFont">
                      !
                    </span>
                    {firebaseError}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Password</p>
                <input
                  type="password"
                  value={password}
                  placeholder="At least 6 characters"
                  onChange={handlePassword}
                  className="input placeholder:text-sm"
                />
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold flex items-center gap-2 -mt-1.5 tracking-wide animate-bounce">
                    <span className="font-extrabold italic text-base font-titleFont">
                      !
                    </span>
                    {errPassword}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Re-enter password</p>
                <input
                  type="password"
                  value={cPassword}
                  onChange={handleCpassword}
                  className="input"
                />
                {errCpassword && (
                  <p className="text-red-600 text-xs font-semibold flex items-center gap-2 -mt-1.5 tracking-wide animate-bounce">
                    <span className="font-extrabold italic text-base font-titleFont">
                      !
                    </span>
                    {errCpassword}
                  </p>
                )}
              </div>
              <button
                onClick={handleSignUp}
                className="w-full font-titleFont text-sm font-normal py-1.5 rounded-md bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-inputShadow"
              >
                Continue
              </button>
              {loading && (
                <div className="flex justify-center">
                  <RotatingLines
                    visible={true}
                    height="50"
                    width="50"
                    color="#febd69"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              )}
              {successMsg && (
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-base font-titleFont font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center"
                >
                  {successMsg}
                </motion.p>
              )}
            </div>
            <p className="text-xs mt-6 leading-4 text-black ">
              By continuing an account, you agree to Amazon&apos;s{" "}
              <span className=" text-blue-600 hover:text-orange-700 underline  underline-offset-1">
                Conditions of Use
              </span>{" "}
              and{" "}
              <span className="text-blue-600 hover:text-orange-700 underline  underline-offset-1">
                Privacy Notice.
              </span>
            </p>
            <p className="w-full h-[1px] bg-zinc-300 my-4"></p>
            <p className="text-xs text-black flex flex-col ">
              <span className="font-semibold mb-1">Buying for work?</span>
              <span className="text-blue-600 hover:text-orange-600 hover:underline  underline-offset-1 text-xs">
                Create a free business account
              </span>
            </p>
            <p className="w-full h-[1px] bg-zinc-200 my-4"></p>
            <p className="text-xs mt-4 flex gap-2 text-gray-600 group cursor-pointer">
              Already have an account?
              <Link to={"/signin"}>
                <span className=" text-blue-600 flex items-center group-hover:text-orange-700 group-hover:underline  underline-offset-1">
                  Sign in
                  <MdPlayArrow />
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="w-full text-xs flex flex-col items-center justify-center gap-4 py-10 bg-gradient-to-t from-white via-white to-zinc-200">
        <div className="flex items-center gap-6">
          <p className="text-blue-600 hover:text-orange-600 hover:underline  underline-offset-1 duration-100">
            Conditions of Use
          </p>
          <p className="text-blue-600 hover:text-orange-600 hover:underline  underline-offset-1 duration-100">
            Privacy Notice
          </p>
          <p className="text-blue-600 hover:text-orange-600 hover:underline  underline-offset-1 duration-100">
            Help
          </p>
        </div>
        <p className="text-gray-600">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default SignUp;
