import './App.css';
import {useQuery} from 'react-query';

function App() {
  const {isLoading, isError, data} = useQuery('foods', () => {
    fetch('your-api-here').then((res) => res.json());
  });

  if (isLoading) {
    return 'Loading...';
  }

  if (isError) {
    return 'Error';
  }

  const food = data.results[0];

  return (
    <div className="App">
      {food}
    </div>
  );
}

export default App;
