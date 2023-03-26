import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Disease from './src/screens/Disease';
import Results from './src/screens/Results';
import Splash from './src/screens/Splash';
import Navigation from './src/navigation/Navigation';

const App = () => {
  // return <Results />;
  // return <Navigation />;
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 2000);
  }, []);

  return isLoad ? <Splash /> : <Navigation />;
};

export default App;

const styles = StyleSheet.create({});
