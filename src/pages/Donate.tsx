import Donation from '@/component/Donation'
import React from 'react'

const Donate = () => {
  return (
    <>
    <div className=" w-11/12  mx-auto flex flex-col items-center justify-evenly">
        {/* Heading  */}
        <div className="flex flex-col items-center">
          <p className="text-center mt-1  text-3xl">Donation 🎉</p>
          <div className="w-14 border-2 border-red-500 mt-1"></div>
        </div>
      </div>

      <p className="text-center text-gray-600 mb-5 max-w-2xl mx-auto mt-4">
        Support our mission to feed the hungry, uplift lives, and spread kindness. Your donation helps us bring hope and change to those who need it most.
      </p>
      <Donation/>
    </>
  )
}

export default Donate
