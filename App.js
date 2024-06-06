import React, { useState, useEffect } from 'react';
import StackNavigation from './navigation/StackNavigatorScreen';
// import SplashScreen from './screen/auth/SplashScreen';
// import HomeScreen from './screen/home/HomeScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // return loading ? <SplashScreen /> : <HomeScreen />;
  return <StackNavigation/>
}
export default App