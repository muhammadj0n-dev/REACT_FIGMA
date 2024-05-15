import React from "react";
import "./index.css"
export default function Blog() {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="blog mt-[80px]">
            <div className="blog_top flex justify-between">
              <p className="text-[22px] font-normal font-sans">Recent posts</p>{" "}
              <span className="text-base text-[blue]">View all</span>
            </div>
            <div className="blog_bottom pt-[30px] flex justify-between">
              <div className="blog_left w-[700px] bg-[whiteligth] p-[25px] flex flex-col gap-[20px] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
                <h1 className="text-[36px] font-bold font-sans ">Making a design system from scratch</h1>
                <div className="parag flex gap-[25px]">
                    <p>12 Feb 2020</p>
                    <span>|</span>
                    <p>Design, Pattern</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
              <div className="blog_rigth w-[700px] p-[25px] flex flex-col gap-[20px] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
              <h1 className="text-[36px] font-bold font-sans ">Making a design system from scratch</h1>
                <div className="parag flex gap-[25px]">
                    <p>12 Feb 2020</p>
                    <span>|</span>
                    <p>Design, Pattern</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
