import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="container ">
     

      <div className="flex gap-6 justify-center items-center mt-8">
          <Link href="/portfolio/illustrations">
        <div className="w-[400px] h-[400px]  rounded-md relative overflow-clip object-contain hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <Image
            src="https://img.freepik.com/free-photo/surreal-desert-landscape-metaphors-modern-minimal-abstract-background-generative-ai-illustration_1258-150842.jpg?size=626&ext=jpg&uid=R95932037&ga=GA1.1.563406451.1695574672&semt=sph"
            width={400}
            height={300}
            className="rounded-md object-contain"
          />
          <h4 className="absolute bottom-0 left-0 text-white text-2xl font-bold p-4">
            Illustrations
          </h4>
        </div>
          </Link>
          <Link href="/portfolio/websites">
        <div className="w-[400px] h-[500px]  rounded-md  relative overflow-clip object-contain hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <Image
            src="https://img.freepik.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?size=626&ext=jpg&uid=R95932037&ga=GA1.1.563406451.1695574672&semt=ais"
            width={400}
            height={300}
            className="rounded-md object-contain"
          />
          <h4 className="absolute bottom-0 left-0 text-white text-2xl font-bold p-4">
            Web Development
          </h4>
        </div>
          </Link>
          <Link href="/portfolio/applications">
        <div className="w-[400px] h-[400px]  rounded-md  relative overflow-clip object-contain hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <Image
            src="https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104511.jpg?size=626&ext=jpg&uid=R95932037&ga=GA1.1.563406451.1695574672&semt=ais"
            width={400}
            height={300}
            className="rounded-md object-contain"
          />
          <h4 className="absolute bottom-0 left-0 text-white text-2xl font-bold p-4">
            Applications
          </h4>
        </div>
          </Link>
      </div>
    </div>
  );
};

export default page;
