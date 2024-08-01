import React from 'react'
import pic from './images/contant3.png'
import AboutUs from './pages/AboutUs'
import WebDesigning from './pages/WebDesigning'
import StaticWebsite from './pages/StaticWebsite'
import FlashWebsite from './pages/FlashWebsite'
import DynamicWebsite from './pages/DynamicWebsite'
import WebsiteDevelopment from './pages/WebsiteDevelopment'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import LogoDesgning from './pages/LogoDesgning'
import Maintenance from './pages/Maintenance'
import OnlineAd from './pages/OnlineAd'
import Layout from './Layout'
import SatyaFooter from './components/SatyaFooter'
import NavbarMain from './components/NavbarMain'
import SliderMain from './components/SliderMain'
function App() {
  return (
    <div>
      {/* <AboutUs /> 
      <WebDesigning /> 
      <SatyaFooter />
      <FlashWebsite />
      <StaticWebsite />
      <DynamicWebsite />
      <WebDesigning />
      <WebsiteDevelopment />
      <SoftwareDevelopment />
      <LogoDesgning />
      <Maintenance /> 
      <OnlineAd />
      <SatyaFooter /> */} 
      <NavbarMain />
      <SliderMain />
      
    </div>
  )
}

export default App

