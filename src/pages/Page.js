import React, { useState, useEffect } from 'react';
import Image from '../components/image';
import axios from 'axios';
import { constants } from '../constants';
const Page = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let banner_params = constants.banner_params;
        const response = await axios.post(`${constants.api_url}tamarindtiger/getBranchBannerImageListing`, 
        {headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin' :'*'},banner_params});
        setImageList(response.data);
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
      {imageList.map((image) => (
        <Image
          key={image.id}
          style={{ width: '100px', height: '100px' }}
          src={image.src}
        />
      ))}
    </div>
  );
};

export default Page;