import React from 'react';
import axios from 'axios';

const IgnitionButton = () => {
    async function handleIgniteVehicle() {
    console.log('Ignite Vehicle button pressed');


  };

  return (
    <div>
      <button onC={() => handleIgniteVehicle()}>Ignite Vehicle</button>
    </div>
  );
};

export default IgnitionButton;
