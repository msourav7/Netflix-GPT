import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearchClick = () => {
    // toggle GPT search button here with using redux store we can also do this by creating s state here
    //dispatch(toggleGptSearchView(!showGptSearch)); // Toggle the current state //we can also paas an action as true or toggle functnality if we are using action in our payload (11) and get this showstate from => const showGptSearch = useSelector(state => state.gpt.showGptSearch);
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    // default ( bg-black)is for mobile sm(if device size is greater then small(tab)) is for tab and md(if device size is greater then medium(desktop)) is for desktop 
    <div className="absolute w-screen px-5 py-2 md:px-8 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col justify-between md:flex-row">
      <img className=" w-[9rem] md:w-44 mx-auto md:mx-0" src={LOGO} alt="netflixlogo" />
      {user && (
        <div className="items-center  flex p-2 justify-around">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-700 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="md:py-2 md:px-4 md:mx-4 md:my-2 bg-gray-700 text-white rounded-lg"
            style={{ width: '121px', height: '39px' }}
            onClick={handleGptSearchClick}
          >
            {showGptSearch?"Home Page": "GPT Search" }
          </button>
          <img className="hidden md:block w-25 h-8 md:w-12 md:h-12 " src={user?.photoURL} alt="user-icon" />
          <button onClick={handleSignOut} className="md:font-bold text-white" style={{width: "108px", fontSize: "smaller"}}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
