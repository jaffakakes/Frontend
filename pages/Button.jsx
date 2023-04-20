import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import IgniteVehicleButton from './IgniteVehicleButton';

const IgnitionButton = () => {
  const router = useRouter();

  async function handleIgniteVehicle() {
    console.log('Ignite Vehicle button pressed');

    try {
      const accessToken = router.query.code;

      if (!accessToken) {
        console.error('Access token not found');
        return;
      }

      const response = await axios.post('/api/getAccessToken', {
        code: accessToken,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <button onClick={() => handleIgniteVehicle()}>Ignite Vehicle</button>
      <IgniteVehicleButton/>
    </div>
  );
};

export default IgnitionButton;

