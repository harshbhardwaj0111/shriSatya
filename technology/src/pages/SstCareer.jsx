import React from 'react'
import NavbarMain from '../components/NavbarMain'
import SatyaFooter from '../components/SatyaFooter'
function SstCareer() {
  return (
    <div>
        <NavbarMain/>
        <div>
          <i> <h2 className='text-2xl font-mono font-bold text-blue text-center'> <i class="fa-solid fa-door-open "></i>  Current openings</h2></i>
          <br/>
          <p className='text-center  '>
         <span className='font-semibold' > Shri Satya Technologies </span> is a place where different people come together as one team, get creative and deliver results. <br/> So if you want to be a part of new rising team and if you have the essential qualification then<br/>  you can send your updated resume as per following:
          </p>
          </div>
          <br/><br/>
        <div className='pl-10 pr-10'>
<ol class="relative border-s border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ms-6">
    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-500">
            <i className='fa fa-bars'></i>
        </span>
        
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 "> Position Offered: Application Programmer </h3>
        <br/>
        <div class="grid grid-cols-2 pl-5 ">
        <li  className='list-disc'> <span className="font-semibold" > Qualification: </span>  B.Tech. or MCA</li>
        <li className='list-disc' > <span className="font-semibold" > Skills Required: </span>  ASP.Net With Good Command on SQL Server</li>
        <li className='list-disc' > <span className="font-semibold" > Job Field: </span>  IT/ Software Services</li>
        <li className='list-disc' > <span className="font-semibold" > Experience: </span>  1-2 Years (Fresher may also apply)</li>
        <li className='list-disc' > <span className="font-semibold" > Salary Offered: </span>  Best in the Industry</li>
        <li className='list-disc'> <span className="font-semibold" > Location: </span>  Sirsa</li>
        </div>
        
    </li>
    
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-500">
        <i class="fa-solid fa-money-bill-trend-up"></i>
        </span>
        
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 "> Position Offered:  Marketing Executive </h3>
        <br/>
        <div className="grid grid-cols-2 pl-5">
        <li className='list-disc' > <span className="font-semibold" > Qualification: </span>  Graduate in any stream</li>
        <li className='list-disc' > <span className="font-semibold" > Skills Required: </span>  Good Command in English with basic knowledge of Computer</li>
        <li className='list-disc' > <span className="font-semibold" > Job Field: </span>  IT/ Software Services</li>
        <li className='list-disc' > <span className="font-semibold" > Experience: </span>  0-6 Months (Fresher may also apply)</li>
        <li className='list-disc' > <span className="font-semibold" > Salary Offered: </span>   Attractive Salary + Incentive + TA + DA</li>
        <li className='list-disc' > <span className="font-semibold" > Location: </span> Haryana, Punjab, Rajasthan, Delhi, NCR, Chandigarh</li>
        </div>
        
    </li>
    <li class=" mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-500">
        <i class="fa-solid fa-phone-volume"></i>
        </span>
        
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 "> Position Offered:  Tele Caller (Female Only) </h3>
        <br/>
        <div className="grid grid-cols-2 pl-5">
        <li className='list-disc'  > <span className="font-semibold" > Qualification: </span>  B.Tech. or MCA</li>
        <li className='list-disc'  > <span className="font-semibold" > Skills Required: </span>  ASP.Net With Good Command on SQL Server</li>
        <li className='list-disc'  > <span className="font-semibold" > Job Field: </span>  IT/ Software Services</li>
        <li className='list-disc'  > <span className="font-semibold" > Experience: </span>   0-6 Months (Fresher may also apply)</li>
        <li className='list-disc'  > <span className="font-semibold" > Salary Offered: </span> Attractive Salary</li>
        <li className='list-disc'  > <span className="font-semibold" > Location: </span>  Sirsa</li>
        </div>
    </li>
</ol>
<hr class="h-px my-8 pl-1 bg-gray-200 border-0 dark:bg-gray-700"/>
</div>
<div className='pl-10  mb-10' >
 <u> <h2 className='text-black font-bold text-2xl  mb-2'> <i class="fa-regular fa-file-pdf"></i> Submit Your Updated Resumes</h2></u>
 <p className='pl-5' >  <i className='fa fa-arrow-right'></i>   resume@shrisatyait.com</p>
</div>
<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
</div>
<div className='pl-10 pt-5  mb-10' >
 <u> <h2 className='text-black font-bold text-2xl  mb-2'> <i class="fa-solid fa-phone"></i> You May Also Contact On Our Support Lines</h2></u>
 <p className='pl-5' >  <i className='fa fa-arrow-right'></i>  Support Lines : +91-1666-224455 </p>
 <p className='pl-5' >  <i className='fa fa-arrow-right'></i>  Our team works between 9:00 AM to 6:30 PM IST Monday to Saturday.You can contact us as above said manner. </p>
</div>
<SatyaFooter />
    </div>
  )
}

export default SstCareer