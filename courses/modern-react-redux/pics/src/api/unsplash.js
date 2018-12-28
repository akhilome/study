import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c3aabcfefb19a92daec165638fdb2d12c3a0b3cb9edc39e2dee1a3ec27ef930d'
  }
});
