import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/amazonSlice";

const Signin = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch;

  // input state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error state
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrpassword] = useState("");

  // firebase state
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPassErr, setUserPassErr] = useState("");

  // loading state
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // handle state
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrpassword("");
  };

  //   handle login function
  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email or mobile phone number");
    }
    if (!password) {
      setErrpassword("Enter your password");
    }
    if (email && password) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(
            setUserInfo({
              id: user.uid,
              userName: user.displayName,
              email: user.email,
              image: user.photoURL,
            })
          );
          setLoading(false);
          setSuccessMsg("Logged in Successfully! Welcome you back");
          setTimeout(() => {
            navigate("/");
          }, 2000);
          // ...
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-email")) {
            setUserEmailErr("Invalid Email.");
          }
          if (errorCode.includes("auth/wrong-password")) {
            setUserPassErr("Wrong password! Please try again.");
          }
        });
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="pt-4 w-full">
      <div className="w-full bg-gray-100 pb-8">
        {successMsg ? (
          <div className="w-full flex items-center justify-center py-32">
            <p className="text-lg font-titleFont font-semibold text-green-500 border-[1px] border-green-600 px-6 py-2">
              {successMsg}
            </p>
          </div>
        ) : (
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
                Sign in
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">
                    Email or mobile phone number
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    className="w-full border border-zinc-400 px-2 py-1 text-base lowercase outline-none rounded-md focus-within:border-[#e77600] focus-within:shadow-inputShadow duration-100"
                  />
                  {errEmail && (
                    <p className="text-red-600 text-xs font-semibold flex items-center gap-2 -mt-.5 tracking-wide animate-bounce">
                      <span className="font-extrabold italic text-base font-titleFont">
                        !
                      </span>
                      {errEmail}
                    </p>
                  )}
                  {userEmailErr && (
                    <p className="text-red-600 text-xs font-semibold flex items-center gap-2 -mt-.5 tracking-wide animate-bounce">
                      <span className="font-extrabold italic text-base font-titleFont">
                        !
                      </span>
                      {userEmailErr}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Password</p>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    className="w-full border border-zinc-400 px-2 py-1 text-base lowercase outline-none rounded-md focus-within:border-[#e77600] focus-within:shadow-inputShadow duration-100"
                  />
                  {errPassword && (
                    <p className="text-red-600 text-xs font-semibold flex items-center gap-2 -mt-.5 tracking-wide animate-bounce">
                      <span className="font-extrabold italic text-base font-titleFont">
                        !
                      </span>
                      {errPassword}
                    </p>
                  )}
                  {userPassErr && (
                    <p className="text-red-600 text-xs font-semibold flex items-center gap-2 -mt-.5 tracking-wide animate-bounce">
                      <span className="font-extrabold italic text-base font-titleFont">
                        !
                      </span>
                      {userPassErr}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSignIn}
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
              </div>
              <p className="text-xs mt-4 leading-4 text-black">
                By continuing, you agree to Amazon&apos;s{" "}
                <span className=" text-blue-600 hover:text-orange-700 underline  underline-offset-1">
                  Conditions of Use
                </span>{" "}
                and{" "}
                <span className="text-blue-600 hover:text-orange-700 underline  underline-offset-1">
                  Privacy Notice.
                </span>
              </p>
              <p className="text-xs mt-4 flex gap-2 text-gray-600 group cursor-pointer">
                <MdPlayArrow />
                <span className=" text-blue-600 group-hover:text-orange-700 group-hover:underline  underline-offset-1">
                  Need help?
                </span>
              </p>
              <p className="w-full h-[1px] bg-zinc-300 my-4"></p>
              <p className="text-xs text-black flex flex-col ">
                <span className="font-semibold mb-1">Buying for work?</span>
                <span className="text-blue-600 hover:text-orange-600 hover:underline  underline-offset-1 text-xs">
                  Shop on Amazon Business
                </span>
              </p>
            </div>
            <p className="w-full text-gray-600 text-xs flex items-center mt-4">
              <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
              <span className="w-1/3 text-center ">New to Amazon?</span>
              <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            </p>
            <Link to={"/signup"} className="w-full">
              <button className="w-full mt-4 text-sm font-normal py-1.5 bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-inputShadow rounded-md">
                Create your Amazon account
              </button>
            </Link>
          </form>
        )}
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

export default Signin;
