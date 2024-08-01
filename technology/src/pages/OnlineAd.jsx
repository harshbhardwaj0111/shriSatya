import React from 'react'
import logo from '../images/onlineLogo.png';
import online from '../images/online.webp';
function OnlineAd() {
    return (
        <div className="container">
            <div className="flex flex-col md:flex-row justify-center items-center mx-40 m-10">
                <div className="md:w-1/2">
                    <div className="flex items-center">
                        <img src={logo} className="w-12 h-12 object-cover rounded-full" />&nbsp;
                        <h2 className="text-2xl font-normal font-bold leading-tight">ONLINE ADVERTISEMENT(SEO & SMO)</h2>
                    </div>
                    <p className="text"><hr className="border-t-4 border-black my-4" />
                        Today, in the modern era of any marketing campaign is incomplete without a website supporting the campaign and adding interactivity to your advertisements. Internet marketing is the fastest growing way to reach larger customers rather than any traditional way of advertisement.
                        Online advertising, also called Internet advertising, uses the Internet to deliver promotional marketing messages to consumers. It includes email marketing, search engine marketing, social media marketing, many types of display advertising(including web banner advertising), and mobile advertising. While traditional offline advertising is used by many companies to drive customers to their websites, many businesses are trying online ads (such as banners, pay-per-click ads, pay-per-call ads and pop-ups) in e-newsletters, on compatible websites, on search engines and in online versions of newspapers and magazines as a way of reaching people who use the internet for shopping or to gather information.
                    </p></div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="md:w-1/2">
                    <img src={online} alt='Website Design' />
                </div>
            </div>
            <br />
            <h1 className="text-2xl font-normal font-bold leading-tight mx-40"><b>Advantages Of Search Engine Optimization</b></h1>
            <hr className="border-black mx-40" />
            <div className='pl-7'>
                <ul className='mx-40'>
                    <li>Search Engine Optimization</li>
                    <li>Social Media Optimization</li>
                    <li>Pay Per Click</li>
                    <li>Customer Oriented</li>
                    <li>Brand Oriented</li>
                    <li>Millions of Customers</li>
                    <li>Versatile</li>
                    <li>Strong web presence</li>
                    <li>Targeted Traffic</li>
                    <li>Manage files such as photos and documents</li>
                    <li>Ever increasing sales</li>
                    <li>Long term positioning</li>
                    <li>More revenue</li>
                </ul>
            </div>
            <p className='mx-40 my-4'>
                Many businesses seem to think that a company logo on a banner ad is enough to get people to click on it. But it's not. Remember that an online customer is already engaged and focused--unlike a radio listener or even a TV viewer, who may only be half paying attention or out of the room when an ad appears. You want to take advantage of that focus while web surfers' fingers are on their keyboards.
                <br />Having a website is not synonymous with internet marketing. The internet is vast and your website may be easily lost among millions of other similar sites. You need the help of a specialist to market your products and services online. So, we not only prepare a website for you, we also promote your website in search engines for better results.
            </p><br />
        </div>
    )
}

export default OnlineAd
