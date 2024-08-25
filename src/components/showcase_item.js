import React from 'react';
import '../styles/Overview.css';

function ShowcaseItem({ type, text, link, imagepath, style }) {
  return (
    <div className='grid-item'>
      <div className='showcase-img'>
        <div className='item-type'>{type}</div>
        <img src={require(`../assets/images/${imagepath}`)} alt='' style={style} className='showcase-image'/>
      </div>
      <div className='showcase-text'>{text}</div>
      <div className='showcase-link'>
        <a href={link}>VERIFY</a>
      </div>
    </div>
  );
}

export default ShowcaseItem;
