/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { RxHamburgerMenu } from "react-icons/rx";


import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoClose, IoHomeOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { RiShieldUserLine } from "react-icons/ri";
import { FiCodesandbox } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = ({ logout, user, cart }) => {
  const router = useRouter()
  const [dropdown, setdropdown] = useState(false)
  const [navDropdown, setNavDropDown] = useState(false)
  const [input, setinput] = useState()
  const [result, setResult] = useState([])
  const toggledropdown = () => {
    setdropdown(true)
  }
  //  console.log(result[0].name)
  const [userInfo, setuserInfo] = useState()

  useEffect(() => {
    const USER_INFO = JSON.parse(localStorage.getItem("myuser"))
    if (USER_INFO) {
      const USER_NAME = USER_INFO["name"]
      const NAMES = USER_NAME.split(" ")
      if (NAMES[0].length > 8) setuserInfo(NAMES[0].substr(0, 8))
      else setuserInfo(NAMES[0])
    }



  }, [router.query])
  // const u = JSON.parse(userInfo.value)
  const getUser = () => {


  }
  const toggleClosedropdown = () => {
    setdropdown(false)
  }
  const check = () => {
    setdropdown(false)

    // console.log(dropdown)
    logout()
    setuserInfo('')
  }
  const handleClick = () => {
    if (dropdown) toggleClosedropdown()
    if (!dropdown) toggledropdown()
  }
  const ref = useRef()
  const handleChange = async(e)=>{

   

  
    
  }
  console.log(userInfo)
  return (<>
    <div className='flex flex-col w-full  tab:justify-center tab:space-x-[12px] medium:space-x-5  xl:justify-center md:flex-row justify-center items-center py-3 tab:py-1 md:mb-2 bg-lav shadow-sm sticky top-0 bg-white z-10'>
      <div className="logo flex w-screen tab:w-auto justify-between tab:justify-center px-3 tab:px-0">

        <Link href={'/'}><img src={'/Logo.PNG'} className='ml-5  min-w-[150px]' alt='Logo' width={200} height={40}></img>
        </Link>
        <div className=' tab:hidden flex space-x-4  rounded-md px-1.5 py-1'>
        <Link href={'/cart'} className='mt-[-10px]'>
              <ul className='flex items-center   text-blue-950 space-x-0  font-bold  '>
                <li className=''><BsCart3 className='text-3xl md:text-2xl ' /></li>
                <li className='mb-[25px] '> <span className="font-medium bg-orange-300 rounded-full py-[2px] text-xs px-[6px] md:px-[8px] mx-0">{Object.keys(cart).length}</span></li>
              </ul>
            </Link>
         <RxHamburgerMenu onClick={()=> setNavDropDown(true)} className='text-2xl mr-2 cursor-pointer'/>
           
      </div>

      </div>


      <div className="flex px- md:px-5 sm:mt-2 sm:ml-2">
        <div className="flex rounded-l-sm  tab:w-[490px] w-[290px]  medium:w-[500px] sm:h-[51px] md:h-[45px] h-[46px] ml-2 mt-2  md:mx-0 my-1 md:my-1  ">
          <input type="text" id="esearch" placeholder="Search from our 1000+ products" name="search"  value={input} onChange={handleChange}  autoComplete='off' className="w-full bg-slate-50  border-l border-t border border-blue-900  focus:border-gray-500 focus:backdrop:-2 rounded-md  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="search my-2 sm:my-3  cursor-pointer  py-[4px] sm:py-[7px] xl:py-[7px] px-[6px] rounded-r-md border-gray-500  md:ml-0   sm:mt-[8px] md:mt-[4px]">
          <CiSearch className='text-4xl  md:text-3xl' />
        </div>
       
      </div>
      <div className=" medium:flex hidden nav md:mr-4">
        <ul className='flex items-center  text-blue-950 space-x-3 md:space-x-6 font-bold mx-2 '>

          {user.value == null && <Link href={'/signin'}><li><button className='bg-white  border rounded-sm px-3 py-2 font-semibold shadow-sm hover:scale-95 ease-in-out cursor-pointer duration-100 text-md'>Login</button></li></Link>}
          {user.value && <li><div><div onClick={() => { handleClick, check }} onMouseOver={toggledropdown} 
          onMouseLeave={toggleClosedropdown} className='bg-white border shadow-sm 
          rounded-sm px-3 py-2 cursor-pointer font-medium hover:scale-95 ease-in-out duration-100 
          text-md flex item-center'>
            <span>{userInfo}</span>
            <span className='mt-1 ml-1 '>
            {!dropdown && <IoIosArrowDropdown className='text-lg' />} 
            {dropdown && <IoIosArrowDropup className='text-lg' />}
             </span>
            </div>
          
           {dropdown && <div onMouseOver={toggledropdown} onMouseLeave={toggleClosedropdown} className='absolute z-10   bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'> <ul className='py-2 font-semibold   text-gray-700 dark:text-gray-200'>
            <Link href={'/myaccount'}><li><div className=" cursor-pointer flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><RiShieldUserLine className='mt-1 mr-2' />My Account</div></li></Link>
            <Link href={'/Orders'}><li><div className="cursor-pointer flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><FiCodesandbox className='mt-1 font-bold mr-2' />My Orders</div></li></Link>
            <li><div onClick={check} className="cursor-pointer flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><IoLogOutOutline className='mt-1 mr-2 text-lg font-semibold' />Logout</div></li>
          </ul></div>}


          </div></li>}


          {userInfo && userInfo === "Vishal" &&  <Link href={'/Seller'}><li><button className='bg-white border shadow-sm rounded-sm px-3 py-2 font-semibold hover:scale-95 ease-in-out duration-100 text-md'>Become a Seller</button></li></Link>}
          <div className='flex'><Link href={'/'} ><IoHomeOutline className='text-3xl md:text-2xl' /></Link>
          </div>



          <div className=" nav md:mr-4">
            <Link href={'/cart'}><ul className='flex items-center   text-blue-950 space-x-0  font-bold  '>
              <li className=''><BsCart3 className='text-3xl md:text-2xl ' /></li>

              <li className='mb-[25px] '> <span className="font-medium bg-orange-300 rounded-full py-[3px] text-xs px-[6px] md:px-[8px] mx-0">{Object.keys(cart).length}</span></li>


            </ul></Link></div>

        </ul>

      </div>
      <div className='medium:hidden tab:flex hidden space-x-5 rounded-md pr-10  py-1'>
      <Link href={'/cart'} className='mt-[-10px]'>
              <ul className='flex items-center   text-blue-950 space-x-0  font-bold  '>
                <li className=''><BsCart3 className='text-3xl md:text-2xl ' /></li>
                <li className='mb-[25px] '> <span className="font-medium bg-orange-300 rounded-full py-[2px] text-xs px-[6px] md:px-[8px] mx-0">{Object.keys(cart).length}</span></li>
              </ul>
            </Link>
                <RxHamburgerMenu onClick={()=> setNavDropDown(true)}  className='text-2xl mr-5 cursor-pointer'/>
                  
      </div>

      {
        navDropdown && 

        <div className={` ${navDropdown ? " w-full top-[60px] tab:top-[80px]  z-40 left-0 border py-12 absolute bg-slate-50 text-black  text-lg  rounded-sm medium::hidden  " : "hidden"}`}>
        <div className='flex justify-end absolute right-2 top-4'>
            <button className='px-6 ' onClick={()=> setNavDropDown(false)} >
                <IoClose className='text-2xl'/>
            </button>
           
            
        </div>
       {user.value === null && 
       <ul className='montserrat-font medium:gap-[40px] gap-[20px]  flex flex-col font-semibold items-center  '>
         <Link href={'/'} className='border-b border-black' onClick={()=> setNavDropDown(false)}> <li className=''>Home</li></Link>
         <Link href={'/signin'} className='border-b border-black' onClick={()=> setNavDropDown(false)}> <li className=''>Login</li></Link>
      </ul>
    }

{user.value !== null && 
       <ul className='montserrat-font medium:gap-[40px]  gap-[20px]  flex flex-col font-semibold items-center  '>
         <Link href={'/'} className='border-b border-black' onClick={()=> setNavDropDown(false)}> <li className=''>Home</li></Link>

         <Link href={'/myaccount'} className='border-b border-black' onClick={()=> setNavDropDown(false)}> <li className=' '>Account</li></Link>
         <Link href={'/Orders'} className='border-b border-black' onClick={()=> setNavDropDown(false)}><li className=''>Orders</li></Link>
         <div  className='border-b border-black' onClick={()=> setNavDropDown(false)}><li className='' onClick={check}>Logout</li></div>
      </ul>
    }

        
    </div>
      }

    </div>


  </>
  )
}

export default Navbar