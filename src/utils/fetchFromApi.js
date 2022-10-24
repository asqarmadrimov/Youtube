import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'fab371d286mshb5b33d2d19bbef3p181301jsnc1525ffd3856',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
