"use client";
import Image from "next/image";
import Accodeon from "./Accodeon";
const Section2 = () => {
  return (
    <section className="flex justify-center mt-10 mb-8 md:flex-row flex-col sm:py-0 py-6 w-full">
  <div className="flex flex-col sm:flex-row w-full max-w-6xl mx-auto">
    <div className="flex-1 flex justify-center px-4">
      <Image
        src="https://modele-cv.com/wp-content/uploads/2024/02/homme-assis-siege-1.webp"
        alt="Static"
        width={450}
        height={450}
        className="max-w-full h-auto"
      />
    </div>
    <div className="flex-1 flex justify-center mt-4 sm:mt-0 px-4">
      <div className="text-center sm:text-left">
        <Accodeon />
      </div>
    </div>
  </div>
</section>


  );
};

export default Section2;