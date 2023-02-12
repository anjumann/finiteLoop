import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
// import logoBig from '../../assets/images/logo1.png'
import { BiHomeAlt, } from 'react-icons/bi'
import { AiOutlineTeam,AiOutlineForm } from 'react-icons/ai'

import { MdOutlineEmojiEvents, } from 'react-icons/md'

import { FaTeamspeak, } from 'react-icons/fa'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { CgMenuRight } from 'react-icons/cg'
import { GrClose } from 'react-icons/gr'
import { AuthContext } from "../../context/AuthContext"
import { signOut } from "firebase/auth";
import { auth } from '../../firebase'
import {Fade} from 'react-awesome-reveal'





function AuthNavbar() {


    const menu = [
        {
            option: "Home",
            link: "/",
            icons: <BiHomeAlt className='inline text-slate-50 mr-2 text-lg' />
        },
        {
            option: "Events",
            link: "/events",
            icons: <MdOutlineEmojiEvents className='inline text-slate-50 mr-2 text-lg' />,

        },
        // {
        //     option: "Gallery",
        //     link: "/",
        //     icons: <RiGalleryLine className='inline text-slate-50 mr-2 text-lg' />,

        // },
        {
            option: "Team",
            link: "/team",
            icons: <AiOutlineTeam className='inline text-slate-50 mr-2 text-lg' />,

        },
        {
            option: "Register Now",
            link: "/joinus",
            icons: <AiOutlineForm className='inline text-slate-50 mr-2 text-lg' />,

        },
    ]

    const social = [
        {
            name: "linkedin",
            link: "https://www.linkedin.com/showcase/finite-loop-club",
            icons: <FiLinkedin className='inline text-slate-50 mr-2 text-lg' />
        },
        {
            name: "instagram",
            link: "https://www.instagram.com/finiteloop_club_nmamit/",
            icons: <FiInstagram className='inline text-slate-50 mr-2 text-lg' />
        },
        {
            name: "facebook",
            link: "https://www.facebook.com/FiniteLoopClub.Nmamit/",
            icons: <FiFacebook className='inline text-slate-50 mr-2 text-lg' />
        },

    ]


    const [navbarOpen, setNavbarOpen] = useState(false);
    // const [link, setLink] =useState("/auth/signin");
    const { dispatch } = useContext(AuthContext);
    const { currentUser } = useContext(AuthContext);
    const pathname = window.location.pathname

    const handleSignOut = (e) => {

        if (!currentUser || pathname === "/" || pathname === "/joinus" || pathname === "/profile/getinfo") {
            if (!currentUser) {
                // console.log("already logout");
            }
            // console.log(pathname);

        }
        else {
            signOut(auth).then(() => {

                // Sign-out successful.
                // console.log("signout is successfull");
                dispatch({ type: "SIGNOUT", payload: null })

            }).catch((error) => {
                
                const errorMessage = error.message;
                console.log("error in signing out");
                console.log(errorMessage);
                // An error happened.
            });
        }
    }



    return (
        <>
            <Fade cascade  className="top-0 sticky z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg backdrop-brightness-50 drop-shadow-md ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink
                            className="inline-block mr-4   "
                            to="/"
                        >
                            {/* <img src={logo}  /> */}

                            <img src={logo} alt="logo"  className='h-16' />
                        </NavLink>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none transition-all duration-150 "
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {!navbarOpen ? <CgMenuRight className='inline text-slate-50 mr-2 text-lg' /> : <GrClose className='inline text-slate-50 mr-2 text-lg' />}

                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-none  lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? "block" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            {menu.map((menu, key) => {
                                return (
                                    <>
                                        <li key={key} className="flex items-center">
                                            <NavLink
                                                className="text-white lg:hover:text-slate-200  px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                                to={menu.link}
                                            >
                                                {menu.icons}
                                                {menu.option}
                                            </NavLink>
                                        </li>
                                    </>
                                )
                            })}

                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                {/* <PagesDropdown /> */}

                            </li>

                            {social.map((index, key) => {
                                return (
                                    <>
                                        <li key={key} className="flex items-center">
                                            <a
                                                className="text-white lg:hover:text-slate-200  px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                                href={index.link}
                                                target="blank"
                                            >
                                                {index.icons}
                                                <span className="lg:hidden inline-block ">{index.name}</span>
                                            </a>
                                        </li>

                                    </>
                                )
                            })}

                            
                        </ul>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default AuthNavbar