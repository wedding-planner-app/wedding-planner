import axios from 'axios';

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  searchVenues: function (query) {
    return axios.get('/api/venue/search?name=' + query);
  },
};
