import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import download from '../images/download.png'
import reload from '../images/reload.png'
import group from '../images/Group.png'
import tick from '../images/tick.png'
import greentick from '../images/greentick.png'
import cross from '../images/cross.png'
import not from '../images/not.png'
import { Link } from 'react-router-dom'
export default function Reportissues() {
  return (
    <>
    <Navbar/>
    <div className='bg-secondory pt-20 pb-20'>
        <div className='ml-6 mr-4 bg-textcolor  w-[1300] h-[700px] lg:h-[500px]'>
            <div className='container lg:grid grid-cols-2 border-b-4 pb-4 border-gray'>
                <div className='m-auto w-[430px] mt-11'>
                    <h1 className='text-primary font-poppins-bold p-1 text-xl'>Recent Search</h1>
                    <p className='font-poppins-medium text-textgray p-1'>http://apple.com</p>
                  <div className='container flex'>
                    <p className='font-poppins-bold p-1 text-sm'>Report Generated:</p>
                    <p className='text-textgray ml-9'>Tuesday,June 13 2023 8:00pm</p>
                  </div>
                </div>
                <div className='m-auto pl-36 mr-11'>
                    <div className='container flex mt-9'>
                        <button className='bg-primary rounded-md text-textcolor rounded-r-none font-poppins-medium border-r p-1'>Export Details</button>
                        <button><img className='bg-primary p-2 rounded-md h-11 rounded-l-none' width={30} src={download} alt=''/></button>
                    </div>
                    <div className='container flex mt-2'>
                        <button className='bg-primary w-28 rounded-md text-textcolor rounded-r-none font-poppins-medium border-r p-1'>Run Again</button>
                        <button><img className='bg-primary p-2 rounded-md h-11 rounded-l-none' width={36} src={reload} alt=''/></button>
                    </div>
                </div>        
            </div>
          <div className='container lg:grid grid-cols-2 mt-[50px]'>
            <div className='text-sm grid grid-cols-3  mt-6 w-[430px] m-auto font-poppins-medium'> 
              <h1 className='w-24'>SEO Score</h1>
                <div className='bg-gray mt-1 w-[250px] h-[11px] rounded-full'>
                  <p className='bg-iconcolor w-48 h-[11px] rounded-full'></p>
                </div>
              <h1 className='ml-28'>68%</h1>
              <p className='font-poppins-light m-auto mt-11 w-96'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio 
                incidunt fuga reiciendis sequi numquam unde corporis minus porro facere maiores? Lorem ipsum dolor sit amet,
                 consectetur adipisicing elit. Ea, sit?</p>
            </div>
            <div className=' w-96 sm:m-auto mt-6'>
              <h1 className='font-poppins-bold text-primary text-lg'>Overall Performance</h1>
              <div className='border-4 grid grid-cols-3 w-[445px] border-gray '>
                <div className='m-auto p-3 h-28  w-36 border-r-2 border-gray'>
                 <div className='flex'>
                  <h1 >Passed checks</h1>
                  <img className="m-auto " src={greentick}  alt=''/>
                 </div>
                  <h1 className='text-4xl font-poppins-regular pt-2 text-icongreen'>45</h1>
                </div>
                <div className='m-auto p-3 h-28  w-36 border-r-2 border-gray'>
                 <div className='flex'>
                  <h1 >Failed Checks</h1>
                  <img className="m-auto " src={cross}  alt=''/>
                 </div>
                  <h1 className='text-4xl font-poppins-regular pt-2 text-redish'>19</h1>
                </div>
                 <div className='m-auto p-3 h-28  w-36 '>
                 <div className='flex'>
                  <h1 >Warnings</h1>
                  <img className="m-1 " src={not}  alt=''/>
                 </div>
                  <h1 className='text-4xl font-poppins-regular pt-2 text-primary'>3</h1>
                </div>
              </div>
            </div>
           </div>
         </div>
          <div className='bg-textcolor h-36 '>    
            <div className=' mt-11 pt-9 pb-11 h-11 ml-11 mr-11 '>
              <div className='lg:flex border-4 text-xl border-gray'>
                <button  className='border-r-2 hidden lg:block border-gray  hover:bg-primary hover:text-textcolor  font-poppins-light p-4 '><Link to="/Reportissues" >issues to fix</Link></button>
                <button  className='border-r-2 hidden lg:block border-gray hover:bg-primary  hover:text-textcolor  font-poppins-light p-4 '>Common SEO issues</button>
                <button  className='border-r-2 hidden lg:block border-gray hover:bg-primary hover:text-textcolor  font-poppins-light p-4  '>Speed Optimization</button>
                <button  className='border-r-2 hidden lg:block border-gray hover:bg-primary  hover:text-textcolor font-poppins-light p-4 '>Server & Security</button>
                <button  className='border-r-2 hidden lg:block border-gray hover:bg-primary hover:text-textcolor  font-poppins-light p-4 '>Mobile Useability</button>
                <button  className=' hidden lg:block hover:bg-primary hover:text-textcolor  font-poppins-light p-4'>Advanced SEO</button>
                <a href="#0" className='block lg:hidden bg-primary text-textcolor w-full text-center py-3 px-4  text-white xl:rounded-l-none rounded-l-lg  rounded-r-lg bg-purple-600'>View All</a>
              </div>
            </div>
          </div>
          <div className='bg-textcolor ml-5 mr-5  mt-11'>
            <h1 className=' m-auto font-poppins-bold   p-11'>issues to fix</h1>
            <p className='border-b border-gray'></p>
            <div className='p-11 pt-0'>
              <div className='flex m-auto  mt-9'>
                <button className='bg-redish font-poppins-bold text-textcolor p-2 rounded-md w-24  m-auto '>High</button>
                <img className="p-2 m-auto" src={group} width={30}alt=''/>
                <p  className='mr-6 mt-2 ml-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repudiandae.</p>
              </div>
              <div className='flex m-auto  '>
                <button className='bg-redish font-poppins-bold text-textcolor p-2 rounded-md w-24  m-auto '>High</button>
                <img className="p-2 m-auto" src={group} width={30}alt=''/>
                <p className='mr-6 mt-2 ml-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repudiandae.</p>
              </div>
              <div className='flex m-auto  '>
                <button className='bg-redish font-poppins-bold text-textcolor p-2 rounded-md w-24  m-auto '>High</button>
                <img className="p-2 m-auto" src={group} width={30}alt=''/>
                <p className='mr-6 mt-2 ml-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repudiandae.</p>
              </div>
              <div className='flex m-auto  '>
                <button className='bg-redish font-poppins-bold text-textcolor p-2 rounded-md w-24  m-auto '>High</button>
                <img className="p-2 m-auto" src={group} width={30}alt=''/>
                <p className='mr-6 mt-2 ml-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repudiandae.</p>
              </div>
              <div className='flex m-auto  '>
                <button className='bg-redish font-poppins-bold text-textcolor p-2 rounded-md w-24  m-auto '>High</button>
                <img className="p-2 m-auto" src={group} width={30}alt=''/>
                <p className='mr-6 mt-2 ml-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repudiandae.</p>
              </div>
              <div className='flex m-auto '>
                <button className='bg-redish font-poppins-bold text-textcolor p-2 rounded-md w-24  m-auto '>High</button>
                <img className="p-2 m-auto" src={group} width={30}alt=''/>
                <p className='mr-6 mt-2 ml-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repudiandae.</p>
              </div>
              <div className='flex m-auto '>
                <button className='bg-lightorange font-poppins-bold  p-2 rounded-md w-24  m-auto '>Medium</button>
                <img className="p-2 m-auto" src={group} width={30}alt=''/>
                <p className='mr-6 mt-2 ml-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repudiandae.</p>
              </div>
              <div className='flex m-auto '>
                <button className='bg-lightorange font-poppins-bold  p-2 rounded-md w-24  m-auto '>Medium</button>
                <img className="p-2 m-auto" src={group} width={30}alt=''/>
                <p className='mr-6 mt-2 ml-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repudiandae.</p>
              </div>
              <div className='flex m-auto '>
                <button className='bg-lightorange font-poppins-bold  p-2 rounded-md w-24  m-auto '>Medium</button>
                <img className="p-2 m-auto" src={group} width={30}alt=''/>
                <p className='mr-6 mt-2 ml-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repudiandae.</p>
              </div>
              <div className='flex m-auto '>
                <button className='bg-lightorange font-poppins-bold p-2 rounded-md w-24  m-auto '>Medium</button>
                <img className="p-2 m-auto" src={group} width={30}alt=''/>
                <p className='mr-6 mt-2 ml-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repudiandae.</p>
              </div>
            </div>
          </div>
      </div>
      <div className='container lg:grid grid-cols-2 mt-[50px] '>
        <div className=' w-80 m-auto  '>
          <h1 className=' font-poppins-bold text-3xl '>Why delay? Elevate your website's SEO right now!</h1>
          <button className='bg-primary text-textcolor font-poppins-bold mt-6 p-2 rounded-md'>Let's do it</button>
        </div>
        <div className=' m-auto p-[50px] pt-0 text-lg '>
          <div className='container p-4 grid grid-cols-2  '>
           <img src={tick}/>
           <h1 className='border-b font-poppins-bold'>Complete website analyze</h1>
          </div>
          <div className='container p-4 grid grid-cols-2 '>
           <img src={tick}/>
           <h1 className='border-b  font-poppins-bold'>Website Monitoring</h1>
          </div>
          <div className='container p-4 grid grid-cols-2 '>
           <img src={tick}/>
           <h1 className='border-b  font-poppins-bold'>Detect Broken Links</h1>
          </div>
          <div className='container p-4 grid grid-cols-2'>
           <img src={tick}/>
           <h1 className='border-b  font-poppins-bold'>Track Side's Loading Speed</h1>
          </div>
          <div className='container p-4 grid grid-cols-2'>
           <img src={tick}/>
           <h1 className='border-b font-poppins-bold'>Technical Support</h1>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}
