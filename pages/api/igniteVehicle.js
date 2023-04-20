import HMKit from 'hmkit';

const hmkit = new HMKit(
    "c2JveHkj5+Yy3K/m8D3TU+7WMM+bvkr/WtCXBNqHlpO8Ceafeb0YpweF7JbYD2jW2xFxXIPrDbiVAW4T/e5qf8kP58mRzbuN2PfWGgiFsJtU60m2ADtRb8nDRMx9D76yrs/xqXdhvQmBmUNJ2Zx4WznRLYI+JJpdFnAvTYXfTnAEe8M1AoF/ho+t4pSICuwY/Mafz9GCP+B/",
    "2pUZUiFjolrzHczBwfL4VF5Rw39tCQXXBjx8S2ICx84="
);

// api/igniteVehicle.js


const igniteVehicle = async (req, res) => {
  console.log('API route called');
  const accessToken = 'e3a75859-6096-4c7f-b17f-e693cca9c68d';

  if (!accessToken) {
    res.status(400).json({ error: 'Access token not found' });
    return;
  }
  try {
    console.log(1);
    const accessCertificate = await hmkit.downloadAccessCertificate("5ec66ab5-aee6-4097-9536-fea12e6d89a6");
    console.log(2);
    const response = await hmkit.telematics.sendCommand(
      hmkit.commands.Diagnostics.getState()
, // command helper function
      accessCertificate // access certificate
  )
  
  console.log('bytes:', response.bytes()) // [11, 0, 99, 1, 1, 0, 15, 1, 0, 1, 1, 2, 0, 8, 0, 0, 1, 111, 205, 24, 26, 34]
  console.log('object:', response.parse()) // EngineStartStopResponse { status: { value: 'active', timestamp: 2020-01-22T11:51:46.466Z } }
  

    // Send the parsed response back to the client
    res.status(200).json(response.parse());
  } catch (e) {
    console.log('Error in API route:', e);
    res.status(500).json({ error: e.message });
  }
};

export default igniteVehicle;



