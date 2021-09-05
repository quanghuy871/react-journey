import {useState, useCallback} from 'react';

const useHttp = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const sendRequest = useCallback(async (request, applyData) => {
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

    } catch (e) {
      setError(e.message || 'Something Went Wrong!');
    }
    console.log('FINISH works');
    setLoading(false);
  }, []);

  return {
    loading: isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;