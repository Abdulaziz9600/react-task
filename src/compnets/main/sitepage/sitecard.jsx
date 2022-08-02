import React from 'react';
import "./sitecard.css"

const Sitecard = ({info}) => {
 
  return (
    <div>
      <ul className='d-flex list-unstyled justify-content-center gap-4' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
        <li className='text-center '>
          <img src={info.img} alt="" />
          <p className='card-text pt-3'>{info.item}</p>
          <p className='card-titel'>{info.titel}</p>
        </li>
      </ul>
    </div>
  );
};

export default Sitecard;