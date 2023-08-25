import axios from 'axios';

const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/random_greeting'); // Replace with your API endpoint
    dispatch({ type: 'FETCH_RANDOM_GREETING', payload: response.data });
  } catch (error) {
    // console.error('Error fetching greeting:', error);
  }
};
export default fetchRandomGreeting;
