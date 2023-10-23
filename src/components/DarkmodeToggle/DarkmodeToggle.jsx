import React, { useContext } from 'react'
import {BsFillMoonStarsFill, BsSun} from 'react-icons/bs'
import { ThemeContext } from '../../context/ThemeContext'
const DarkmodeToggle = () => {
    const {toggleMode, mode} = useContext(ThemeContext)
  return (
    <div className="w-[50px] h-[24px] border-2 border-primary rounded-[30px] flex justify-between items-center p-2 relative cursor-pointer "
    onClick={toggleMode}
    >
        {/* two icons moon and sun  */}

       <div className="">
              <BsFillMoonStarsFill className="text-yellow-500 text-xs "/>
       </div>
       <div className="ml-2">
                <BsSun className="text-yellow-500 text-xs"/>
       </div>
       <div className={`w-[17px] h-[17px] rounded-full bg-primary absolute top-1/2 left-[50px] transform -translate-x-1/2 -translate-y-1/2 ${mode === "dark" ? "translate-x-[-22px]" : "translate-x-[-44px]"}`}
       ></div>
    </div>
  )
}

export default DarkmodeToggle