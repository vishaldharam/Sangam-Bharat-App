/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from 'next/router';
import {React,useState} from 'react'
import Link from 'next/link'
const signup = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const onChange = (e)=>{
        if(e.target.name === "name") setname(e.target.value)
        else if(e.target.name === "email") setemail(e.target.value)
        else if(e.target.name === "password") setpassword(e.target.value)
          
    }

    const handleClick = async(e) =>{
        e.preventDefault()
        const data = {name,email,password}


        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)

        })

        let response = await res.json()
        if(response.success === "success"){
        console.log(response)
       
            setname("")
            setemail("")
            setpassword("")
            router.push('/signin')
            toast.success('Account created', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:'dark'
                });
        }
    }
  return (
    <div className="py-4 sm:py-6">
           <ToastContainer/>
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-[45%] bg-cover">
            <img src='cc.jpg' className='h-[500px] w-full'></img>
        </div>
        <form onSubmit={handleClick}  className="w-full px-12 py-4 pb-8 lg:w-[55%] bg-slate-50">
            <h2 className="text-xl font-bold text-gray-700 text-center">Sign up</h2>
          
            <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md bg-white hover:bg-gray-100">
                <div className="px-4 py-3">
                    <svg className="bg-white h-6 w-6" viewBox="0 0 40 40">
                        <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#FFC107" />
                        <path
                            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                            fill="#FF3D00" />
                        <path
                            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                            fill="#4CAF50" />
                        <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#1976D2" />
                    </svg>
                </div>
                <h1 className="bg-white px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Signup with Google</h1>
            </a>
            
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase">or signup with email</a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input htmlFor="name" id='name' name='name' value={name} onChange={onChange} required  className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-400 rounded py-2 px-4 block w-full appearance-none" type="text" />
            </div>
            <div className="mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input htmlFor="email" id='email' name='email' value={email} onChange={onChange} required  className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-400 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div className="mt-2">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                   
                </div>
                <input htmlFor="password" id='password' name='password' value={password} onChange={onChange} required  className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-400 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            <div className="mt-8">
                <button type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Sign up</button>
            </div>
            <div className="mt-4 flex ite
            ms-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link href={'/signin'} className="text-xs text-gray-500 uppercase">or sign in</Link>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
        </form>
    </div>
</div>
  )
}

export default signup