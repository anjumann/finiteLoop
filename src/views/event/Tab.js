import React from 'react'

function Tab({year, setYear}) {


    const element = [
        "All",
        // "2022-23",
        "2021-22",
        "2020-21",
        "2017-20",
    ]


    return (
        <>

            <div className=" flex justify-center text-sm font-medium text-center text-gray-500  border-gray-200 p-3 m-0">
                <ul className="flex flex-wrap justify-center -mb-px">
                    {element.map((index, key) => {
                        return (
                            <li key={key} className="mr-2">
                                <button onClick={()=> setYear(index)}  className={`inline-block px-4 py-2 rounded-t-lg border-b-2  border-transparent  hover:border-gray-300 
                                ${year===index ? "text-orange-600 border-orange-600 active":"hover:text-gray-600"}
                                `}> {index} </button>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </>
    )
}

export default Tab


{/* <li className="mr-2">
                        <a href="/" className="inline-block p-4 text-orange-600 rounded-t-lg border-b-2 border-orange-600 active dark:text-orange-500 dark:border-orange-500" aria-current="page">2021-22</a>
                    </li> */}