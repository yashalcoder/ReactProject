import React from 'react'
import Logo from '../images/Logo.png'
import fb from '../images/fb.png';
import insta from '../images/insta.png';
import pinterest from '../images/pinterest.png';
import twitter from '../images/twitter.png';

export default function Footer() {
  return (
   <>
    <div className='bg-navfooter pt-[50px] '>
        <div className=' container md:flex border-b border-textcolor'>
          <div>
            <h1 className='text-textcolor font-bold m-11 mb-[50px] ml-32 mt-0 w-80 text-2xl'>Check your website's SEO for free right now! </h1>
          </div>
          <div className='text-lg m-11 mt-0 md:ml-80  mb-[50px] '>
            <input className="p-2 rounded-md w-80  " type='text' placeholder='Place url here!'/>
            <button className='p-2 w-14 rounded-md m-2 bg-primary text-textcolor'>Run</button>
          </div>
        </div> 
        <div className='container md:flex pt-[50px] '>
            <div>
              <img className ="m-16 mt-0 mb-0 ml-32 " src={Logo} width={348} height={72}/>\
              <p className='ml-[250px] w-72 text-textcolor'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, vel!</p>
              <div className='conatainer flex ml-60 mt-3 mb-4'>
                <img className="p-2" src={twitter}/>
                <img className="p-2" src={pinterest}/>
                <img className="pl-11 p-2" src={fb}/>
                <img className="p-2" src={insta}/>
              </div>
            </div>
            <div>
                <div className='container flex text-textcolor'>
                    <div className='m-11 mt-0 mb-0 md:ml-72'>
                        <h1 className='font-bold'>Resources</h1>
                        <p className='p-6 pb-0 pl-0'>Tools</p>
                        <p className='p-2 pl-0'>Features</p>
                        <p className='p-2 pl-0'>Blogs</p>
                        <p className='p-2 pl-0'>API</p>
                    </div>
                    <div className='m-11 mt-0 mb-0 md:ml-11'>
                    <h1 className='font-bold'>Company</h1>
                        <p className='p-6 pb-0 pl-0'>About Us</p>
                        <p className='p-2 pl-0'>FAQ's</p>
                        <p className='p-2 pl-0'>SEO Checkups</p>
                        <p className='p-2 pl-0'>Contact Us</p>
                    </div>
                    <div className='m-11 mt-0 mb-0 md:ml-11'>
                    <h1 className='font-bold'>Resources</h1>
                        <p className='p-6 pb-0 pl-0'>Terms of Services</p>
                        <p className='p-2 pl-0'>Privacy Policy</p>
                        <p className='p-2 pl-0'>Refunds Policy</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container flex text-textcolor'>
          <div className='m-11 ml-32 mb-4'><h1>SEO CRACKS 2023</h1></div>
          <div className='m-11 mb-[50px]'>
            <ul className='list-disc'>
                <li>All rights reserved</li>
            </ul>
          </div>
        </div> 
      </div>
   </>
  )
}
