import { Mycontext } from '@/Helper/Context'
import React, { useContext } from 'react'

const  Header = () => {
  const user = useContext(Mycontext)
  return (
    <>
    <div>Hi, {user} I am Header</div>
    </>
  )
}

export default  Header