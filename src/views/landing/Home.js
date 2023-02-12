import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import team from '../../assets/team/team.jpg'
import pattern from '../../assets/img/pattern_react.png'
// import pattern from '../../assets/img/pattern_react.png'
import { GiThink, GiTeacher } from 'react-icons/gi'
import { GrWorkshop } from 'react-icons/gr'
import { BsCardChecklist } from 'react-icons/bs'
import { BiMessageSquareDetail, BiCodeAlt, BiGitRepoForked } from 'react-icons/bi'
import { FaFistRaised, FaChalkboardTeacher } from 'react-icons/fa'
import { AiOutlineBranches, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { MdWorkOutline, MdDeveloperMode } from 'react-icons/md'
import ContactForm from './ContactForm'
import { AuthContext } from "../../context/AuthContext"
import SmallFooter from '../../Components/footers/SmallFooter'
import { Fade, Slide } from 'react-awesome-reveal'
import google_icons from '../../assets/img/phone.png'
import github_icons from '../../assets/img/gmail.png'
import Testimonials from './Testimonials'
import skillDevLab from '../../assets/pic1.jpg'
import SimpleImageSlider from "react-simple-image-slider";

function Home() {

    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser.displayName)
    // console.log(currentUser)

    const teamImage = [
        {
            url: "/team/team_intro/7.jpg",
        },
        {
            url: "/team/team_intro/2.jpeg",
        },
        {
            url: "/team/team_intro/1.jpeg",
        },
        {
            url: "/team/team_intro/3.jpeg",
        },
        {
            url: "/team/team_intro/4.jpeg",
        },
        {
            url: "/team/team_intro/5.jpeg",
        },
        {
            url: "/team/team_intro/6.jpeg",
        },
    ]

    return (
        <>
            <AuthNavbar />
            <Fade cascade={"true"} duration={2000} triggerOnce = {true} >
                <section className="header relative  items-center flex h-screen max-h-[660px] md:max-h-screen ">

                    <Slide duration={1500} direction={"left"} triggerOnce = {true}  >
                        <div className="mx-auto items-center flex flex-wrap">
                            <div className="w-screen  px-10">
                                <div className="pt-5 sm:pt-0 z-50 ">
                                    <h2 className=" text-5xl md:text-7xl text-slate-700">
                                        <span className='font-bold' > Finite Loop </span>
                                    </h2>
                                    <p className="mt-4 text-2xl md:text-3xl font-semibold leading-relaxed text-slate-600">
                                        We Code, We Innovate, We Inspire!

                                    </p>
                                    <div className="mt-12">
                                        <NavLink
                                            to="/joinus"
                                            className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-orange-500 active:bg-orange-600  text-lg shadow hover:shadow-lg ease-linear transition-all duration-150"
                                        >
                                            Register Now
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>


                    <img
                        className="absolute top-0 b-auto right-0  sm:w-6/12 md:mt-32 sm:mt-0 w-10/12 max-h-[860px]  "
                        src={pattern}
                        alt="..."
                    />
                </section>
            </Fade>


            <section className="mt-10 md:mt-10 pb-16 relative bg-slate-100">
                <Fade cascade={"true"} duration={1000} triggerOnce = {true} >
                    <Slide direction={"right"} duration={1000} triggerOnce = {true} >
                        <div className="container mx-auto px-4 pb-44 pt-10">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                                    <div className="md:pr-12">
                                        <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                            <BiMessageSquareDetail className='text-slate-900  ' />
                                        </div>
                                        <h3 className="text-3xl font-semibold">
                                            About Us
                                        </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-slate-500">
                                            Finite Loop is a Coding Club, which aims to give a good perspective of development, and encourages students to realize their ideas. We encourage students to participate in competitive programming and thus, inspire the next.


                                        </p>
                                        <ul className="list-none mt-6">
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <GiThink className='inline-block text-slate-900 mr-2 text-2xl' />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-slate-500">
                                                            We stay curious, and seek out new solutions
                                                        </h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <BsCardChecklist className='inline-block text-slate-900 mr-2 text-2xl' />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-slate-500">
                                                            We work relentlessly to produce fruitful results.
                                                        </h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <FaFistRaised className='inline-block text-slate-900 mr-2 text-2xl' />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-slate-500">
                                                            We support each other to grow, with a positive spirit, and embrace our diversities.
                                                        </h4>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="w-full md:w-6/12 mr-auto px-4 pt-16 md:pt-0">

                                    <img
                                        alt="..."
                                        className="max-w-full rounded-lg shadow-xl"
                                        style={{
                                            transform:
                                                "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                                        }}
                                        src={team}
                                    />
                                </div>

                            </div>
                        </div>
                    </Slide>
                    <Slide direction={"left"} duration={1000} triggerOnce = {true} >


                        <div className="container mx-auto">
                            <div className="flex flex-wrap items-center">
                                <div className="w-11/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-orange-500">
                                        <img
                                            alt="..."
                                            src={skillDevLab}
                                            className="w-full align-middle rounded-t-lg"
                                        />

                                        <blockquote className="relative p-8 mb-4">
                                            <h4 className="text-2xl font-bold text-white">
                                                Great for your awesome project
                                            </h4>
                                            <p className="text-base   mt-2 text-white">
                                                Lab Oriented Training conducted by the ever-energetic 'Finite Loop Club' on 'Application Development using Collaborative Tools' to the first-year students (2021-2022) as a part of enhancing their skills.
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>


                                <div className="w-full md:w-6/12 px-4">
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-6/12 px-4">
                                            <div className="relative flex flex-col mt-4">
                                                <div className="px-4 py-5 flex-auto">
                                                    <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                                        <FaChalkboardTeacher className='text-slate-900  ' />
                                                    </div>
                                                    <h6 className="text-xl mb-1 font-semibold">
                                                        Workshops
                                                    </h6>
                                                    <p className="mb-4 text-slate-500">
                                                        The members get free access to all the events and workshops conducted by the Finite Loop club.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="relative flex flex-col min-w-0">
                                                <div className="px-4 py-5 flex-auto">
                                                    <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                                        <GiTeacher className='text-slate-900  ' />
                                                    </div>
                                                    <h6 className="text-xl mb-1 font-semibold">
                                                        Peer to Peer Learning
                                                    </h6>
                                                    <p className="mb-4 text-slate-500">
                                                        Explain your ideas to others and participate in activities through which you can learn from your peers.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-6/12 px-4">
                                            <div className="relative flex flex-col min-w-0 mt-4">
                                                <div className="px-4 py-5 flex-auto">
                                                    <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                                        <MdWorkOutline className='text-slate-900  ' />
                                                    </div>
                                                    <h6 className="text-xl mb-1 font-semibold">Internships</h6>
                                                    <p className="mb-4 text-slate-500">
                                                        Get a chance to grab internships and put your skills into use.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="relative flex flex-col min-w-0">
                                                <div className="px-4 py-5 flex-auto">

                                                    <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                                        <GrWorkshop className='text-slate-900' />
                                                    </div>
                                                    <h6 className="text-xl mb-1 font-semibold">
                                                        Guest Lecture
                                                    </h6>
                                                    <p className="mb-4 text-slate-500">
                                                        Get an opportunity to listen to some of the renowned experts, and engage in discussions.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="w-full flex flex-col md:flex-row   mx-auto px-4">
                                            <div className="relative flex flex-col min-w-0 mt-4">
                                                <div className="px-4 py-5 flex-auto">
                                                    <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                                        <AiOutlineFundProjectionScreen className='text-slate-900  ' />
                                                    </div>
                                                    <h6 className="text-xl mb-1 font-semibold">Real-Time Projects</h6>
                                                    <p className="mb-4 text-slate-500">
                                                        Being in this club, you get to work on real time projects, which allows you to bring out your creative side.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="relative flex flex-col min-w-0 mt-4">
                                                <div className="px-4 py-5 flex-auto">
                                                    <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                                        <BiCodeAlt className='text-slate-900  ' />
                                                    </div>
                                                    <h6 className="text-xl mb-1 font-semibold">Coding Contest</h6>
                                                    <p className="mb-4 text-slate-500">
                                                        We ensure to conduct biweekly coding contests, to improve your analytical and problem solving skills.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* call to action */}

                        {/* css components section */}

                        <div className="container mx-auto overflow-hidden pb-20">


                            <div className="flex flex-wrap items-center ">
                                <div className="w-full md:w-6/12 px-4 mx-auto mt-32">
                                    <div className="justify-center flex flex-wrap relative">
                                        <div className="my-4 w-full lg:w-6/12 px-4 block">

                                            <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                                                <img
                                                    alt="..."
                                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                    src="https://material-dashboard-laravel.creative-tim.com/material/img/laravel.svg"
                                                />
                                                <p className="text-lg text-white mt-4 font-semibold">
                                                    Laravel
                                                </p>
                                            </div>


                                            <div className="bg-sky-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                                <img
                                                    alt="..."
                                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                                                />
                                                <p className="text-lg text-white mt-4 font-semibold">
                                                    ReactJS
                                                </p>
                                            </div>




                                        </div>
                                        <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">

                                            <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                                                <img
                                                    alt="..."
                                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                                                />
                                                <p className="text-lg text-white mt-4 font-semibold">
                                                    JavaScript
                                                </p>
                                            </div>




                                            <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                                <img
                                                    alt="..."
                                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                                                />
                                                <p className="text-lg text-white mt-4 font-semibold">
                                                    Vue.js
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                                    <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                        <BiGitRepoForked className='text-slate-900  ' />
                                    </div>
                                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                        Work on new Trending Tech Stack
                                    </h3>
                                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                                        Get a chance to explore and innovate using the in-demand Tech Stack! Get your hands to code your idea and enter the world of developers!
                                    </p>



                                </div>
                            </div>
                        </div>


                    </Slide>
                </Fade>
            </section>

            {/* call to action */}

            <section className="py-4 bg-slate-600 overflow-hidden pb-40 md:pb-0 ">
                <div className="container mx-auto pb-40">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                            <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <AiOutlineBranches className='inline-block text-slate-900 text-2xl' />
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                                Join Us
                            </h3>
                            <p className="text-lg  leading-relaxed mt-4 mb-4 text-slate-100">
                                Dream it, live it, just a click away! Join us for the exciting journey ahead.
                            </p>

                            <NavLink
                                to="/joinus"

                                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                            >
                                Register Now
                            </NavLink>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mx-auto  mt-12 relative">
                            < MdDeveloperMode className='inline-block w-fit text-white absolute mx-auto text-[300px] lg:text-[500px] opacity-70 ' />

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-none overflow-hidden">
                <div className="container mx-auto pb-">
                    <div className="flex flex-row-reverse flex-wrap justify-center">
                        <div className="w-full md:px-4 ml-auto mr-auto md:mt-10">

                            {/* <ContactForm /> */}
                            <div className="rounded-t mb-0 px-6 py-6">

                                <div className="text-center mb-3">
                                    <h6 className="text-slate-500 text-xl font-bold">
                                        Contact Us
                                    </h6>
                                </div>
                                <div className=" flex justify-center flex-wrap gap-5 text-center">
                                    <a href="tel:8861643971">

                                        <button
                                            className="bg-white active:bg-slate-50 text-slate-700  px-6 py-2 rounded-lg outline-none focus:outline-none   uppercase shadow hover:shadow-md inline-flex items-center font-bold ease-linear transition-all duration-150 text-xl"
                                            type="button"
                                        >
                                            <img
                                                alt="..."
                                                className="w-8 mx-0 mr-4 "
                                                src={google_icons}
                                            />
                                            Call us
                                        </button>
                                    </a>
                                    <a href="mailto:finiteloopclub@gmail.com">

                                        <button
                                            className="bg-white active:bg-slate-50 text-slate-700  px-6 py-2 rounded-lg outline-none focus:outline-none   uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xl ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <img
                                                alt="..."
                                                className="w-8 mx-0 mr-4"
                                                src={github_icons}
                                            />
                                            Mail us
                                        </button>
                                    </a>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
            <SmallFooter />

        </>
    )
}

export default Home