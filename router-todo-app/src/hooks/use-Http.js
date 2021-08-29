import {useState} from 'react';

const useHttp = (request, applyData) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendRequest = async (newQuote) => {
    try {
      setLoading(true);
      const res = await fetch(request.url, {
        method: request.method ? request.method : 'GET',
        body: JSON.stringify(newQuote),
        headers: request.headers || {},
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      const data = await res.json();
      console.log(data);
      applyData(data);

    } catch (e) {
      setError(e.message || 'Something Went Wrong!');
    }
    setLoading(false);
  };

  return {
    loading: isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;