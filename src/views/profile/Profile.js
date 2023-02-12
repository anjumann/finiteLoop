import React, { useState, useEffect, useContext } from 'react'
import profilePic from '../../assets/member/core/johnWick.png'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import { AuthContext, } from '../../context/AuthContext'
import { getUserInfo } from '../../firebase'
import { NavLink } from 'react-router-dom'

// icons
import { AiOutlineUser, AiOutlineMail, AiOutlineBranches, AiOutlineEdit } from 'react-icons/ai'
import SmallFooter from '../../Components/footers/SmallFooter'




function Profile() {

  const { currentUser } = useContext(AuthContext);



  const handleName = () => {
    if (currentUser.displayName) {
      return currentUser.displayName;
    }
    else {
      return "Name"
    }

  }


  const [name, setName] = useState(`${currentUser.displayName ? currentUser.displayName : "Name"}`);
  const [usn, setUsn] = useState("Usn");
  const [membership, setMembership] = useState("False");
  const [email, setEmail] = useState("Email");
  const [phone, setPhone] = useState("---Phone---");
  const [branch, setBranch] = useState("---Branch---");
  const [intro, setIntro] = useState("---...---");


  useEffect(() => {
    if (currentUser) {
      getUserInfo(currentUser.uid)
        .then((members) => {
          // setMembers(...members);

          setName(members.name);
          setUsn(members.usn);
          setEmail(members.email);
          setBranch(members.branch);
          setPhone(members.phone);
          setIntro(members.intro);
          // console.log(members.name);
        })
        .catch((e) => {
        });
    }
  }, [currentUser]);




  const info = {
    name: name,
    position: "Technical Head",
    email: email,
    usn: usn,
    intro: intro,
    // phone: phone,
    membership: membership,
    rank: 0,
    points: 0,
    badge: 0,
    branch: branch,
    // portfolio: "https://anjuman-23.web.app/"
  }



  return (
    <>
      <AuthNavbar />
      {/* {console.log(currentUser.uid)} */}
      <main className="profile-page">
        <section className="relative block h-[500px]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-no-repeat "
            style={{
              backgroundImage:
                // `url(${bgPic})`,
                "url('https://images.unsplash.com/photo-1653076362668-a717e53fe8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')",
            }}
          >

          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              {/* <polygon
                      className="text-slate-200 fill-current"
                      points="2560 0 2560 100 0 100"
                    ></polygon> */}
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-slate-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={profilePic}
                        className="shadow-2xl backdrop-blur-[1.5px] rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <NavLink to="/admin/tables" >
                        <button
                          className="bg-sky-500 active:bg-sky-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          {/* <AiOutlineEdit className="inline-flex mb-1 text-lg font-extrabold mr-3" /> */}
                          Dashboard
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          {info.rank}
                        </span>
                        <span className="text-sm text-slate-400">
                          Rank
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          {info.points}
                        </span>
                        <span className="text-sm text-slate-400">
                          Points
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          {info.badge}
                        </span>
                        <span className="text-sm text-slate-400">
                          Badges Earned
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-700 ">
                    {info.name}
                  </h3>
                  {/* <div className="text-sm leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-400"></i>{" "}
                    {info.position}
                  </div> */}


                  {/*  */}
                  <div className='mt-10 text-left  max-w-fit mx-auto ' >
                    <div className=" text-slate-600 ">

                      <AiOutlineUser className="inline-flex mb-1  mr-1" />
                      USN - {info.usn}
                    </div>
                    <div className=" text-slate-600 ">
                      <AiOutlineMail className="inline-flex mb-1  mr-1" />
                      Email - {info.email}
                    </div>
                    <div className=" text-slate-600">
                      <AiOutlineBranches className="inline-flex mb-1  mr-1" />
                      Branch - {info.branch}
                    </div>
                    {/* <div className=" text-slate-600">
                      <AiOutlineUser className="inline-flex mb-1  mr-1" />
                      Membership - {info.membership}
                    </div> */}
                  </div>

                </div>
                <div className="mt-10 py-10 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-slate-700">
                        {info.intro}
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SmallFooter />

    </>
  )
}

export default Profile