import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import IgnitionButton from './Button'
const OauthCallbackPage = () => {
  const router = useRouter();

  const oauthCallback = async (code) => {
    try {
      const response = await axios.post(
        'https://sandbox.api.high-mobility.com/v1/access_tokens',
        {
          client_id: 'fa274e12-22a4-4692-90e6-685b13e33457',
          client_secret: 'jxmpptmrLDdwiP3wuA_ZfoDCCJ8pHOhW',
          code,
          redirect_uri: 'http://localhost:3000/oauth_callback',
          grant_type: 'authorization_code',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      const { data } = response;
      const { access_token } = data;

      // Save the access token to local storage
      window.localStorage.setItem('access_token', access_token);

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  

  useEffect(() => {
    if (router.query.code) {
      oauthCallback(router.query.code);
    }
  }, [router.query]);

  return (
    <div>
      <IgnitionButton />
    </div>
  );
};

export default OauthCallbackPage;