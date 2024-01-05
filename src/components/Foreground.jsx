import React from 'react'
import Card from './Card'

const Foreground = () => {

  const data = [
    {
      desc : "This is a beautifull docs app.",
      filesize : ".9mb",
      close: false,
      tag : { isOpen : true, tagTitle: "Download Now", tagColor: "green" },

    },
  ]

  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full'>
        {data.map((item, index)=>(
          <Card data={item}/>
        ))}
    </div>
  )
}

export default Foreground
