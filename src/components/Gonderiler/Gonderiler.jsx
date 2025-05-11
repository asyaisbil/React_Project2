import React from 'react';
import Gonderi from './Gonderi';
import './Gonderiler.css';

const Gonderiler = (props) => {
  
  const {gonderiler, gonderiyiBegen} = props;

  return (
    <div className="posts-container-wrapper">
      {/* Adım 2:  Burada bir sorun var gibi. gönderiler için burada bir map yapalım. hangi propları göndermeliyiz */
        gonderiler.map((item, index) => (
          <Gonderi key={index} gonderi = {item} gonderiyiBegen = {gonderiyiBegen}/> 
        ))
      }
    </div>
  );
};

export default Gonderiler;
