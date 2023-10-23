import React from 'react'

const layout = ({children}) => {
  return (
    <div className="container px-4 flex flex-col justify-center items-start">
        <h1 className=" text-center text-7xl font-bold mt-12 mb-4 text-primary">
        Our
        <span className="text-black"> Works</span>
      </h1>
     
      {children}
    </div>
  )
}

export default layout