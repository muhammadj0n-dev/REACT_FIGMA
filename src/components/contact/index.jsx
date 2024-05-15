import React from 'react';
import './index.css';
import rasm1 from './../../assets/images/1.png';
import rasm2 from './../../assets/images/2.png';
import rasm3 from './../../assets/images/3.png'
 
 export default function Contact() {
   return (
     <>
     <section id='Contact'>
        <div className="container">
            <div className="contact flex flex-col gap-[30px] mt-[80px]">
                <div className="cotntact_top flex gap-[50px]">
                    <img src={rasm1} alt="" />
                    <div className="dashboard flex flex-col gap-[13px]">
                        <h1 className='text-[24px] font-bold font-sans '>Designing Dashboards</h1>
                        <li className='flex gap-[15px] items-center'><p className='p-[4px] w-[60px] text-center text-white font-semibold bg-[#142850] rounded-[16px]'>2020</p> <span className='text-[silver]'>Dashboard</span></li>
                        <p className='parag text-[18px] font-normal w-[600px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="contact_middle flex gap-[50px]">
                    <img src={rasm2} alt="" />
                    <div className="portret flex flex-col gap-[13px]">
                        <h1 className='text-[24px] font-bold font-sans '>Vibrant Portraits of 2020</h1>
                        <li className='flex gap-[15px] items-center'><p className='p-[4px] w-[60px] text-center text-white font-semibold bg-[#142850] rounded-[16px]'>2018</p>
                        <span className='text-[silver]'>Illustration</span>
                        </li>
                        <p className='text-[18px] font-normal w-[600px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="contact_bottom flex gap-[50px]">
                    <img src={rasm3} alt="" />
                    <div className="type flex flex-col gap-[13px]">
                        <h1 className='text-[24px] font-bold font-sans '>36 Days of Malayalam type</h1>
                        <li className='flex gap-[15px] items-center'><p className='p-[4px] w-[60px] text-center text-white font-semibold bg-[#142850] rounded-[16px]'>2018</p> <span className='text-[silver]'>Typography</span></li>
                        <p className='text-[18px] font-normal w-[600px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
        </div>
     </section>
     </>
   )
 }
 