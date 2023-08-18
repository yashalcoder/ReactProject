import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../images/Homeimg.png";
import SEOreports from "../images/SEO reports.png";
import Reports from "../images/Reports.png";
import Tools from "../images/Tools.png";
import Analyze from "../images/Analyze.png";
import Contact from "../images/Contact.png";
import Monitor from "../images/Monitor.png";
import img2 from "../images/img2.png";
import mask from "../images/Mask group.png";
import rectangle28 from "../images/Rectangle 28.png";
import rectangle29 from "../images/Rectangle 29.png";
import rectangle30 from "../images/Rectangle 30.png";
import tick from "../images/tick.png";
export default function Home() {
  const handleCollapse = (event) => {
    let targetID = event.target.getAttribute("target-data");
    let targetElement = document.getElementById(targetID);
    if (targetElement) {
      targetElement.classList.toggle("hidden");
    }
  };
  return (
    <>
      <Navbar />

    <div className='bg-secondory '>
        <div className='container lg:grid grid-cols-2'>
          <div className='w-96 m-auto pt-[50px]'>
           <h1 className='text-4xl font-poppins-bold '>SEO For Consistent Bussiness Growth</h1>
           <p className='mt-4 font-poppins-medium'>Monitor your site with us</p>
           <div className='text-lg  grid grid-cols-2 gap-64'>
              <div className='mt-6'>
                 <input className="p-2 rounded-md w-80 border font-poppins-medium" type='text' placeholder='Place url here!'/>
              </div> 
              <div className='m-0 mt-4'>
                <button className='p-2 m-2 w-14 rounded-md font-poppins-medium bg-primary text-textcolor'>Run</button>
              </div>
            </div>
            <p className='w-72 font-bold pt-4 font-poppins-bold'>Compete with your competitters with a strong social media voice</p>
          </div>
          <div className='m-auto w-[400px] mt-[50px] mb-[50px]'>
           <img src={img1} alt=''/>
          </div>
        </div>
      </div> 
      <div className="mt-[50px] mb-[50px]">
        <div className="p-4 w-80 m-auto ">
          <h1 className=" text-3xl w-96 font-poppins-bold ">
            SEO Cracks Tool Box
          </h1>
          <p className="pl-16 p-4 font-poppins-regular">Bundle of Features</p>
        </div>
        <div className="lg:grid grid-cols-3 m-20 mt-0">
          <div>
            <img
              className="bg-primary p-3 m-auto mt-6 rounded-full"
              src={Analyze}
              width={60}
              height={45.92}
            />
            <h1 className="font-bold text-md m-auto w-52 font-poppins-medium ">
              Analyze your SEO issues
            </h1>
            <p className="m-auto w-80  font-poppins-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              cumque autem illum vero et, inventore minima veritatis at ad!
            </p>
            <div>
              <img
                className="bg-primary  pl-4 pr-4 pt-3 mt-6 pb-3 m-auto rounded-full"
                src={Reports}
                width={60}
                height={45.92}
              />
              <h1 className="font-bold text-md m-auto w-28 font-poppins-medium ">
                {" "}
                SEO Reports
              </h1>
              <p className="m-auto w-80 font-poppins-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore cumque autem illum vero et, inventore minima veritatis
                at ad!
              </p>
            </div>
          </div>
          <div>
            <img
              className="bg-primary p-3 m-auto mt-6 rounded-full"
              src={Monitor}
              width={60}
              height={45.92}
            />
            <h1 className="font-bold text-md m-auto w-32 font-poppins-medium ">
              SEO monitoring
            </h1>
            <p className="m-auto  w-80 font-poppins-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              cumque autem illum vero et, inventore minima veritatis at ad!
            </p>
            <div>
              <img
                className="bg-primary p-3 m-auto mt-6 rounded-full"
                src={SEOreports}
                width={60}
                height={45.92}
              />
              <h1 className="font-bold text-md m-auto w-60 font-poppins-medium">
                SEO reports you understand
              </h1>
              <p className="m-auto  w-80 font-poppins-light ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore cumque autem illum vero et, inventore minima veritatis
                at ad!
              </p>
            </div>
          </div>
          <div>
            <img
              className="bg-primary p-3 m-auto mt-6 rounded-full"
              src={Contact}
              width={60}
              height={45.92}
            />
            <h1 className="font-bold text-md m-auto w-40 font-poppins-medium">
              Compititers' profile
            </h1>
            <p className="m-auto  w-80 font-poppins-light ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              cumque autem illum vero et, inventore minima veritatis at ad!
            </p>
            <div>
              <img
                className="bg-primary p-3 m-auto mt-6 rounded-full"
                src={Tools}
                width={60}
                height={45.92}
              />
              <h1 className="font-bold text-md m-auto w-40  font-poppins-medium">
                Free Analyze tools
              </h1>
              <p className="m-auto  w-80 font-poppins-light ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore cumque autem illum vero et, inventore minima veritatis
                at ad!
              </p>
            </div>
          </div>
        </div>
        <div className="  w-60 m-auto ">
          <button className="bg-primary text-textcolor font-poppins-bold   rounded-lg p-4">
            Start Your Journey Now!
          </button>
        </div>
      </div>
      <div className="bg-secondory">
        <p className="w-96 pl-16  m-auto "></p>
        <div className="container flex w-96 m-auto ">
          <div className="font-poppins-bold">
            <div
              className="hidden className='pl-16  pt-[50px] w-28 m-auto  "
              id="collapseButton5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel suscipit velit.
            </div>
            <button
              className=" p-6 text-3xl text-[#797575] hover:text-blackish"
              onClick={handleCollapse}
              target-data="collapseButton5"
            >
              FB
            </button>
          </div>
          <div className="ml-9 font-poppins-bold">
            <div
              className="hidden className='pl-16  pt-[50px] w-28 m-auto  "
              id="collapseButton6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel suscipit velit.
            </div>
            <button
              className=" p-6  text-3xl text-[#797575] hover:text-blackish"
              onClick={handleCollapse}
              target-data="collapseButton6"
            >
              Twitch
            </button>
          </div>
          <div className="ml-9  font-poppins-bold">
            <div
              className="hidden className='pl-16  pt-[50px] w-28 m-auto  "
              id="collapseButton7"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel suscipit velit.
            </div>
            <button
              className=" p-6  text-3xl text-[#797575] hover:text-blackish"
              onClick={handleCollapse}
              target-data="collapseButton7"
            >
              Tube
            </button>
          </div>
        </div>
      </div>
      <div className="container lg:grid grid-cols-2">
        <div className=" m-auto mt-[50px] mb-[50px]">
          <img className="m-auto" src={img2} width={400} height={490} alt="" />
        </div>
        <div className=" ">
          <div className="m-auto mt-[50px] pl-11 w-[450px] ">
            <h1 className="text-primary font-poppins-bold text-3xl ">
              PREMIUM SERVICES
            </h1>
            <h2 className=" mt-6 font-poppins-bold">
              SEO does't need to be difficult
            </h2>
            <p className="w-[400px] mt-2 font-poppins-light">
              We provide a set of SEO tools to help you understand your website
              from a search engine's perspective.
            </p>
            <h2 className=" mt-2 font-poppins-bold">
              Know when to act and improve
            </h2>
            <p className="w-[400px] mt-2 font-poppins-light">
              Our SEO reports also let you know of any problems or technical
              shortcomings in your website that may be hurting your search
              engine ranking.
            </p>
            <h2 className="mt-2 font-poppins-bold">
              Dedicated team of SEO professionals
            </h2>
            <p className="w-[400px] mt-2 mb-9 font-poppins-light">
              We've scene how algorithms,penalties and SEO factors have evolved
              since the early days of search. As SEO profeessionals and site
              owners.We know first hand where webmasters need to focus and spend
              their time.
            </p>
          </div>
        </div>
      </div>
      <div className="text-textcolor bg-navfooter font-poppins-bold">
        <h1 className="text-2xl text-center pt-[50px] m-auto ">
          Establishing a trust & belief by boosting revenue.
        </h1>
        <div className="container grid grid-cols-3">
          <div className="m-auto mt-11 mb-[50px]">
            <h1 className=" text-2xl">1M+</h1>
            <p className="font-poppins-medium">URL Checked</p>
          </div>
          <div className="m-auto">
            <h1 className=" text-2xl">56000+</h1>
            <p className="font-poppins-medium">Customers</p>
          </div>
          <div className="m-auto">
            <h1 className=" text-2xl">66+</h1>
            <p className="font-poppins-medium">Countories served</p>
          </div>
        </div>
      </div>
      <div className="bg-secondory">
        <div className="container lg:grid grid-cols-3">
          <div className="w-72 m-auto lg:mr-0  pt-[50px] pb-[50px]">
            <h1 className="text-2xl font-poppins-bold p-2">
              We assist them to have great experiences.
            </h1>
            <p className="p-2 font-poppins-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              illum odit architecto veniam. Ut velit, ea optio cumque ad omnis.
            </p>
            <p className="p-2 font-poppins-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              corrupti illum deserunt dolores maiores necessitatibus ipsum saepe
              id sequi vero.
            </p>
            <button className="bg-primary m-3 ml-0 p-3 text-textcolor font-poppins-medium rounded-md">
              Start Your Journey From Now!
            </button>
          </div>
          <div className="w-96 m-auto lg:ml-0 pt-[50px] pb-[50px]">
            <div className="bg-textcolor shadow-lg w-[330px] mb-2 m-auto h-[130px] rounded-2xl">
              <div className=" container p-4 pb-0 flex font-poppins-bold">
                <h1 className="bg-iconcolor w-12 p-3 rounded-full text-textcolor ">
                  JA
                </h1>
                <h1 className=" ml-11 text-lg">Jhon Alexander</h1>
              </div>
              <p className="p-6 pt-2">
                Lorem ipsum dolor Quae, modi nesciunt! Unde voluptatem hic
                fugit.
              </p>
            </div>
            <div className="bg-textcolor shadow-lg w-[330px] mb-2 m-auto h-[130px] rounded-2xl">
              <div className=" container p-4 pb-0 flex font-poppins-bold">
                <h1 className="bg-iconcolor w-12 p-3 rounded-full text-textcolor ">
                  JA
                </h1>
                <h1 className=" ml-11 text-lg">Jhon Alexander</h1>
              </div>
              <p className="p-6 pt-2">
                Lorem ipsum dolor Quae, modi nesciunt! Unde voluptatem hic
                fugit.
              </p>
            </div>
            <div className="bg-textcolor shadow-lg w-[330px] m-auto h-[130px] rounded-2xl">
              <div className=" container p-4 pb-0 flex font-poppins-bold">
                <h1 className="bg-iconcolor w-12 p-3 rounded-full text-textcolor ">
                  JA
                </h1>
                <h1 className=" ml-11 text-lg">Jhon Alexander</h1>
              </div>
              <p className="p-6 pt-2">
                Lorem ipsum dolor Quae, modi nesciunt! Unde voluptatem hic
                fugit.
              </p>
            </div>
          </div>
          <div className="w-96 m-auto lg:-ml-14 pt-[50px] pb-[50px]">
            <div className="bg-textcolor shadow-lg w-[330px] mb-2 m-auto h-[130px] rounded-2xl">
              <div className=" container p-4 pb-0 flex font-poppins-bold">
                <h1 className="bg-iconcolor w-12 p-3 rounded-full text-textcolor">
                  JA
                </h1>
                <h1 className=" ml-11 text-lg">Jhon Alexander</h1>
              </div>
              <p className="p-6 pt-2">
                Lorem ipsum dolor Quae, modi nesciunt! Unde voluptatem hic
                fugit.
              </p>
            </div>
            <div className="bg-textcolor shadow-lg w-[330px] mb-2 m-auto h-[130px] rounded-2xl">
              <div className=" container p-4 pb-0 flex font-poppins-bold">
                <h1 className="bg-iconcolor w-12 p-3 rounded-full text-textcolor ">
                  JA
                </h1>
                <h1 className=" ml-11 text-lg ">Jhon Alexander</h1>
              </div>
              <p className="p-6 pt-2">
                Lorem ipsum dolor Quae, modi nesciunt! Unde voluptatem hic
                fugit.
              </p>
            </div>
            <div className="bg-textcolor shadow-lg w-[330px] m-auto h-[130px] rounded-2xl">
              <div className=" container p-4 pb-0 flex font-poppins-bold">
                <h1 className="bg-iconcolor w-12 p-3 rounded-full text-textcolor ">
                  JA
                </h1>
                <h1 className=" ml-11 text-lg ">Jhon Alexander</h1>
              </div>
              <p className="p-6 pt-2">
                Lorem ipsum dolor Quae, modi nesciunt! Unde voluptatem hic
                fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-navfooter">
        <h1 className="text-center text-primary font-poppins-bold text-2xl p-6 pt-[50px]">
          Enjoy Your Own Dashboard
        </h1>
        <div className="container lg:grid grid-cols-2">
          <div className="w-[400px] m-auto mt-11">
            <img src={mask} width={400} height={384} />
            <h1 className=" text-textcolor font-poppins-bold p-6 text-2xl pl-0">
              Everything you need
            </h1>
            <p className=" text-textcolor font-poppins-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              earum sint,Lorem ipsum dolor sit. similique sed velit quasi id
              totam possimus aliquam amet Lorem ipsum dolor sit amet.
            </p>
            <div className="m-9 ml-0">
              <button
                className="rounded-lg flex font-poppins-bold text-primary bg-textcolor p-2 bg-gray-100"
                onClick={handleCollapse}
                target-data="collapseButton1"
              >
                Learn more
              </button>
              <div className="hidden text-textcolor" id="collapseButton1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1Nullam
                vel suscipit velit.
              </div>
            </div>
          </div>
          <div className=" w-[400px] m-auto mt-11">
            <img src={rectangle28} width={400} height={384} />
            <h1 className=" text-textcolor font-poppins-bold p-6 text-2xl pl-0">
              Custom branded SEO reports
            </h1>
            <p className=" text-textcolor font-poppins-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              earum sint,Lorem ipsum dolor sit. similique sed velit quasi id
              totam possimus aliquam amet Lorem ipsum dolor sit amet.
            </p>
            <div className="m-9 ml-0">
              <button
                className="rounded-lg font-poppins-bold flex text-primary bg-textcolor p-2 bg-gray-100"
                onClick={handleCollapse}
                target-data="collapseButton2"
              >
                Learn more
              </button>
              <div className="hidden text-textcolor" id="collapseButton2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1Nullam
                vel suscipit velit.
              </div>
            </div>
          </div>
        </div>
        <div className="container lg:grid grid-cols-2">
          <div className="w-[400px] m-auto mt-11 ">
            <img src={rectangle29} width={400} height={384} />
            <h1 className=" text-textcolor font-poppins-bold  p-6 text-2xl pl-0 ">
              Analyze competiters strategy
            </h1>
            <p className=" text-textcolor font-poppins-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              earum sint,Lorem ipsum dolor sit. similique sed velit quasi id
              totam possimus aliquam amet Lorem ipsum dolor sit amet.
            </p>
            <div className="m-9 ml-0">
              <button
                className="rounded-lg font-poppins-bold flex text-primary bg-textcolor p-2 bg-gray-100"
                onClick={handleCollapse}
                target-data="collapseButton3"
              >
                Learn more
              </button>
              <div className="hidden text-textcolor" id="collapseButton3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1Nullam
                vel suscipit velit.
              </div>
            </div>
          </div>
          <div className=" w-[400px] m-auto mt-11 pb-[50px]">
            <img src={rectangle30} width={400} height={384} />
            <h1 className=" text-textcolor font-poppins-bold p-6 text-2xl pl-0">
              Check website's back links
            </h1>
            <p className=" text-textcolor font-poppins-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              earum sint,Lorem ipsum dolor sit. similique sed velit quasi id
              totam possimus aliquam amet Lorem ipsum dolor sit amet.
            </p>
            <div className="m-9 ml-0">
              <button
                className="rounded-lg font-poppins-bold flex text-primary bg-textcolor p-2 bg-gray-100"
                onClick={handleCollapse}
                target-data="collapseButton4"
              >
                Learn more
              </button>
              <div className="hidden text-textcolor" id="collapseButton4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1Nullam
                vel suscipit velit.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container lg:grid grid-cols-2 mt-[50px] ">
        <div className=" w-80 m-auto  ">
          <h1 className=" font-poppins-bold text-3xl ">
            Why delay? Elevate your website's SEO right now!
          </h1>
          <button className="bg-primary text-textcolor font-poppins-bold mt-6 p-2 rounded-md">
            Let's do it
          </button>
        </div>
        <div className=" m-auto p-[50px] pt-0 text-lg ">
          <div className="container p-4 grid grid-cols-2  ">
            <img src={tick} />
            <h1 className="border-b font-poppins-bold">
              Complete website analyze
            </h1>
          </div>
          <div className="container p-4 grid grid-cols-2 ">
            <img src={tick} />
            <h1 className="border-b  font-poppins-bold">Website Monitoring</h1>
          </div>
          <div className="container p-4 grid grid-cols-2 ">
            <img src={tick} />
            <h1 className="border-b  font-poppins-bold">Detect Broken Links</h1>
          </div>
          <div className="container p-4 grid grid-cols-2">
            <img src={tick} />
            <h1 className="border-b  font-poppins-bold">
              Track Side's Loading Speed
            </h1>
          </div>
          <div className="container p-4 grid grid-cols-2">
            <img src={tick} />
            <h1 className="border-b font-poppins-bold">Technical Support</h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
