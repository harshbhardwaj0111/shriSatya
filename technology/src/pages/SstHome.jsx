import React from "react";
import NavbarMain from "../components/NavbarMain";
import SliderMain from "../components/SliderMain";
import SstInfohome from "../components/SstInfohome";
import SstCardhome from "../components/SstCardhome";
import SstTestimonial from "../components/SstTestimonial";
import SstFramework from '../components/SstFramework';
import SatyaFooter from "../components/SatyaFooter";
function SstHome() {
  return (
    <div>
      <NavbarMain />
      <SliderMain />
      <SstInfohome />
      <SstCardhome />
      <br/>
      <SstTestimonial/>
      <SstFramework/>
      <SatyaFooter />
    </div>
  );
}

export default SstHome;