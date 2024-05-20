import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';
import { constants } from '../constants';
import { records } from '../records';
import CouponComponent from '../components/couponComponent';
import ItemComponent from '../components/ItemComponent';
import ItemCard from '../components/itemCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const Page = () => {
  const [imageList, setImageList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setImageList(records.getBranchBannerImageListing.RESULT);
        setMenuList(records.getVanBranchMenuList.RESULT.menuDetail);
        
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <Container maxWidth="lg">
        <h1>Branch Page</h1>
        <p>This is the branch page.</p>
        <CouponComponent imageList={imageList}></CouponComponent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3, lg:1}} columns={{ xs: 4, sm: 8, md: 12, lg:12 }}>
            {menuList.map((menu, menu_index) => (
              menu.category_detail.map((category, category_index) => (
                category.item_detail.map((item, item_index) => (
                  <Grid item xs={4} sm={4} md={4} lg={3} key={`${menu_index}-${category_index}-${item_index}`}>
                    <ItemCard item={item} category={category} menu={menu}/>
                  </Grid>
                ))
              ))
            ))}
        </Grid>
      </Box>
        
      </Container>
  );
};

export default Page;