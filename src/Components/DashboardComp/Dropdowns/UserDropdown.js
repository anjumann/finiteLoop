import React, { useContext } from "react";
import { createPopper } from "@popperjs/core";
import { signOut } from "firebase/auth";
import { auth } from '../../../firebase'
import { AuthContext } from "../../../context/AuthContext"


const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const { dispatch } = useContext(AuthContext);

  const handleSignOut = (e) => {
    // console.log("triggered");
    e.preventDefault();
    signOut(auth).then(() => {

      // Sign-out successful.
      // console.log("signout is successfull");
      dispatch({ type: "SIGNOUT", payload: null })

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error in signing out");
      console.log(errorCode);
      // An error happened.
    });

  }

  const { currentUser } = useContext(AuthContext)
  // console.log(currentUser.email);


  return (

    <>
      <a
        className="text-slate-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="h-fit rounded-full align-middle border-none shadow-lg"
              // src={dp}
              src={`${currentUser.email === "ayusmann23@gmail.com" ? "/team/team2022/anjuman.png" : (currentUser.email === "shrilakshmipai@gmail.com" ? "/team/team2022/shrilaxmi.png" : (currentUser.email === "nayakbhargavi01@gmail.com" ? "/team/team2022/bhargavi.jpg" : (currentUser.email === "shashankshetty@nitte.edu.in" ? "/team/faculty/shashank_sir.png" : "/logo2.png")))} `}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <button
        
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={handleSignOut}
          // onClick={console.log("triggered1")}
        >
          Sign out
        </button>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => {console.log("trigged2")}}
        >
          Upcoming Feature
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Upcoming Feature
        </a>
        <div className="h-0 my-2 border border-solid border-slate-100" />
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Upcoming Feature
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
