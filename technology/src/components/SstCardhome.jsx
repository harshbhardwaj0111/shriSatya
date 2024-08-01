import React from 'react'
import sstcardimg1 from '../images/sstcardimg1.jpg'
import sstcardimg2 from '../images/sstcardimg2.jpg'
import sstcardimg3 from '../images/sstcardimg3.jpg'
import sstcardimg4 from '../images/sstcardimg4.jpg'
function SstCardhome() {
  return (
    <div>
        <div className='grid grid-cols-4'>
         <div className='pl-6 ' ><img  src={sstcardimg1} alt='#'/>  </div> <div  ><img  src={sstcardimg2} alt='#'/></div> <div className='pl-4'><img  src={sstcardimg3} alt='#'/></div> <div className='pl-4 a'><img src={sstcardimg4} alt='#'/></div>
        </div>
    </div>
  )
}

export default SstCardhome;