import React from 'react'
import logo from '../images/logo.png';
import logoDesign from '../images/logo.jpg';
function LogoDesgning() {
    return (
        <div className="container">
            <div className="flex flex-col md:flex-row justify-center items-center mx-40 mt-10">
                <div className="md:w-1/2">
                    <div className="flex items-center">
                        <img src={logo} className="w-12 h-12 object-cover rounded-full" />&nbsp;
                        <h2 className="text-2xl font-normal font-bold leading-tight">LOGO DESIGNING</h2>
                    </div>
                    <p className="text"><hr className="border-t-4 border-black my-4" />
                        <b>"A logo does not regard entertainment or an art form, but as a medium of information." </b>
                        In order to understand what a logo design is, it is important to first understand what a logo design is used for: branding and identification. A logo identifies a product or company through the portrayal of a symbol, mark, flag or signature.
                    </p></div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="md:w-1/2">
                    <img src={logoDesign} alt='Website Design' />
                </div>
            </div>
            <p className='mx-40'>Before a logo design is created, the procedures and values of a company must be apparent. A logo design does not need to explain business practices, but it should symbolize the quality of that business. If a coffee shop prides itself on using all organic ingredients and its logo design consists of a cup of coffee next to a skull, viewers will get mixed messages. Bottom line—the meaning behind a logo design is far more important than its appearance.
                It is important to keep in mind that your logo design will not function perfectly until it becomes recognizable to others. This will come with time. Once viewers are able to subconsciously connect your logo design with your company and its goals, your logo design will be able to successfully stand alone.
                With the absence of a memorable, eye catching and meaningful logo design, a business - no matter how small or large - will fight an uphill battle when it comes to name and brand recognition. With great logo design, a company's name will resonate clearly with all of their customers.</p>
            <br />
            <h1 className="text-2xl font-normal font-bold leading-tight mx-40"><b>Advantages Of Our Logo Designing</b></h1>
            <hr className="border-black mx-40" />
            <div className='pl-7'>
                <ul className='mx-40'>
                    <li>Brand Oriented</li>
                    <li >Business Oriented</li>
                    <li>Versatile</li>
                    <li>Magnificent</li>
                    <li>Professional</li>
                </ul>
            </div>
            <p className='mx-40 my-4'>
                And here we design the logo that summarizes your business ideas without any brainstorming.
            </p><br />
        </div>
    )
}

export default LogoDesgning
