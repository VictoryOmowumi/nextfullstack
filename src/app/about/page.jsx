"use client";
import React, { useEffect } from "react";
import Lottie from "lottie-web";
import animate1 from "../../../public/animate1.json";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#animate1"),
      animationData: animate1,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => {
      Lottie.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1">
          <div id="animate1" style={{ width: "100%", height: "100%" }}></div>
        </div>
        <div className="flex-1 flex flex-col justify-center px-4 md:px-0 text-justify md:text-left">
          <h1 className="text-7xl font-bold mb-4 text-primary">
            About
            <span className="text-black"> Us</span>
          </h1>
          <p className="text-lg text-gray-600 leading-8">
            At Victorious, we're more than just a company; we're a passionate
            team of creators and innovators. Our expertise lies in the realms of
            web and mobile development, and our skills encompass various forms
            of design and illustration. We take pride in transforming ideas into
            interactive experiences and concepts into captivating visuals. Our
            journey is a testament to our commitment to excellence and
            dedication to our clients.
          </p>
        </div>
      </div>
      {/*  mission statement and what we do */}
      <div className=" bg-pattern bg-blend-overlay bg-pink-400 rounded-md mt-8 p-8 relative flex flex-col w-full ">
        <div className="flex justify-between">
          <div className=""></div>
          <div className="md:w-[500px] h-[250px] rounded-md shadow bg-[#fff] justify-start p-6">
            <div className="flex flex-col w-full h-full justify-center items-center gap-4">
              <h1 className="text-2xl text-center relative justify-center font-medium">
                <span className="text-primary">Our</span>
                <span className="text-black"> Mission</span>
              </h1>
              <p className="text-base text-gray-600 leading-8 text-center">
                We aim to provide our clients with the best possible solutions
                for their business needs. We strive to deliver quality products
                and services that are tailored to their requirements.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-[10rem] text-center relative justify-center font-medium">
          <span className="text-primary">Victo</span>
          <span className="text-black">Rious</span>
        </h1>

        <div className="md:w-[500px] h-[250px] rounded-md shadow bg-[#fff] relative justify-end">
          <div className="flex flex-col w-full h-full justify-center items-center gap-4">
            <h1 className="text-2xl text-center relative justify-center font-medium">
              <span className="text-primary">What</span>
              <span className="text-black"> We Do</span>
            </h1>
            <p className="text-base text-gray-600 leading-8 text-center">
              We provide a wide range of services, including web and mobile
              development, UI/UX design, and illustration. We also offer
              consultation services to help you make the right decisions for
              your business.
            </p>
          </div>
        </div>
      </div>

      {/*  our team */}

      <div className="flex flex-col justify-center items-center mt-8 mb-20">
        <h1 className="text-7xl font-bold mb-4 text-primary">
          Our
          <span className="text-black"> Team</span>
        </h1>
        <p className="text-lg text-gray-600 leading-8 text-center">
          We are a team of highly skilled and experienced professionals who are
          passionate about what we do. Our team consists of developers,
          designers, and illustrators who work together to create innovative
          solutions for our clients.
        </p>

        <div className="grid grid-cols-3 place-items-center mt-8 gap-20">
          <div className=" flex flex-col justify-center items-center gap-4 col-span-1">
            <div className="">
              <Image
                src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?w=826&t=st=1697916265~exp=1697916865~hmac=e6905d33a22f6c85971eed5ac010ccddccae7e261fc1d1873aade43f02ff4621"
                alt="Picture of the author"
                width={300}
                height={300}
                className="rounded-full object-contain"
              />
              <p className="text-center text-primary font-medium text-base mt-4">
                Maria Michaels
              </p>
              <p className="text-center text-black text-sm">Lead Designer</p>
            </div>
            <div className="mt-8">
              <Image
                src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R95932037&ga=GA1.1.563406451.1695574672&semt=ais"
                alt="Picture of the author"
                width={300}
                height={300}
                className="rounded-full object-contain"
              />
              <p className="text-center text-primary font-medium text-base mt-4">
                Maria Michaels
              </p>
              <p className="text-center text-black text-sm">Lead Designer</p>
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?w=360&t=st=1697916884~exp=1697917484~hmac=f4354294471798fae4232c3fccc77149a8b32962067bc5bc33bf9a7655da1ff5"
              alt="Picture of the author"
              width={300}
              height={200}
              className="rounded-full object-contain"
            />
            <p className="text-center text-primary font-medium text-base mt-4">
              Justin Fisher
            </p>
            <p className="text-center text-black text-sm">Founder/CEO</p>
          </div>
          <div className="flex flex-col gap-4 col-span-1">
            <div className="">
              <Image
                src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R95932037&ga=GA1.1.563406451.1695574672&semt=ais"
                alt="Picture of the author"
                width={300}
                height={300}
                className="rounded-full object-contain"
              />
              <p className="text-center text-primary font-medium text-base mt-4">
                Alvin Klein
              </p>
              <p className="text-center text-black text-sm">Motion Designer</p>
            </div>
            <div className="mt-8">
              <Image
                src="https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?size=626&ext=jpg&uid=R95932037&ga=GA1.1.563406451.1695574672&semt=ais"
                alt="Picture of the author"
                width={300}
                height={300}
                className="rounded-full object-contain"
              />
              <p className="text-center text-primary font-medium text-base mt-4">
                David Kings
              </p>
              <p className="text-center text-black text-sm">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
