/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import product from "../models/product"
import mongoose from "mongoose";
const Animals = ({data}) => {
  console.log("In Animal")
  return (
    <>
    <section className="w-full tab:px-2 px-1     mt-2 my-1 mx-auto">
   <div className="w-full mt-2 sm:py-2 py-0 bg-white px-2 mx-auto">
       
       <div id="slider" className='bg-white min-h-[115px] relative flex flex-row  justify-start md:justify-start lg:justify-center xl:justify-center w-[100%] z-auto scrollbar-hide overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
       {/* <div id="slider" className='  py-0 w-full m-auto h-full scrollbar-hide overflow-x-scroll scroll whitespace-nowrap scroll-smooth'> */}

         <Link href={'/'}><div className='md:w-[120px] opacity-80 rounded-sm md:h-[70px] w-[100px] h-[80px] inline-block p- md:p-0 m-2 sm:mx-10 md:ml-4 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white  rounded-b-lg'>
           <img src={'da.jpg'} className='w-[120px]  opacity-80 rounded-sm md:h-[80px] h-[60px]' alt='' ></img>
           <span className=' text-red-600 py-0.5   text-center  md:ml-1 text-sm font-semibold  px-2 rounded-md  text-[14px]'>Coming soon!</span>

         </div></Link>
         <Link href={'/'}><div className='md:w-[120px] opacity-80 rounded-sm md:h-[70px] w-[100px] h-[80px] inline-block p- md:p-0 m-2 sm:mx-10 md:ml-2 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white  rounded-b-lg'>
           <img src={'cat.jpg'} className='w-[120px]  opacity-80 rounded-sm md:h-[80px] h-[60px]' alt='' ></img>
           <span className=' text-red-600 py-0.5   text-center  md:ml-1 text-sm font-semibold  px-2 rounded-md  text-[14px]'>Coming soon!</span>

         </div></Link>
         <Link href={'/'}><div className='md:w-[120px] opacity-80 rounded-sm md:h-[70px] w-[100px] h-[80px] inline-block p- md:p-0 m-2  sm:mx-10 md:ml-2 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white  rounded-b-lg'>
           <img src={'cow.jpg'} className='w-[120px]  opacity-80 rounded-sm md:h-[80px] h-[60px]' alt='' ></img>
           <span className=' text-red-600 py-0.5   text-center  md:ml-1 text-sm font-semibold  px-2 rounded-md  text-[14px]'>Coming soon!</span>

         </div></Link>
         <Link href={'/'}><div className='md:w-[120px] opacity-80 rounded-sm md:h-[70px] w-[100px] h-[80px] inline-block p- md:p-0 m-2 sm:mx-10 md:ml-2 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white  rounded-b-lg'>
           <img src={'buff.webp'} className='w-[120px]  opacity-80 rounded-sm md:h-[80px] h-[60px]' alt='' ></img>
           <span className=' text-red-600 py-0.5   text-center  md:ml-1 text-sm font-semibold  px-2 rounded-md  text-[14px]'>Coming soon!</span>

         </div></Link>
         <Link href={'/'}><div className='md:w-[120px] opacity-80 rounded-sm md:h-[70px] w-[100px] h-[80px] inline-block p- md:p-0 m-2 sm:mx-10 md:ml-2 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white  rounded-b-lg'>
           <img src={'horse.jpg'} className='w-[120px]  opacity-80 rounded-sm md:h-[80px] h-[60px]' alt='' ></img>
           <span className=' text-red-600 py-0.5   text-center  md:ml-1 text-sm font-semibold  px-2 rounded-md  text-[14px]'>Coming soon!</span>

         </div></Link>
         <Link href={'/'}><div className='md:w-[120px] opacity-80 rounded-sm md:h-[70px] w-[100px] h-[80px] inline-block p- md:p-0 m-2 sm:mx-10 md:ml-2 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white  rounded-b-lg'>
           <img src={'goat.jpg'} className='w-[120px]  opacity-80 rounded-sm md:h-[80px] h-[60px]' alt='' ></img>
           <span className=' text-red-600 py-0.5   text-center  md:ml-1 text-sm font-semibold  px-2 rounded-md  text-[14px]'>Coming soon!</span>

         </div></Link>
         <Link href={'/'}><div className='md:w-[120px] opacity-80 rounded-sm md:h-[70px] w-[100px] h-[80px] inline-block p- md:p-0 m-2 sm:mx-10 md:ml-2 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white  rounded-b-lg'>
           <img src={'sheep.jpg'} className='w-[120px]  opacity-80 rounded-sm md:h-[80px] h-[60px]' alt='' ></img>
           <span className=' text-red-600 py-0.5   text-center  md:ml-1 text-sm font-semibold  px-2 rounded-md  text-[14px]'>Coming soon!</span>

         </div></Link>
      
      
         
       </div>
       
     </div>
     </section>
  <section className="text-gray-600 body-font mb-2 mt-2 ">
  <div className="w-full mx-auto">
    <div className="flex flex-wrap mx-auto ">
      <img src="aaaa.jpg" className='md:h-[70px] h-[30px] md:w-full w-[400px]' alt="aliya" />
    </div>
  </div>
</section>

         <section className="text-gray-600 body-font">
 <div className="w-full px-5 py-5 bg-slate-50 pb-20  mx-auto">
   <div className="flex flex-wrap max-w-screen-2xl mx-auto  bg-slate-50 justify-center ">
    
     {Object.keys(data).map((item, i)=>{ return (<><div key={i} className="medium:w-[18%] xl:w-1/8 bg-white  tab:w-[30%] px-2 py-1 medium:px-3 medium:py-3 rounded-md  shadow-md medium:m-4 m-3   w-4/5">
       <div className="block relative h-52 tab:h-56  medium:h-52 rounded-sm overflow-hidden">
       <Link href={`product/${data[item].slug}`}>
         <img alt="ecommerce" className=" object-fill  w-full h-full block" src={`images/${data[item].images[0]}`}/></Link>
       </div>
       <div className="mt-3 ml-1 pb-6 justify-center">
       <Link href={`product/${data[item].slug}` } className='flex-col flex space-y-2'>
         <h3 className="text-gray-500 text-xs tracking-widest title-font ">{data[item].subCategory}</h3>
         <h2 className="text-gray-900 title-font text-md font-medium">{data[item].title}</h2>
         <p className="mt-1">₹ {data[item].price} <span className='border border-slate-500 px-1 ml-2 text-sm'>{data[item].age}</span></p>
         <p className="mt-1 ml-1 "></p>
         <div className="flex  items-center mt-1 mb-1">
          <div className="flex">
         
            {data[item].color.includes("white") && <button className="border border-black bg-white rounded-full w-4 h-4 hover:scale-110 duration-200 mx-1 mt-1"></button>}
            {data[item].color.includes("black") && <button className=" bg-gray-800 rounded-full w-4 h-4 hover:scale-110 duration-200 mx-1 mt-1"></button>}
            {data[item].color.includes("golden") && <button className="border border-black bg-orange-100 rounded-full w-4 h-4 hover:scale-110 duration-200 mx-1 mt-1"></button>}
            {data[item].color.includes("brown") && <button className=" bg-yellow-700 rounded-full w-4 h-4 hover:scale-110 duration-200 mx-1 mt-1"></button>}
          </div></div>
        
         </Link>
       </div>
     </div></>)})}
     
     
   </div>
 </div>
</section>
 </>
 )
}

export async function getServerSideProps(context) {
 
await mongoose.connect(process.env.MONGO_URI)


let products = await product.find({category:"Animal"})
let allAnimals = {}
for(let item of products){
  if(item.title in allAnimals){
        if(item.quantity > 0){
       allAnimals[item.title].color.push(item.color)
        }
    
  }
  else{
    allAnimals[item.title] = JSON.parse(JSON.stringify(item))
    if(item.quantity > 0){
 
      allAnimals[item.title].color = [item.color]
    }
    else{
      allAnimals[item.title].color = [item.color]
    }
    
    
    

  }
}
  let data = await JSON.parse(JSON.stringify(allAnimals))
  const key = Object.keys(data)
 return { props: {data} }
}


export default Animals