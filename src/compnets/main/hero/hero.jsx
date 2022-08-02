import React , {useEffect} from 'react';
import "./hero.css"

import Aos from 'aos';
import "../../../../node_modules/aos/dist/aos.css"

const Hero = () => {

  useEffect(()=>{
    Aos.init({})
  },[])
  
  return (
    <div>
    <div className='site-hero'>
    <div className='container'>
    <div className='hero' data-aos="zoom-in" data-aos-duration="1400">
      <h2 className='hero-item text-center'  >İşinize uygun <span className='text-primary'>tasarım</span> ve <span className='text-primary'>yazılımlar</span></h2>
      <p className='hero-titel'>360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.</p>
      
      <div className='d-flex justify-content-center pb-5'><button className='btn btn-primary '>Detaylı İncele</button></div>
    </div>
    </div>
    </div>
    </div>
    );
  };
  
  export default Hero;