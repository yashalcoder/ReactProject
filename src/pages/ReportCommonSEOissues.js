import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import download from '../images/download.png'
import reload from '../images/reload.png'
import tick from '../images/tick.png'
import greentick from '../images/greentick.png'
import cross from '../images/cross.png'
import not from '../images/not.png'
import dot from '../images/dot.png'
import { Link } from 'react-router-dom'
export default function ReportCommonSEOissues() {
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
                <Link to="/Reportissues" ><button  className='border-r-2 hidden lg:block border-gray  hover:bg-primary hover:text-textcolor  font-poppins-light p-4 '>issues to fix</button></Link>
                <Link to="/ReportCommonSEOissues" ><button  className='border-r-2 hidden lg:block border-gray hover:bg-primary  hover:text-textcolor  font-poppins-light p-4 '>Common SEO issues</button></Link>
                <button  className='border-r-2 hidden lg:block border-gray hover:bg-primary hover:text-textcolor  font-poppins-light p-4  '>Speed Optimization</button>
                <button  className='border-r-2 hidden lg:block border-gray hover:bg-primary  hover:text-textcolor font-poppins-light p-4 '>Server & Security</button>
                <button  className='border-r-2 hidden lg:block border-gray hover:bg-primary hover:text-textcolor  font-poppins-light p-4 '>Mobile Useability</button>
                <button  className=' hidden lg:block hover:bg-primary hover:text-textcolor  font-poppins-light p-4'>Advanced SEO</button>
                <a href="#0" className='block lg:hidden bg-primary text-textcolor w-full text-center py-3 px-4  text-white xl:rounded-l-none rounded-l-lg  rounded-r-lg bg-purple-600'>View All</a>
              </div>
            </div>
          </div>
          <div className='bg-textcolor ml-6 mr-4 mt-4'>
            <div className='lg:grid grid-cols-2'>
              <h1 className='font-poppins-bold text-lg pt-6 w-96 m-auto'>Common SEO issues</h1>   
              <div className='flex w-96 m-auto  pt-6 '>
                <div className='m-1'>
                    <div className='flex font-poppins-medium gap-1'>
                      <h1>Score: </h1>
                      <p className='text-iconcolor'>84</p>
                    </div>
                    <p className='bg-gray w-24 h-3 rounded-full'>
                      <div className='bg-iconcolor w-20 h-3 rounded-full'></div>
                    </p> 
                </div>
                <div className='m-1' >
                  <div className='flex font-poppins-medium gap-1'>
                    <h1>Passed: </h1>
                    <p className='text-icongreen'>8</p>
                  </div>
                  <p className='bg-gray w-24 h-3 rounded-full'>
                    <div className='bg-icongreen w-20 h-3 rounded-full'></div>
                  </p> 
                </div>
                <div className='m-1'>
                  <div className='flex font-poppins-medium gap-1'>
                    <h1>Failed: </h1>
                    <p className='text-redish'>1</p>
                  </div>
                  <p className=' bg-gray w-24 h-3 rounded-full'>
                    <div className=' bg-redish w-2 h-3 rounded-full'></div>
                  </p> 
                </div>
                <div className='m-1 '>
                  <div className='flex font-poppins-medium gap-1'>
                    <h1>Warnings: </h1>
                    <p className='text-iconcolor'>1</p>
                  </div>
                  <p className='bg-gray w-24 h-3 rounded-full'>
                    <div className='bg-iconcolor w-2 h-3 rounded-full'></div>
                  </p> 
                </div>
              </div>
            </div>
         {/*    <p className='border-b-2 border-gray mt-4 mb-4'></p>
            <div className='lg:grid grid-cols-2'>
              <div className=' w-96 m-auto mt-6'>
                <img className='p-1 inline-block' src={greentick}/>
                <p className='inline-block font-poppins-medium '>Meta Tittle Test</p>
                <div className='block opacity-30 ml-6'>100% of top 100 sites passed</div>
              </div>
              <div className=' m-auto w-[400px]'>
                <p className='opacity-30 m-3'>This webpage is using a tittle tag</p>
                <div className='p-4 m-3 bg-gray w-[400px] border-l-4 font-poppins-medium border-icongreen'>
                  <p className='flex gap-2'>Text:<p className='opacity-40'> Name of the meta tittle</p></p>
                  <p className='flex gap-2'>Lenght:<p className='opacity-40'>Length of characters</p></p>
                </div>
              </div>
            </div>
            <p className='border-b-2 border-gray mt-4 mb-4'></p>
            <div className='lg:grid grid-cols-2'>
              <div className=' w-96 m-auto mt-6'>
                <img className='p-1 inline-block' src={not}/>
                <p className='inline-block font-poppins-medium '>Meta Description Test</p>
                <div className='block opacity-30 ml-6'>100% of top 100 sites passed</div>
              </div>
              <div className=' m-auto w-[400px]'>
                <p className='opacity-30 m-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et tempora facilis tenetur
                 fuga in ab iste libero molestiae optio expedita!</p>
                <div className='p-4 m-3 bg-gray w-[400px] border-l-4 font-poppins-medium border-icongreen'>
                  <p className='flex gap-2'>Text:<p className='opacity-40'> Name of the meta tittle</p></p>
                  <p className='flex gap-2'>Lenght:<p className='opacity-40'>Length of characters</p></p>
                </div>
              </div>
            </div>
            <p className='border-b-2 border-gray mt-4 mb-4'></p> 
              <div className='lg:grid grid-cols-2'>
              <div className=' w-96 border m-auto mt-6'>
                <img className='p-1 inline-block' src={dot}/>
                <p className='inline-block font-poppins-medium '>Google Search Results Preview Test</p>
              </div>
              <div className=' border m-auto w-[400px] '>
                <p className='opacity-30 m-3 font-poppins-medium'>Desktop Version</p>
                <div className='p-4 m-3 border-8 font-poppins-medium border-gray'>
                  <a href="https://www.facebook.com/" className=' text-icongreen'>https://www.facebook.com/</a>
                  <p className='text-darkblue flex gap-2'>Facebook - log in or sign up</p>
                  <p className='opacity-40 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque commodi laborum aliquid culpa aspernatur
                     numquam omnis ipsam possimus exercitationem.</p>
                </div>
              </div>
            </div> */}
                <p className='border-b-2 border-gray mt-4 mb-4'></p>
            <div className='lg:grid grid-cols-2'>
              <div className=' w-96 m-auto mt-6'>
                <img className='p-1 inline-block' src={greentick}/>
                <p className='inline-block font-poppins-medium '>Meta Tittle Test</p>
                <div className='block opacity-30 ml-6'>100% of top 100 sites passed</div>
              </div>
              <div className=' m-auto lg:mr-0 lg:-ml-32 lg:w-[627px]'>
                <p className='opacity-30 m-3'>This webpage is using a tittle tag</p>
                <div className='p-4 m-3 bg-gray   border-l-4 font-poppins-medium border-icongreen'>
                  <p className='flex gap-2'>Text:<p className='opacity-40'> Name of the meta tittle</p></p>
                  <p className='flex gap-2'>Lenght:<p className='opacity-40'>Length of characters</p></p>
                </div>
              </div>
            </div>
            <p className='border-b-2 border-gray mt-4 mb-4'></p>
            <div className='lg:grid grid-cols-2'>
              <div className=' w-96 m-auto mt-6'>
                <img className='p-1 inline-block' src={not}/>
                <p className='inline-block font-poppins-medium '>Meta Description Test</p>
                <div className='block opacity-30 ml-6'>100% of top 100 sites passed</div>
              </div>
              <div className=' m-auto lg:mr-0 lg:-ml-32 lg:w-[627px]'>
                <p className='opacity-30 m-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et tempora facilis tenetur
                 fuga in ab iste libero molestiae optio expedita!</p>
                <div className='p-4 m-3 bg-gray  border-l-4 font-poppins-medium border-icongreen'>
                  <p className='flex gap-2'>Text:<p className='opacity-40'> Name of the meta tittle</p></p>
                  <p className='flex gap-2'>Lenght:<p className='opacity-40'>Length of characters</p></p>
                </div>
              </div>
            </div> 
            <p className='border-b-2 border-gray mt-4 mb-4'></p>
            <div className='lg:grid grid-cols-2'>
              <div className=' w-96 m-auto mt-6'>
                <img className='p-1 inline-block' src={dot}/>
                <p className='inline-block font-poppins-medium '>Google Search Results Preview Test</p>
              </div>
              <div className='  m-auto lg:mr-0 lg:-ml-32 lg:w-[627px] '>
                <p className='opacity-30 m-3 font-poppins-medium'>Desktop Version</p>
                <div className='p-4 m-3 border-8 font-poppins-medium border-gray'>
                  <a href="https://www.facebook.com/" className=' text-icongreen'>https://www.facebook.com/</a>
                  <p className='text-darkblue flex gap-2'>Facebook - log in or sign up</p>
                  <p className='opacity-40 lg:w-[580px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque commodi laborum aliquid </p>
                </div>
                <div className='  m-auto lg:mr-0 lg:ml-0 w-[400px] '>
                  <p className='opacity-30 m-3 font-poppins-medium'>Mobile Version</p>
                  <div className='p-4 m-3 border-8 font-poppins-medium border-gray'>
                    <a href="https://www.facebook.com/" className=' text-icongreen'>https://www.facebook.com/</a>
                    <p className='text-darkblue flex gap-2'>Facebook - log in or sign up</p>
                    <p className='opacity-40 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque commodi laborum aliquid </p>
                  </div>
                </div>
              </div>
            </div>
            <p className='border-b-2 border-gray mt-4 mb-4'></p>
            <div className='lg:grid grid-cols-2'>
              <div className=' w-96 m-auto mt-6'>
                <img className='p-1 inline-block' src={greentick}/>
                <p className='inline-block font-poppins-medium '>Social Media Meta Tags Test</p>
                <div className='block opacity-30 ml-6'>83% of top 100 sites passed</div>
              </div>
              {/* <div className=' m-auto lg:mr-0 text-sm lg:-ml-32 lg:w-[627px] '>
                <p className='  m-3 opacity-30 font-poppins-medium'>This website is using social media meta tags</p>
                <div className='m-3 font-poppins-medium'>
                  <p className='bg-secondory '><p className='p-2 opacity-30'>Open graph meta tags</p></p>
                 <p className='flex opacity-30 gap-11 p-2'>og: site_name<p>Facebook</p></p>
                 <p className='border-b-2 border-gray  '></p>
                  <p className='flex opacity-30 gap-11 p-2'>og: site_url<p>htttps://www.facebook.com/</p></p>
                  <p className='border-b-2 border-gray '></p>
                  <p className='flex opacity-30 gap-11 p-2'>og: site_image<p>https://www.facebook.com/images/fb_icon_325_325.png</p></p>
                  <p className='border-b-2 border-gray  '></p>
                  <p className='flex opacity-30 gap-12 p-2'>og: site_locale<p>en_US</p></p>
                  <p className='border-b-2 border-gray  '></p> 
                </div>
              </div>*/}
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
