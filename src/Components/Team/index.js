import React, {useState, useEffect} from 'react'
import Teamcard from './Teamcard'
import Tab from './Tab'
import { members } from "./teamdata"
import AuthNavbar from '../navbars/AuthNavbar'
import SmallFooter from '../footers/SmallFooter'

function Team() {

  const [year, setYear] = useState("2022-23");
  const [elements, setElements] = useState(members);

  useEffect(() => {
    //filter code
    setElements(
      members.filter(
        (ele) =>
          
          (ele.year === year )    
      )
    );
  }, [year]);

  return (
    <>
      <AuthNavbar />
      <div className=' underline decoration-orange-500 underline-offset-8 decoration-4 text-7xl text-center text-gray-900 pt-5 font-bold tracking-widest ' >Team</div>
      <div className='text-3xl text-center text-gray-700 pt-3 pb-8  tracking-widest ' >Dynamic and Agile</div>


      <Tab {...{year, setYear}} />
      <div className='flex flex-wrap w-[95vw] m-auto mt-0 justify-center ' >

        {elements.map((member, id) => {
          return (
            <Teamcard key={id} name={member.name} role={member.role}
              github={member.github} linkedin={member.linkedin}
              src={member.img} bgImage={member.bgImage}
            />
          )
        })}
      </div>
      <SmallFooter />
    </>
  )
}

export default Team