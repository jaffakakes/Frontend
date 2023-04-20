import React from 'react';

const Authorize = () => {
  const redirectToAuthUri = () => {
    const clientId = 'fa274e12-22a4-4692-90e6-685b13e33457';
    const redirectUri = encodeURIComponent('http://localhost:3000/oauth_callback');
    const authUri = `https://sandbox.owner-panel.high-mobility.com/oauth/new?client_id=${clientId}&redirect_uri=${redirectUri}`;
    
    window.location.href = authUri;
  };

  return (
    <div>
      <h1 class="text-blue-600">Authorize with High Mobility</h1>
      <button class="bg-white" onClick={redirectToAuthUri}>Authorize</button>
    </div>
  );
};

export default Authorize;
