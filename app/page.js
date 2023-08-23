'use client'

import Form from '@/components/Form'
import { useSession } from "next-auth/react";
import { useRef, useEffect } from 'react';
import { redirect } from "next/navigation";
import BottomArrow from '../public/BottomArrow.png'
import Image from 'next/image'

export default function Home() {
  const session = useSession();

  const scrollRef = useRef(null);

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (session.status == "authenticated") {
      redirect("/dashboard");
    }
  }, [session.status])


  return (
    <div className="flex w-screen h-screen" id="container">
      <div className="flex flex-1 flex-col justify-center items-center bg-black text-white font-bold text-4xl lg:text-[72px]" id="left">
        <h1>Board.</h1>
        <br />
        <div ref={scrollRef} className="hidden flex-col items-center" id="scroll-down-div">
          <button onClick={handleScrollDown} id="scroll-down-button" className="px-5 py-3 text-base rounded-md bg-black text-white shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)]">
            Scroll Down
          </button>
          <br />
          <Image src={BottomArrow} width={20} onClick={handleScrollDown} alt='Scroll' />
        </div>
      </div>
      <div className="bg-[#F5F5F5] flex-[1.5] flex justify-center items-center" id="right">
        <Form />
      </div>
    </div>
  )
}
