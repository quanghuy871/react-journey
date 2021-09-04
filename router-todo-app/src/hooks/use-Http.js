import {useState} from 'react';

const useHttp = (request, applyData) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const sendRequest = async (newQuote) => {
    try {
      console.log('TRY Works');
      const res = await fetch(request.url, {
        method: request.method ? request.method : 'GET',
        body: request.body ? JSON.stringify(request.body) : null,
        headers: request.headers ? request.headers : {},
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      const data = await res.json();
      applyData(data);
      console.log(data);

    } catch (e) {
      setError(e.message || 'Something Went Wrong!');
    }
    console.log('FINISH works');
    setLoading(false);
  };

  return {
    loading: isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;