import React, { useState, useEffect } from 'react';
import Image from '../components/image';
import axios from 'axios';
import { constants } from '../constants';
import { records } from '../records';
const Page = () => {
  const [imageList, setImageList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setImageList(records.getBranchBannerImageListing.RESULT);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Branch Page</h1>
      <p>This is the branch page.</p>
      {imageList.map((image, index) => (
        <Image
          key={image.menu_item_id}
          style={{ width: '100px', height: '100px' }}
          src={image.banner_image}
        />
      ))}
    </div>
  );
};

export default Page;