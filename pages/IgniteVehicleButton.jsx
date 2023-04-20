// components/IgniteVehicleButton.js
import React, { useState } from 'react';
import axios from 'axios';

const IgniteVehicleButton = () => {
  const [response, setResponse] = useState(null);

  async function handleIgniteVehicle() {
    console.log('Ignite Vehicle button pressed');

    try {
      const response = await axios.post('/api/igniteVehicle');
      console.log(response.data);

      // Update the response state with the response data
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <button onClick={() => handleIgniteVehicle()}>getting api calls</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default IgniteVehicleButton;
