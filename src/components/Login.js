import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidata } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVTAR } from "../utils/constants";

const Login = () => {

 const dispatch=useDispatch()

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const name=useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate form data
    const message = checkValidata(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message); 
    if (message) return;

    //for SignUp form
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVTAR
          }).then(() => {
            const{uid,email,displayName,photoURL}=auth.currentUser
             dispatch(addUser({
              uid:uid,
              email:email,
                 displayName:displayName,
                 photoURL:photoURL,
             }))
            // profile updated now navigate! from header
          }).catch((error) => {
            // an error occurred
            setErrorMessage(error.message)
          });
          // console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message; 
        }); 
    } else {
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // setErrorMessage(errorCode +" "+ errorMessage)
    setErrorMessage("user not found")

  });
    }
  };

  const toggleSigninForm = (e) => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="fixed md:absolute">
        <img
        className="h-screen object-cover md:h-auto"
          src={BG_URL}
          alt="login image"
        />
      </div>  
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 bg-black w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85"
      >
        <h1 className="font-normal text-base py-1 md:font-bold md:text-3xl md:py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 md:p-4 md:my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-semibold text-base py-1">
          {errorMessage}
        </p>
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 cursor-pointer" onClick={toggleSigninForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
