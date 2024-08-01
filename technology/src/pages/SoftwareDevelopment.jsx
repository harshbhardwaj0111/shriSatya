import React from 'react'
import soft from '../images/softLogo.jpg'
import softDev from '../images/softDev.jpg'
function SoftwareDevelopment() {
    return (
        <div className="container">
            <div className="flex flex-col md:flex-row justify-center items-center mx-40 my-10">
                <div className="md:w-1/2">
                    <div className="flex items-center">
                        <img src={soft} className="w-12 h-12 object-cover rounded-full" />&nbsp;
                        <h2 className="text-2xl font-normal font-bold leading-tight">SOFTWARE DEVELOPMENT</h2>
                    </div>
                    <p className="text-lg"><hr className="border-t-4 border-black my-4" />
                        We have demonstrated our abilities in delivering the customized applications using cutting edge technologies. Our Customer oriented approach enables us to deliver the optimum solutions for your requirements.<br />
                        At <b>Shri Satya Technologies</b>, we strongly focused on creating customer oriented software applications. Our development team minutely examines and analyses the existing IT processes of the clients. It does the gap analysis to ensure complete compatibility between existing system and custom developed application. The supplications are designed, tested and deployed to complete satisfaction of the clients.
                    </p>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="md:w-1/2">
                    <img src={softDev} alt='Website Design' />
                </div>
            </div>
            <h1 className="text-2xl font-normal font-bold leading-tight mx-40"><b>Advantages Of Our Software Development</b></h1>
            <hr className="border-black mx-40" />
            <div className='pl-7'>
                <ul className='mx-40'>
                    <li>Fully Customized</li>
                    <li >User Friendly</li>
                    <li>Easy to Learn</li>
                    <li>Easy to Update</li>
                    <li>Performance Oriented</li>
                    <li>Custom web based application development using technologies like ASP.NET</li>
                </ul>
            </div>
            <p className='mx-40 my-4'>
                We develop the software's that make your business strategy more easy and effective & provide all your data in the easiest format as you want to see so that you could plan your business accordingly. We develop fully customized software that fulfills all your business needs.
            </p><br />
        </div>
    )
}

export default SoftwareDevelopment;
