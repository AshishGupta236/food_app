import React from 'react';

const Image = ({ style, src, class_name='', id_name='' }) => (
  <img src={src} style={style} alt="Image" className={class_name} id={id_name}/>
);

export default Image;