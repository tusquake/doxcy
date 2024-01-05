import React from 'react'
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const Card = ({data}) => {
  return (
    <div className='relative w-60 h-72 rounded-[45px] bg-sky-200 bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
      <FaBeer color='#ffff'/>
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 bg-sky-200 w-full h-20'>
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <FaBeer color='#ffff'/>:<h6>false</h6>}
          </span>
        </div>
        {
          data.tag.isOpen ? (
        <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
            <h3 className='text-sm font-semibold'>Download Now</h3>
        </div>

          ) : null
        }
      </div>
    </div>
  )
}

export default Card
