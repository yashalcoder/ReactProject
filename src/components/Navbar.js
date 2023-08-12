import React from 'react'
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom'
export default function Homenew() {
  return (
   <>
   <nav className='bg-navfooter '>
    <div className='container px-20 mx-auto w-full'>
      <div className='grid grid-cols-3 items-center'>
        <Link to="/" className='m-3'>
          <img src={Logo} width="260.34px" height="72px"/>
        </Link>
        <div className='hidden lg:inline-flex '>
          <a className="px-6 text-textcolor hover:text-primary text-lg " href='#'><Link to="/">Home</Link></a>
          <a className="px-6 text-textcolor hover:text-primary text-lg " href='#'><Link to="/summary">Features</Link></a>
          <a className="px-6 text-textcolor hover:text-primary text-lg " href='#'>Tools</a>
          <a className="px-6 text-textcolor hover:text-primary text-lg " href='#'>Resources</a>
          <a className="px-6 text-textcolor hover:text-primary text-lg " href='#'>Blog</a>
        </div>
        <div className='ml-64 hidden lg:block'>
          <button className='bg-primary font-bold rounded-2xl p-2 w-28'>Contact us</button>
        </div>  
        <div className='block lg:hidden ml-72 sm:ml-[400px] mt-7'>
          <label className='mobile-menu cursor-pointer relative h-[30px] w-[30px]'>
              <input  type='checkbox'/>
              <div className='absolute w-[30px] h-[30px] right-0 bottom-0 box-shadow-0 0 0 0 #1F232F, 0 0 0 0 #1F232F rounded-full transition-all duration-500 ease-in-out menu'>
                  <div className='absolute w-[30px] h-[2px] top-[12px] bg-textcolor block transform origin-center duration-500 ease-in-out hamburger'></div>          
              </div>
              <div  className='z-200 show-menu left-0 right-0 top-[100px] h-full text-center fixed opacity-0 transform  transition duration-100 delay-200 ease-in-out'>               
                  <a href="#" className="text-textcolor hover:text-primary mb-3 p-3 hover:bg-textcolor  block"><Link to="/">Home</Link></a>            
                  <a href="#" className="text-textcolor hover:text-primary mb-3 p-3 hover:bg-textcolor block"><Link to="/summary">Features</Link></a>         
                  <a href="#" className="text-textcolor hover:text-primary mb-3 p-3  hover:bg-textcolor block">Tools</a>            
                  <a href="#" className="text-textcolor hover:text-primary mb-3 p-3  hover:bg-textcolor  block">Resources</a>            
                  <a href="#" className="text-textcolor hover:text-primary mb-3 p-3  hover:bg-textcolor  block">Blog</a>
                  <button className='bg-primary font-bold rounded-2xl p-2 m-4'>Contact us</button>
              </div>
          </label>
        </div>
      </div>
    </div>
   </nav>
   </>
  )
}
