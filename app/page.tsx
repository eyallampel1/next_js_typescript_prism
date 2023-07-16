'use client';
import Image from 'next/image'
import LampelComp from './LampelComp'

export default function Home() {
  return (
    <>
  <div className="flex content-center items-center justify-center flex-nowrap">
      <h1  className=" flex-1 text-9xl bg-indigo-500">bla bla ooo</h1>
      <h2  className="p- text-center caret-neutral-300 flex-2 text-9xl bg-indigo-100">bla bla ooo</h2>
      <h2  className=" flex-1 text-9xl bg-yellow-200">bla bla ooo</h2>
  </div>
  <style jsx>{`
                    a {
                        background-color: #000000;
                        color: #ffffff;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 5px;
                        border: 1px solid #000000;
                        margin: 10px;
                    }
                    a:hover {
                        background-color: #ffffff;
                        color: #000000;
                    }
                `}</style>
            
           <a className='flex content-center items-center justify-center flex-nowrap' href="/about" >About</a>
  <LampelComp textToSend="hello From Parent"></LampelComp>  
  </>
  )
}
