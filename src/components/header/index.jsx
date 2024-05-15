import "./index.css";
import React from 'react'



export default function Header() {
  return (
    <>
    <header>
          <div className="container max-w-[1280px] m-0-auto ">
            <nav className="">
              <div className="menu hidden">
              <box-icon name='menu'></box-icon>
              </div>
            <ul className="flex justify-end gap-[30px] mt-[30px] text-[18px] font-sans font-bold">
                <li><a href="#">Works</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                </ul> 
            </nav>
        </div>
    </header>

    </>
  )
}