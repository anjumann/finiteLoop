import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import google_icons from '../../assets/img/google.svg'
import github_icons from '../../assets/img/github.svg'
import { AiOutlineWarning, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from '../../firebase'
import { AuthContext } from "../../context/AuthContext"





function Register() {

    // firebase google auth
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)

    const [name, setName] = useState("");
    const [usn, setUsn] = useState("");
    const [phone, setPhone] = useState("");
    const [branch, setBranch] = useState("");
    const [intro, setIntro] = useState("");

    // error states
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error !!!");

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
                    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError(false);
                // Signed in 

                const user = userCredential.user;
                //   alert("sign up successful")
                dispatch({ type: "SIGNIN", payload: user })
                navigate("/profile/getinfo")
                setLoading(false);
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log(errorCode);
                setError(true)
                if (errorCode === "auth/email-already-in-use") {
                    setErrorMessage("Already signed up try signing in! ")
                }
                if (errorCode === "auth/invalid-email") {
                    setErrorMessage("Enter a valid email ")
                }
                if (errorCode === "auth/internal-error") {
                    setErrorMessage("Enter password ")
                }
                setLoading(false);
            });
    }

    const handleGoogleAuth = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // console.log(token);
                // The signed-in user info.
                const user = result.user;
                dispatch({ type: "SIGNIN", payload: user })
                navigate("/profile/getinfo")
                // console.log(user);

                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // console.log(errorCode);
                // console.log(email);
                // console.log(credential);
                // ...
            });
    }


    return (
        <>
            <div className="container mx-auto px-4 h-fit">
                <div className="flex content-center items-center justify-center h-fit">
                    <div className="w-full h-fit  lg:w-4/12  px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-slate-500 text-sm font-bold">
                                        Sign up
                                    </h6>
                                </div>
                                {/* <div className="btn-wrapper text-center">
                                    <button
                                        className="bg-white active:bg-slate-50 text-slate-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={github_icons}
                                        />
                                        Github
                                    </button>
                                    <button
                                        className="bg-white active:bg-slate-50 text-slate-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button"
                                    // onClick={handleGoogleAuth}
                                    >
                                        <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={google_icons}
                                        />
                                        Google
                                    </button>
                                </div> */}
                                {/* <hr className="mt-6 border-b-1 border-slate-300" /> */}
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                {/* <div className="text-slate-400 text-center mb-3 font-bold">
                                    <small>Or sign up with credentials</small>
                                </div> */}
                                <form  >
                                    <div className="flex flex-wrap md:flex-nowrap justify-between gap-2 ">
                                        <div className="w-full ">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Name" onChange={e => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="w-full lg:w-6/12 ">
                                            <div className=" w-full mb-3">
                                                <label
                                                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                    htmlFor="branch"
                                                >
                                                    Branch
                                                </label>

                                                <select
                                                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    onChange={e => setBranch(e.target.value)}
                                                >
                                                    <option value="">--Select Branch--</option>
                                                    <option value="CSE">CSE</option>
                                                    <option value="Information Science Enginnering.">Information Science Enginnering.</option>
                                                    <option value="ECE">ECE</option>
                                                    <option value="AIML">AIML</option>

                                                </select>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="flex flex-wrap md:flex-nowrap gap-2">
                                        <div className="relative w-full  mb-3">
                                            <label
                                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                USN
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="USN"
                                                onChange={e => setUsn(e.target.value)}
                                            />
                                        </div>

                                        {/* <div className=" w-full lg:w-6/12 mb-3">
                                            <label
                                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Phone"
                                                onChange={e => setPhone(e.target.value)}
                                            />
                                        </div> */}
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 invalid:border-red-500 "
                                            placeholder="Email"
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Password"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>


                                    {/* <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm font-semibold text-slate-600">
                                                Remember me
                                            </span>
                                        </label>
                                    </div> */}


                                    <div className={` ${error ? "flex" : "hidden"}  justify-center `} >
                                        <AiOutlineWarning className='inline text-red-600 text-xl mr-2 my-auto' />
                                        <p className='text-center text-red-600' > {errorMessage} </p>
                                    </div>

                                    <div className="text-center mt-6">
                                        <NavLink to="">
                                            <button
                                                onClick={handleRegister}
                                                type="submit"
                                                disabled={loading}
                                                className="  bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"

                                            >
                                                {loading ? <AiOutlineLoading3Quarters className="inline mr-2  text-md animate-spin align-middle  " /> : ""}

                                                Sign up
                                            </button>
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <NavLink
                                    to="/auth/resetpassword"

                                    className="text-slate-200"
                                >
                                    <small>Forgot password?</small>
                                </NavLink>
                            </div>
                            <div className="w-1/2 text-right">
                                <NavLink to="/auth/signin" className="text-slate-200">
                                    <small>Already User? Sign in</small>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register