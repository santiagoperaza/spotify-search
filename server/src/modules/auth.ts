import qs from 'qs';
import axios from 'axios';
import config from '../config/config.js';
const auth_token = Buffer.from(`${config.clientId}:${config.clientSecret}`, 'utf-8').toString('base64');

// Simple cache to store token and do not request it in every endpoint.
const token = '';

export const getAuth = async (): Promise<string> => {
  try {
    if (token !== '') {
      return token;
    }
    const token_url = config.spotifyAuthUrl;
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    return response.data.access_token;
  } catch (error) {
      console.error(`Failed getting auth, ${error.message}`);
  }
}