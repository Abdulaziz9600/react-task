import React from 'react';
import Sitecard from './sitecard';
import "./sitepage.css"
import Datapage from './datapage';

const Sitepage = () => {
  
  
  return (
    <div>
    <div className='container'>
    <div className='pt-5'>
    <p className='text-center pt-5'>Neler <span className='text-info'>Yapıyoruz?</span></p>
    <h2 className='text-center pt-3'>3 adımda çalışma sürecimiz</h2>
    <p className='site-page-item pt-3 pb-5'>360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.</p>
    
    
    <div className='d-flex justify-content-around gap-4'> 
    
    {Datapage.map((item) => {
      return <Sitecard key={item.text1} info={item} />;
    })}
    
    </div>
    
    </div>
    </div>
    </div>
    );
  };
  
  
  export default Sitepage;