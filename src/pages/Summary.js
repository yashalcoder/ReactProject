import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import img1 from '../images/Homeimg.png'
import SEOreports from '../images/SEO reports.png'
import Reports from '../images/Reports.png'
import Tools from '../images/Tools.png' 
import Analyze from '../images/Analyze.png'
import Contact from '../images/Contact.png'
import Monitor from '../images/Monitor.png' 
import img2 from '../images/img2.png'
import mask from '../images/Mask group.png'
import rectangle28 from '../images/Rectangle 28.png'
import rectangle29 from '../images/Rectangle 29.png'
import rectangle30 from '../images/Rectangle 30.png'
import tick from '../images/tick.png'
import increase from '../images/Increase.png'
export default function Summary() {

const handleCollapse = (event) => 
{
  let targetID = event.target.getAttribute('target-data');
  let targetElement = document.getElementById(targetID);
  if (targetElement)
    {
      targetElement.classList.toggle('hidden');
    }
}
    return (
    <>
      <Navbar/>
      <div className='bg-secondory font-main-Heading w-full'>
         <div className='container md:flex '>
             <div className='p-32'>
               <h1 className='text-5xl font-bold '>Increase Digital Worth & Boost Revenue</h1>
               <img className='p-4 pl-0' src={increase}/>
                  <div className='text-lg'>
                     <input className="p-2 rounded-md w-80 border " type='text' placeholder='Place url here!'/>
                     <button className='p-2 w-14 rounded-md ml-2 bg-primary text-textcolor'>Run</button>
                     <p className='w-60 pt-4'>Compete with your competitters with a strong social media voice</p>
                  </div>
             </div>
             <div className='p-16  '>
               <img src={img1} width={478} height={431.32} />
             </div>
         </div>
       </div>
       <div>
        <div className='p-4 w-80 m-auto'>
          <h1 className=' text-3xl font-bold '>SEO Cracks Tool Box</h1>
          <p className='pl-16'>Bundle of Features</p>
        </div> 
          <div className='container md:flex md:ml-0 ml-14'>
            <div className='w-72  ml-32 mt-9'>
              <img className='bg-primary p-2 m-auto rounded-full' src={Analyze} width={46} height={45.92}/>
              <h1 className='font-bold text-md ml-9'>Analyze your SEO issues</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Tempore cumque autem illum vero et, inventore minima veritatis at ad!</p>
            </div>
            <div className='w-72  ml-32 mt-9'>
              <img className='bg-primary p-2 m-auto rounded-full' src={Monitor} width={46} height={45.92}/>
              <h1 className='font-bold text-md ml-16'>SEO monitoring</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Tempore cumque autem illum vero et, inventore minima veritatis at ad!</p>
            </div>
            <div className='w-72  ml-32 mt-9'>
              <img className='bg-primary p-2 m-auto rounded-full' src={Contact} width={46} height={45.92}/>
              <h1 className='font-bold text-md ml-14'>Compititers' profile</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Tempore cumque autem illum vero et, inventore minima veritatis at ad!</p>
            </div>
          </div>
          <div className='container md:flex md:ml-0 ml-14'>
            <div className='w-72  ml-32 mt-9'>
              <img className='bg-primary p-3 m-auto rounded-full' src={Reports} width={46} height={45.92}/>
              <h1 className='font-bold text-md ml-24'> SEO  Reports</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Tempore cumque autem illum vero et, inventore minima veritatis at ad!</p>
            </div>
            <div className='w-72  ml-32 mt-9'>
              <img className='bg-primary p-2 m-auto rounded-full' src={SEOreports} width={46} height={45.92}/>
              <h1 className='font-bold text-md ml-16'>SEO reports you understand</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Tempore cumque autem illum vero et, inventore minima veritatis at ad!</p>
            </div>
            <div className='w-72  ml-32 mt-9'>
              <img className='bg-primary p-2 m-auto rounded-full' src={Tools} width={46} height={45.92}/>
              <h1 className='font-bold text-md ml-14'>Free Analyze tools</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Tempore cumque autem illum vero et, inventore minima veritatis at ad!</p>
            </div>
          </div>
         <div className='m-auto w-64 mt-14 mb-12'>
            <button className='bg-primary p-3 text-textcolor font-bold rounded-md'>Start Your Journey From Now!</button>
          </div>         
       </div>
       <div className='bg-secondory' >
          <p className='w-96 pl-16 pt-11 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Sequi qui commodi vel consectetur iusto consequatur est itaque
          </p>
          <div className='container flex w-96 m-auto ' >
            <h1 className='p-9 font-bold text-3xl '>FB</h1>
            <h1 className='p-9 font-bold text-3xl text-[#797575]'>Twitch</h1>
            <h1 className='p-9 font-bold text-3xl text-[#797575]'>Tube</h1>
          </div>
       </div>
       <div className='container md:flex'>
          <div className='m-32'>
            <img src={img2} width={400} height={490}/>
          </div>
          <div className='m-24'>
            <h1 className='text-primary font-bold text-3xl'>PREMIUM SERVICES</h1>
            <h2 className='font-bold'>SEO does't need to be difficult</h2>
            <p className='w-[500px]'>We provide a set of SEO tools to help you understand your website from a search engine's perspective.</p>
            <h2 className='font-bold'>Know when to act and improve</h2>
            <p className='w-[500px]'>Our SEO reports also let you know of any problems or technical shortcomings in your website that may 
              be hurting your search engine ranking.</p>
            <h2 className='font-bold'>Dedicated team of SEO professionals</h2>
            <p className='w-[500px]'>We've scene how algorithms,penalties and SEO factors have evolved since the early days of search.
              As SEO profeessionals and site owners.We know first hand where webmasters need to focus and spend their time.
            </p>
          </div>
       </div>
       <div className='text-textcolor bg-navfooter'>
            <h1 className='text-2xl pt-11 text-center  m-auto font-bold'>Establishing a trust & belief by boosting revenue.</h1>
            <div className='container md:flex mt-16'>
                 <div className='md:ml-36 ml-56  p-11'>
                  <h1 className='font-bold text-2xl'>1M+</h1>
                  <p>URL Checked</p>
                 </div>
                 <div className='ml-56 p-11'>
                  <h1 className='font-bold text-2xl'>56000+</h1>
                  <p>Customers</p>
                 </div>
                 <div className='ml-56 p-11'>
                  <h1 className='font-bold text-2xl'>66+</h1>
                  <p>Countories served</p>
                 </div>
            </div>
       </div>
      <div className='bg-secondory'>
        <div className='container md:flex p-9'>
          <div className='w-96 m-11 '>
            <h1 className='text-2xl font-bold '>We assist them to have great experiences.</h1>
            <p className='p-3 pl-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum odit architecto veniam.
               Ut velit, ea optio cumque ad omnis.</p>
            <p className='p-3 pl-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti illum deserunt dolores
               maiores necessitatibus ipsum saepe id sequi vero.</p>
            <div className='w-64 mt-4 '>
              <button className='bg-primary p-3 text-textcolor font-bold rounded-md'>Start Your Journey From Now!</button>
            </div> 
          </div>
          <div>
            <div className='bg-textcolor shadow-lg w-[360px] m-11 mb-2 h-[130px] rounded-2xl'>
              <div className=' container p-4 pb-0 flex'>
                <h1 className='bg-iconcolor w-11 p-2 rounded-full text-textcolor font-bold'>JA</h1>
                <h1 className=' ml-20 font-bold'>Jhon Alexander</h1>
              </div>
              <p className='p-6 pt-2'>Lorem ipsum dolor  adipisicing elit. Quae, modi nesciunt! Unde voluptatem hic fugit.</p>
            </div>
            <div className='bg-textcolor shadow-lg w-[360px] m-11 mt-0 mb-2 h-[130px] rounded-2xl'>
              <div className=' container p-4 pb-0 flex'>
                <h1 className='bg-iconcolor w-11 p-2 rounded-full text-textcolor font-bold'>JA</h1>
                <h1 className=' ml-20 font-bold'>Jhon Alexander</h1>
              </div>
              <p className='p-6 pt-2'>Lorem  adipisicing elit. Quae, modi nesciunt! Unde voluptatem hic fugit.</p>
            </div>
            <div className='bg-textcolor shadow-lg w-[360px] m-11 mt-0 h-[130px] rounded-2xl'>
              <div className=' container p-4 pb-0 flex'>
                <h1 className='bg-iconcolor w-11 p-2 rounded-full text-textcolor font-bold'>JA</h1>
                <h1 className=' ml-20 font-bold'>Jhon Alexander</h1>
              </div>
              <p className='p-6 pt-2'>Lorem ipsum dolor  adipisicing elit. Quae, modi nesciunt! Unde voluptatem hic fugit.</p>
            </div>
          </div>
          <div>
            <div className='bg-textcolor shadow-lg w-[360px] m-11 mb-2 h-[130px] rounded-2xl'>
              <div className=' container p-4 pb-0 flex'>
                <h1 className='bg-iconcolor w-11 p-2 rounded-full text-textcolor font-bold'>JA</h1>
                <h1 className=' ml-20 font-bold'>Jhon Alexander</h1>
              </div>
              <p className='p-6 pt-2'>Lorem ipsum dolor  adipisicing elit. Quae, modi nesciunt! Unde voluptatem hic fugit.</p>
            </div>
            <div className='bg-textcolor shadow-lg w-[360px] m-11 mt-0 mb-2 h-[130px] rounded-2xl'>
              <div className=' container p-4 pb-0 flex'>
                <h1 className='bg-iconcolor w-11 p-2 rounded-full text-textcolor font-bold'>JA</h1>
                <h1 className=' ml-20 font-bold'>Jhon Alexander</h1>
              </div>
              <p className='p-6 pt-2'>Lorem  adipisicing elit. Quae, modi nesciunt! Unde voluptatem hic fugit.</p>
            </div>
            <div className='bg-textcolor shadow-lg w-[360px] m-11 mt-0 h-[130px] rounded-2xl'>
              <div className=' container p-4 pb-0 flex'>
                <h1 className='bg-iconcolor w-11 p-2 rounded-full text-textcolor font-bold'>JA</h1>
                <h1 className=' ml-20 font-bold'>Jhon Alexander</h1>
              </div>
              <p className='p-6 pt-2 '>Lorem ipsum dolor  adipisicing elit. Quae, modi nesciunt! Unde voluptatem hic fugit.</p>
            </div>
          </div>
        
        </div>
      </div>
      <div className='bg-navfooter'>
         <h1 className='text-center text-primary p-4 font-bold text-2xl'>Enjoy Your Own Dashboard</h1>
          <div className='container md:flex'>
            <div className='m-11 ml-32'>
              <img src={mask} width={532} height={384}/>
              <h1 className='text-center text-textcolor font-bold p-6 text-2xl '>Everything you need</h1>
              <p className='w-[470px] text-textcolor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam earum sint,Lorem ipsum dolor sit.
                similique sed velit quasi id totam possimus aliquam amet Lorem ipsum dolor sit amet.</p>
              <div className='m-9 ml-0'>
                <button className="rounded-lg flex text-primary bg-textcolor p-2 bg-gray-100" onClick={handleCollapse} target-data="collapseButton1">
                 Learn more
                </button>
                <div className="hidden text-textcolor" id="collapseButton1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1Nullam vel suscipit velit.
                </div>
              </div>  
            </div>
            <div className='m-11 ml-32'>
              <img src={rectangle28} width={532} height={384}/>
              <h1 className='text-center text-textcolor font-bold p-6 text-2xl '>Custom branded SEO reports</h1>
              <p className='w-[470px] text-textcolor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam earum sint,Lorem ipsum dolor sit.
                similique sed velit quasi id totam possimus aliquam amet Lorem ipsum dolor sit amet.</p>
              <div className='m-9 ml-0'>
                <button className="rounded-lg flex text-primary bg-textcolor p-2 bg-gray-100" onClick={handleCollapse} target-data="collapseButton2">
                 Learn more
                </button>
                <div className="hidden text-textcolor" id="collapseButton2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel suscipit velit.
                </div>
              </div>  
            </div>
          </div>
          <div className='container md:flex pb-6'>
            <div className='m-11 ml-32'>
              <img src={rectangle29} width={532} height={384}/>
              <h1 className='text-center text-textcolor font-bold p-6 text-2xl '>Analyze compititers strategy</h1>
              <p className='w-[470px] text-textcolor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam earum sint,Lorem ipsum dolor sit.
                similique sed velit quasi id totam possimus aliquam amet Lorem ipsum dolor sit amet.</p>
              <div className='m-9 ml-0'>
                <button className="rounded-lg flex text-primary bg-textcolor p-2 bg-gray-100" onClick={handleCollapse} target-data="collapseButton3">
                 Learn more
                </button>
                <div className="hidden text-textcolor" id="collapseButton3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel suscipit velit.
                </div>
              </div>
            </div>
            <div className='m-11 ml-32'>
              <img src={rectangle30} width={532} height={384}/>
              <h1 className='text-center text-textcolor font-bold p-6 text-2xl '>Check website's back links</h1>
              <p className='w-[470px] text-textcolor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam earum sint,Lorem ipsum dolor sit.
                similique sed velit quasi id totam possimus aliquam amet Lorem ipsum dolor sit amet.</p>
                <div className='m-9 ml-0'>
                  <button className="rounded-lg flex text-primary bg-textcolor p-2 bg-gray-100" onClick={handleCollapse} target-data="collapseButton4">
                   Learn more
                  </button>
                  <div className="hidden text-textcolor" id="collapseButton4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel suscipit velit.
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div className='container md:flex'>
        <div className='m-36'>
            <h1 className=' font-bold text-3xl w-80'>Why delay? Elevate your website's SEO right now!</h1>
            <button className='bg-primary text-textcolor font-bold mt-6 p-2 rounded-md'>Let's do it</button>
        </div>
        <div className='m-36'>
          <div className='container flex '>
            <img src={tick}/>
            <h1 className='border-b ml-20 font-bold'>Complete website analyze</h1>
          </div>
          <div className='container flex m-4 ml-0'>
            <img src={tick}/>
            <h1 className='border-b ml-20 font-bold'>Websit monitoring</h1>
          </div>
          <div className='container flex  m-4 ml-0 '>
            <img src={tick}/>
            <h1 className='border-b ml-20 font-bold'>Detect Broken Links</h1>
          </div>
          <div className='container flex  m-4 ml-0'>
            <img src={tick}/>
            <h1 className='border-b ml-20 font-bold'>Track Site's Loading Speed</h1>
          </div>
          <div className='container flex  m-4 ml-0'>
            <img src={tick}/>
            <h1 className='border-b ml-20 font-bold'>Technical Sport</h1>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    )
}
