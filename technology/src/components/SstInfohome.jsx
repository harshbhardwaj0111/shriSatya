import React from 'react'
import sstinfologo from '../images/sstinfologo.jpg'
import latestoffers from '../images/latestoffers.gif'

function SstInfohome() {
  return (
    <div>
        <div class="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
        <u> <h2 className='text-2xl pl-2'> <i class="fa fa-handshake-o" aria-hidden="true"></i> Welcome </h2> </u>
        <br/>
        <div class="grid grid-cols-8 pl-5 "> 
        <div className='mt-10'> <img src={sstinfologo} alt='#'/> </div>  
        &nbsp; 
           <div class="col-span-3">  <p className='font-serif font-semibold' >SHRI SATYA TECHNOLOGIES</p> is an INDIA based web designing company where we believe in bringing client projects to life through our versatile IT services by integrating them with next generation web technology, having superior functional efficiency.
           In the modern era of technology, there are millions of people accessing the internet every day; therefore it is very important for you to have a website that provides a platform to your products and services. You might be doing well with your business strategies, but if your enterprise has a presence in web world than it will able to stand to its optimum potentials. We deliver versatile IT solutions to our clients after having detailed studied about their nature of the requirement.</div>
           <div></div> 
           <div class="col-span-2 pr-2" >
           <img src={latestoffers} alt='#' style={{width:"100%"}} />
            <marquee bgcolor="transparent" scrollamount="3" direction="up" loop="true"> 
                <div>
            <font color="black">
            <strong> 
            <i class="fa fa-arrow-right" aria-hidden="true"></i> 
            Gurukul-pro Basic Module Cost: INR 5000/- Complete ERP (Without SMS) Cost: INR 10000/-Complete ERP (With SMS) Cost: INR 12500/- + SMS cost Extra
<hr/>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>   &nbsp; 
            Gurukul-Online
            Economic Cost:INR 5000/-
            Deluxe Cost:  INR 10000/-
            Expert Cost: INR 15000/-     
<hr/> 
      
<i class="fa fa-arrow-right" aria-hidden="true"></i>
Clinic-Pro
Product: Clinic-pro

Cost: INR 10000/-      
            <i class="fa fa-arrow-right" aria-hidden="true"></i> 
            Transporter Product: 
            Transporter Cost: INR 10000/-                                        
            </strong>
            </font>
            </div>
            </marquee>
            </div>
          </div>
          
          </div>
          
    </div>
  )
}

export default SstInfohome