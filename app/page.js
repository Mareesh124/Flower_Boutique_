import { Poppins } from "next/font/google";
import Header from "../components/Header";
import Image from "next/image";
import FormData from "@/components/FormData";
import Cust from "@/components/Cust";

export default function Home() {
  return (
    <div>
    <div className="flex justify-between items-center w-screen h-screen pb-28">
    <div className='bg-gradient-to-bl w-100 border-rounded-lg border-2  px-4 py-4 mx-10 my-5 border-gradient-to-br from-amber-500 to-yellow-500'>
      <Image src="/flower2.jpg" alt="Flower"  width={500}  height={500}/>
    </div>
    <div className="pr-50">
       <h1 className="text-5xl text-amber-500 ">Flower Boutique</h1><br/>
       <h6 className='text-2xl'>Your one-stop shop for beautiful flowers</h6>
    </div>
    </div>
    <Cust />
    <FormData />
    </div>
  );
}
