import React from 'react';
import { Link } from 'react-router-dom';
import LakkiReddyFont from '../fonts/LakkiReddy-Regular.ttf';
import Coconut from '../images/coconut.svg';

const MyNavbar = () => {
  return (
    <nav style={{ backgroundColor: '#D0B7B7', paddingTop: '5px', paddingBottom: '5px' }}>
      <style>
        {`
        @font-face {
          font-family: 'LakkiReddy';
          src: url(${LakkiReddyFont}) format('truetype');
          font-weight: bold;
          font-style: normal;
        }
        `}
      </style>
      <ul style={{ display: 'flex', listStyle: 'none', alignItems: 'center' }}>
        <Link to="/">
        <div
          
          style={{
            backgroundImage: `url(${Coconut})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center calc(50% + 10px)',
            backgroundSize: '272.16px 190px',
            display: 'inline-block',
            marginRight: '10px',
            height: '84px',
            width: '62px'
          }}
        />
      </Link>
        <li style={{ marginRight: '200px', fontFamily: 'Microsoft YaHei', fontSize: '24px', fontWeight: 'bold', marginTop: '15px' }}>
          <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>政大遺失物平台</Link>
        </li>
        <li style={{ marginRight: '50px', fontFamily: 'LakkiReddy', fontSize: '20px', fontWeight: 'bold', marginTop: '25px' }}>
          <Link to="/lost" style={{ color: 'black', textDecoration: 'none' }}>Lost List</Link>
        </li>
        <li style={{ marginRight: '10px', fontFamily: 'LakkiReddy', fontSize: '20px', fontWeight: 'bold', marginTop: '25px' }}>
          <Link to="/found" style={{ color: 'black', textDecoration: 'none' }}>Found List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MyNavbar;
