import React from 'react';
import './Yorumlar.css';
import Yorum from './Yorum.jsx'

const Yorumlar = (props) => {
  /* ADIM 2: yorumları parent component'den prop olarak alalım */
  const { yorumlar } = props;
  return (
    <div>{/* ADIM 3: her Yorum için Yorum component'ini çalıştıralım. */
      yorumlar.map((yorum) => (
      <Yorum yorum = {yorum} key = {yorum.id}/>
    ))}</div>
  );
};

export default Yorumlar;
