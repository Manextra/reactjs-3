// for context api -------------------------------- 
// "use client"
// import Header from '@/Components/Header'
// import { Mycontext } from '@/Helper/Context'
// import React, { useContext } from 'react'

// const page = () => {
//   const user = useContext(Mycontext)
//   console.log(user)
//   return (
//     <>
//     <div>Home page</div>
//     <Header></Header>
//     </>
//   )
// }

// export default page




// For toastify -------------------------------- 
// "use client"
// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const page = () => {
//   const notify = () => {
//     // console.log("hello")
//     // toast("Login Succesful babe!!!") iss line ko website k code se eschange kr do
//     toast.success('🦄 Wow so easy!', {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       });
//   }
//   return (
//     <div>
//       <button onClick={notify} className='border-4 border-pink-500 bg-white text-black ml-20 mt-20 p-2 text-2xl rounded-lg font-bold'>Login</button>
//       <ToastContainer/>
//     </div>
//   )
// }

// export default page


// for client side and server side rendering ---swaal glt hai next k saath default mei hee server side rendering ho jaati hai

"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [userdata, setuserdata] = useState([])
  const [num, setnum] = useState(10)
  const getData = async() => {
    const response = await axios.get("https://picsum.photos/200/300/?blur")
    setuserdata(JSON.stringify(response.data))
  }
  return (
    <>
    <button className='border-2 border-pink-500 bg-white text-xl p-2 m-5 text-black' onClick={getData}>Click me , {num}</button>
    {userdata}
    </>
  )
}

export default page
