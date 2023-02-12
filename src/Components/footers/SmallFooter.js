import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiTechnoHeart } from 'react-icons/gi'

const SmallFooter = (props) => {
    const main = [{
        item: "Home",
        link: "/",
    }]

    const pathname = window.location.pathname

    return (
        <>
            <footer
                className={
                    (props.absolute
                        ? "absolute w-full bottom-0 bg-none"
                        : (pathname === "/admin/dashboard" ? "hidden" : "relative")) + " pb-6"
                }

            >
                <div className="container mx-auto px-4">
                    <hr className="mb-6 border-b-1 border-slate-600" />
                    <div className="flex flex-wrap items-center flex-col md:flex-row  md:justify-between justify-center">
                        <div className={` ${props.white ? "text-white px-4 " : "text-black px-4"} `}>
                            <div className="text-sm  font-semibold py-1 text-center">
                                Copyright © {new Date().getFullYear()}
                                <NavLink
                                    to="/"
                                    className=" hover:text-slate-700 text-sm font-semibold py-1 px-2"
                                >
                                    Finite Loop
                                </NavLink>
                            </div>
                        </div>
                        <div className={` ${props.white ? "text-white" : "text-black"} `} >

                            Created with <GiTechnoHeart className=" inline text-red-700 " /> by
                            {/* <NavLink to='/devteam' className='text-orange-500 font-semibold ' > Anjuman </NavLink> from  */}
                            <NavLink to="/" className='text-orange-500 font-semibold ' > Finite Loop </NavLink>
                        </div>
                        <div className="  px-4">


                            <ul className="flex flex-wrap list-none ">
                                {main.map((index, key) => {
                                    return (
                                        < >
                                            <li key={key} className={` ${props.white ? "text-white" : "text-black"} `} >
                                                <NavLink
                                                    to={index.link}
                                                    className="hover:text-slate-600 text-sm font-semibold block py-1 px-3"
                                                >
                                                    {index.item}
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SmallFooter