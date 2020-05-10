import React, { useState, useEffect } from 'react';
import Catalog from '../../components/Catalog';

const Home = () => {

const [productName, setProductName] = useState('');
  return(
    <div>
        <Catalog 
        name
        />
        <h1>{productName}</h1>
    </div>
  );
}


export default Home;