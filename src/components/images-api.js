import axios from "axios";

const API_KEY = 'RznIehdOF4W57uWXw3qFMgWDbDMdsriZNPT9IdEEeT4';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.params = {
  per_page: 12,        // правильно: per_page
  client_id: API_KEY,
};

export const fetchImages = async (params = {}) => {
  try {
    const { data } = await axios.get('search/photos', {
      params,
    });
    console.log('API response:', data); // для перевірки
    return data.results || [];
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};