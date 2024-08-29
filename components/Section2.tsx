"use client";
import Image from "next/image";
import Accodeon from "./Accodeon";
const Section2 = () => {
  return (
    <section  className=" flex justify-start mt-10 mb-8 md:flex-row flex-col sm:py-0 py-6 w-full sm:items-center ">
     
     <div className=" flex mx-10 w-full h-[400px]">
      <div className="flex-1">
        <Image
          src="https://modele-cv.com/wp-content/uploads/2024/02/homme-assis-siege-1.webp"
          alt="Static"
          width={450}
          height={450}
          className="max-w-sm max-h-90"
        />
      </div>
      <div className="flex-1 h-screen justify-center">
      <Accodeon/>
      </div>
    </div>

    </section>
  );
};

export default Section2;