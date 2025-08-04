// import React from 'react'
import logo1 from '@/assets/workPhotos/logo1.png'
import { ShimmerButtonDemo } from './ShimmerButtonDemo'
const Navbar = () => {
  return (
    <div className='w-full mx-auto flex justify-between mt-4  '>
      <img src={logo1} alt="" height={72} width={72} />
      <div className='p-2 flex justify-center items-center'>
        <ShimmerButtonDemo/>
      </div>
    </div>
  )
}

export default Navbar
