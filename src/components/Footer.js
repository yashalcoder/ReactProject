import React from 'react'
import Logo from '../images/Logo.png'
import fb from '../images/fb.png';
import insta from '../images/insta.png';
import pinterest from '../images/pinterest.png';
import twitter from '../images/twitter.png';
import footer from '../images/footer.png'
export default function Footer() {
  return (
   <>
    <div className='bg-navfooter'>
      <div className='container lg:grid grid-cols-2 border-b border-textcolor '>
        <div className='w-80 m-auto  pt-11 pb-11'>
         <h1 className='text-textcolor  font-poppins-bold text-2xl'>Check your website's SEO for free right now! </h1>
        </div>
        <div className='m-auto  w-[400px] mb-[50px]'>
          <input className="p-2 rounded-md w-80  " type='text' placeholder='Place url here!'/>
          <button className='p-2 w-14 rounded-md m-2 font-poppins-medium bg-primary text-textcolor'>Run</button>
        </div>
      </div>
      <div className='container lg:grid grid-cols-2 '>
        <div className='m-auto  w-80 mt-[50px] mb-[50px]'>
          <img src={Logo} alt=''/>
          <p className='ml-[110px]  text-textcolor '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, vel!</p>
          <div className='container    flex mt-4'>
            <img className="ml-28" src={twitter} alt=''/>
            <img className='ml-4' src={pinterest} alt=''/>
            <img className='ml-9' src={fb} alt=''/>
            <img className='ml-4 ' src={insta} alt=''/>
          </div>
        </div>
        <div className='m-auto  w-[400px] mt-[50px] pb-[50px]'>
        <div className='container flex text-textcolor'>
                    <div className='m-auto w-'>
                        <h1 className='font-poppins-bold '>Resources</h1>
                        <p className='p-6 font-poppins-light pb-0 pl-0'>Tools</p>
                        <p className='p-2 font-poppins-light pl-0'>Features</p>
                        <p className='p-2 font-poppins-light pl-0'>Blogs</p>
                        <p className='p-2 font-poppins-light pl-0'>API</p>
                    </div>
                    <div className='m-auto'>
                    <h1 className='font-poppins-bold'>Company</h1>
                        <p className='p-6 font-poppins-light pb-0 pl-0'>About Us</p>
                        <p className='p-2 font-poppins-light pl-0'>FAQ's</p>
                        <p className='p-2 font-poppins-light pl-0'>SEO Checkups</p>
                        <p className='p-2 font-poppins-light pl-0'>Contact Us</p>
                    </div>
                    <div className=''>
                    <h1 className='font-poppins-bold'>Resources</h1>
                        <p className='p-6 font-poppins-light pb-0 pl-0'>Terms of Services</p>
                        <p className='p-2 font-poppins-light pl-0'>Privacy Policy</p>
                        <p className='p-2 font-poppins-light pl-0'>Refunds Policy</p>
                    </div>
                </div>
        </div>
        <div className=' border-primary container font-poppins-light flex text-textcolor pb-[50px]'>
          <img className='ml-32 ' width={20} src={footer} alt=''/>
          <p className='m-auto ml-2'>SEO cracks 2023</p>
          <ul className='list-disc m-auto'>
            <li>All rights reserved</li>
          </ul>
        </div>
      </div>
      </div> 
   </>
  )
}
