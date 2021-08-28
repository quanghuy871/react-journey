import {useState} from 'react';

const useHttp = (request, applyData) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendRequest = async () => {
    try {
      setLoading(true);
      const res = await fetch(request.url, {
        method: request.method ? request.method : 'GET',
        body: JSON.stringify(request.body),
        headers: request.headers || {},
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      const data = await res.json();
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