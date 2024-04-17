import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); //you can also remove this nsvigstion from here also cuz same process is don in useffect below     
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    // whenever you signIN,signOut,Login then everytime onAuthStateChanged will be called and it will remember everything
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        // dispatch(removeUser({udi:null,email:null,displayName:null}))
        dispatch(removeUser()); //because in slice removeuser is not using action.payload to remove
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    }; //unsubscribe whenever onauth.. (component)event unmounts oir whwn the header component unloads 
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="netflixlogo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12 " src={user?.photoURL} alt="user-icon" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
