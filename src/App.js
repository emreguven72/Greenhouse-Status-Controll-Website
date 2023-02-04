import React, { useEffect } from 'react';
import Layout from './pages/Layout';
import RoutePath from './routes/RoutePath';
import axios from 'axios';

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      const randTemperature = Math.floor(Math.random() * (40 - 20 + 1) + 20)
      const randHumidity = Math.floor(Math.random() * (80 - 40 + 1) + 40)
      axios.patch(`http://localhost:1337/greenhouse/update?id=2&temperature=${randTemperature}&humidity=${randHumidity}`);
    },1000)
    return () => {
        clearInterval(interval)
    }
  }, [])
  

  return (
    <Layout>
      <RoutePath />
    </Layout>
  );
}

export default App;
