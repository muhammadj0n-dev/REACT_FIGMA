import React from "react";
import "./index.css"
import brat from "./../../assets/images/brat.png";

export default function Works() {
  return (
    <>
      <div>
        <section id="Works">
          <div className="container">
            <div className="works flex justify-between mt-[80px] items-center">
              <div className="works_left  flex flex-col gap-[50px]">
                <h1 className="text-[48px] w-[497px] font-sans font-bold">Hi, I am John, Creative Technologist</h1>
                <p className="text-[18px] w-[550px] font-sans font-normal">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button className="flex justify-start p-[8px] bg-[#FF6464] w-[155px] rounded-[4px] text-center text-[white] font-medium">Download Resume</button>
              </div>
              <div className="works_right mr-[5b0px]">
                <img src={brat} alt="" className="w-[300px]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
