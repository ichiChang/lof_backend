import React from 'react';
import { Link } from 'react-router-dom';
import LakkiReddyFont from '../fonts/LakkiReddy-Regular.ttf';

const MyNavbar = () => {
  return (
    <nav style={{ backgroundColor: '#D0B7B7', paddingTop: '2rem', paddingBottom: '2rem' }}>
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
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ marginRight: '200px', fontFamily: 'Microsoft YaHei', fontSize: '2rem', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>政大遺失物平台</Link>
        </li>
        <li style={{ marginRight: '50px', fontFamily: 'LakkiReddy', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.8rem' }}>
          <Link to="/lost" style={{ color: 'black', textDecoration: 'none' }}>Lost List</Link>
        </li>
        <li style={{ marginRight: '10px', fontFamily: 'LakkiReddy', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.8rem' }}>
          <Link to="/found" style={{ color: 'black', textDecoration: 'none' }}>Found List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MyNavbar;
