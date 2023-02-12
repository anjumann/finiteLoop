import React, { useState, useEffect } from 'react'
import Eventcard from './Eventcard'
import Tab from './Tab'
import { eventData } from "./eventData"
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import SmallFooter from '../../Components/footers/SmallFooter'


function Events() {

  const [year, setYear] = useState("All");
  const [elements, setElements] = useState(eventData);

  useEffect(() => {
    //filter code
    setElements(
      eventData.filter(
        (ele) =>
          (year === "All" || ele.year === year)

      )
    );
  }, [year]);



  return (
    <>
      <AuthNavbar />

      <div className='text-7xl text-center text-gray-800 pt-5 font-bold tracking-widest  underline decoration-orange-500 underline-offset-8 decoration-4 ' >Events</div>
      <div className='text-base w-10/12 md:text-xl md:w-7/12 mx-auto text-center text-gray-600 pt-3 pb-8   tracking-widest ' >We have successfully reached out many technical
        workshops. As we reflect back, here are some of the events organized
        by the club!</div>

      <Tab {...{ year, setYear }} />

      <div className='flex flex-wrap w-[95vw] m-auto mt-0 justify-center ' >
        {elements.map((events, id) => {
          return (
            <Eventcard key={id}
              name={events.name}
              src={events.image}
              date={events.date}
              category={events.type}
              attended={events.attended}
              oragnizer={events.oragnizer}
              desc={events.desc}
            />
          )
        })}

      </div>
      <SmallFooter />
    </>
  )
}

export default Events