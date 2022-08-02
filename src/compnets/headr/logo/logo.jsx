import React from 'react';
import logo from "../../../assets/img/Group20.svg"
import logotitel from "../../../assets/img/Digital Agency.svg"
const Logo = () => {
  return (
    <div className=''>
      <a href='#'><img src={logo}/></a>
      <a className='ms-4' href='#'><img src={logotitel}/></a>
    </div>
  );
};

export default Logo;