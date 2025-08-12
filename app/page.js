import { Poppins } from "next/font/google";
import Header from "../components/Header";
import Image from "next/image";
import FormData from "@/components/FormData";
import Cust from "@/components/Cust";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center w-screen h-auto md:h-screen pb-10 md:pb-28">
        
        {/* Image section */}
        <div className="bg-gradient-to-bl w-72 md:w-auto border-rounded-lg border-2 px-2 py-2 mx-auto my-5 border-gradient-to-br from-cyan-100 to-blue-500 flex justify-center">
          <Image
            src="/flower2.jpg"
            alt="Flower"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>

        {/* Text section */}
        <div className="text-center md:text-left px-4 md:pr-50">
          <h1 className="text-3xl md:text-5xl text-amber-500">Flower Boutique</h1>
          <br />
          <h6 className="text-lg mt-0 pt-0 md:text-2xl">
            Your one-stop shop for beautiful flowers
          </h6>
        </div>
      </div>

      <Cust />
      <FormData />
    </div>
  );
}
