import React, { Fragment } from 'react'

const background = () => {
  return (
    <Fragment>
        <div className='fixed z-[2] w-full h-screen'>
            <div className='w-full py-10 flex justify-center text-zinc-600 text-lg font-semibold'>Documents</div>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw]'>Doxcy.</h1>
        </div>
    </Fragment>
  )
}

export default background
