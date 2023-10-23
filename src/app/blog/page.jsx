import Link from 'next/link'
import React from 'react'





const Blog = () => {
  return (
    <div className="container">
    
      <div className="flex flex-row gap-12 mt-12 mb-16">
        {/* content div */}
        <div className="flex-1 flex flex-col  gap-4 justify-center">
          <h4 className=" text-3xl font-medium">
          How to use Next.js with Tailwind CSS</h4>
          <p className="text-gray-600 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.</p>
          <Link href="/blog/1">
          <button className="bg-primary text-white px-8 py-3 rounded-md w-max">
            Read More
          </button>
          </Link>

      </div>
      {/* image div */}

      <div className="flex-1">
        <img src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?size=626&ext=jpg&uid=R95932037&ga=GA1.1.563406451.1695574672&semt=ais" alt="blog" />
      </div>

    </div>

    </div>
  )
}

export default Blog