import axios from 'axios';

const chatGPT = axios.create({
  baseURL: `${process.env.REACT_APP_CATBOT_BASE_URL}` || 'localhost:6060',
});

const errResponse = [
  {
    role: 'assistant',
    content:
      'Sorry meow! Looks like there was an error. Maybe try again later?',
  },
];

export const saveCatGPTResponse = async (data) => {
  const response = await chatGPT.post('/chat/save', data, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response?.data || errResponse;
};

export const getCatGPTResponse = async (sessionId) => {
  const response = await chatGPT.get(`/chat?sessionId=${sessionId}`);
  return response?.data || errResponse;
};
