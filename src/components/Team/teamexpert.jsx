import React from 'react'
import Expnav from './expnav'
import abs from "../../assets/Abstract Design.png"
import cont from "../../assets/Container.png"
import Expert from './Expert'

const Teamexp = () => {
  return (
    <div>
        <div>
            <div className='bg-[#F6FBE9] ml-[100px] mr-[90px] rounded-t-xl mt-[100px]'>
                <img src={abs} alt=""  className='w-[643px] h-[326px] ml-[275px]'/>
                <img src={cont} alt=""  className='absolute top-[350px] left-[670px]'/>
                <h1 className='text-[30px] font-bold ml-[420px] -mt-[40px] mb-[40px]'>Meet Our Team of Experts</h1>
                <p className='ml-[80px] mr-[80px] pb-[50px]'>Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.</p>            </div>
                <Expnav/>
            </div>
            <div className='flex flex-row'>
                <Expert/>
                <Expert/>
                <Expert/>
                <Expert/>
            </div>
    </div>
  )
}

export default Teamexp