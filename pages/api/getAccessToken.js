import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.body;

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
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
