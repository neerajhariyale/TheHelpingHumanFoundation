import Teams from '@/component/Teams'
import React from 'react'

const Team = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
            <div className="mt-5  ">
        <p className="text-2xl italic font-semibold ">
          "We are the hearts and hands powering {" "}
          <span className="text-red-500"> The Helping Human Foundation." </span>
        </p>
      </div>

<Teams/>
    </div>
  )
}

export default Team
