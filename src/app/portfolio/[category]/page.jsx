import React from 'react'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (category) => {
  const data = items && Object.keys(items).includes(category) ? items[category] : null;
  
  if (!data) {
    return notFound();
  }
  return data;

}


const Category = ({ params }) => {
  const data = getData(params.category);
  
  return (
    <div className="container">
      <h1 className="text-3xl capitalize text-black">{params.category}</h1>

     
        {data.map((item, index) => (
         <div className={`flex flex-row gap-12 mt-12 mb-16 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={item.id}>
          {/* content div */}
          <div className="flex-1 flex flex-col  gap-4 justify-center">
            <h4 className=" text-3xl font-medium">
            {item.title}</h4>
            <p className="text-gray-600 leading-8">
            {item.desc}</p>
            <button className="bg-primary text-white px-8 py-3 rounded-md w-max"> 
            View More</button>
          </div>
          {/* image div */}
          <div className="flex-1 h-[500px] relative">
            <Image
              src={item.image}
              fill={true}
              className="object-cover"
            />
            </div>
         </div>
        ))}
   
     
    </div>
  );
};


export default Category