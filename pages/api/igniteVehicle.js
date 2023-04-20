import HMKit from 'hmkit';

// PASTE CLIENT CERTIFICATE SNIPPET HERE
const hmkit = new HMKit(
    "c2JveGZzxBl0JDQ41cmtWKRe9cGvrpG+fMqfGy2AYgrwml7loKbq4dDl4Vm3sZBU9qWs/EgceyKQoKufs6fMNgS2mqgHMGRFx8pxvo+6BO0udqZ1pliNeWetah3+8d0IdFBKk3TVWvYRvcLXYHKTc/yDr0b3d4XFF5mX/tuGV6LQCzxjr3V7IJFp+Etyp42nfph5s0OByf5G",
    "9qElu0llgUgsPdK2X7Jaef3aC8Q7eQ1Cbfdm4CMOEaI="
);

const igniteVehicle = async (req, res) => {
    console.log('API route called');
    const accessToken = req.body.access_token;

    if (!accessToken) {
      res.status(400).json({ error: 'Access token not found' });
      return;
    }
  const accessCertificate = await hmkit.downloadAccessCertificate(accessToken);

  try {
    const response = await hmkit.telematics.sendCommand(
        hmkit.commands.Ignition.turnIgnitionOnOff({
          state: "on" // Available values: ['on', 'off', 'start', 'lock', 'accessory']
        }),
        accessCertificate
      );
  
      console.log(response.bytes());
      console.log(response.parse());
    } catch (e) {
      console.log(e);
    }
  }

export default igniteVehicle;
