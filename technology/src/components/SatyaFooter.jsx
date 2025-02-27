import React from 'react'
import Logo from '../images/contant3.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
function SatyaFooter() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                        <img src={Logo} alt="Softech Logo" className="w-32 h-32 rounded" />
                        <h2 className="text-xl mt-4">SHRI SATYA TECHNOLOGY</h2>
                        <p><i>“Best Solution - Best Growth”</i></p>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                    <h3 className="text-xl underline mb-4">Services</h3>
                        <div className='pl-7'>
                            <ul className=''>
                                <li>Web Designing</li>
                                <li>Web Development</li>
                                <li>Software Development</li>
                                <li>Maintenance Services</li>
                                <li>Online Advertisement</li>
                                <li>Logo Designing</li>
                                <li>E-commerce</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <h3 className="text-xl underline mb-4">Contact Information</h3>
                        <p><i className="fas fa-map-marker-alt"></i> #1st Floor, Near Chawla Sweets,</p>
                        <p>Circular Road, Sirsa(125055),Haryana</p>
                        <p><i className="fas fa-phone"></i> +91-1666-224455</p>
                        <p><i className="fas fa-envelope"></i> info@shrisatyait.com</p>
                        <p>Business Hours (9:00 AM to 6:00 PM) IST</p>
                        <div className="flex space-x-7 mt-2">
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-gray-200 text-white py-4 mt-8">
                    <p className=" text-black"> &nbsp; &copy; 2015 All Rights are Reserved.</p>
                    <p><a href="#" className="text-black"><i className="fas fa-arrow-circle-up"></i> Back to top &nbsp; </a></p>
                </div>
            </div>
        </footer>
    );
}

export default SatyaFooter;

