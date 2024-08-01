import React from 'react'
import Maintenance1 from '../images/service.jpg';
import logo from '../images/maintence.png';
function Maintenance() 
{
  return (
    <div className="container">
                <div className="flex flex-col md:flex-row justify-center items-center mx-40 my-10">
                    <div className="md:w-1/2">
                        <div className="flex items-center">
                            <img src={logo} className="w-12 h-12 object-cover rounded-full" />&nbsp;
                            <h2 className="text-2xl font-normal font-bold leading-tight">MAINTENANCE SERVICES</h2>
                        </div>
                        <p className="text"><hr className="border-t-4 border-black my-4" />
                            <b>"It is better not to have a product if you do not have someone to keep it updated and well maintained." </b>
                            We have just the right resources, skills and manpower needed to keep your product updated, keeping it operational and trouble free. A website maintenance services includes revising, editing, or otherwise changing in existing web pages to keep your website up to date and operational. Web site maintenance services basically refer to your web site up to date in means of company news, latest developments, and new project deals.
                        </p></div>&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="md:w-1/2">
                        <img src={Maintenance1} alt='Website Design' />
                    </div>
                </div>
                <h1 className="text-2xl font-normal font-bold leading-tight mx-40"><b>Our Maintenance Services Includes:</b></h1>
                <hr className="border-black mx-40" />
                <div className='pl-7'>
                    <ul className='mx-40'>
                        <li>CSS Updates</li>
                        <li>Malware Removal</li>
                        <li>Content Updates</li>
                        <li>Re-structure your site contents</li>
                        <li>Keep your website up-to-date</li>
                        <li>Secure & Protect your site</li>
                        <li>Modification and Addition of Website Content</li>
                        <li>Update announcements, articles, etc.</li>
                        <li>Adding/removing pages</li>
                        <li>PDF creation and uploading</li>
                    </ul>
                </div>
                <p className='mx-40 my-4'>
                    All web sites need to be maintained in order to keep them up to date. Some sites need daily updates while others only need occasional maintenance. We can diagnose your product and have it back to you really fast for an affordable fee.
                </p><br />
            </div>
  )
}

export default Maintenance;
