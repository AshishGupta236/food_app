import React from 'react';
import Image from './image';

import Carousel from 'react-material-ui-carousel';
import { Paper, Container } from '@mui/material';


function CouponComponent({imageList}) {
    

    return (
    <div>
      <h1>Coupon components</h1>
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Carousel>

        {imageList.map((image, index) => (
            <Image
            key={image.menu_item_id}
            style={{ width: '200px', height: '200px' }}
            src={image.banner_image}
            />
        ))}
        </Carousel>
    </Container>
    </div>)
} 

export default CouponComponent;