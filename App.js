import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Disease from './src/screens/Disease';
import Results from './src/screens/Results';
import Splash from './src/screens/Splash';
import Navigation from './src/navigation/Navigation';
import {NetworkInfo} from 'react-native-network-info';
import {getIpAddress, setIpAddress} from './src/assets/helpers';

const App = () => {
  // return <Results />;
  // return <Navigation />;
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoad(false);
      }, 2000);
      await NetworkInfo.getIPAddress()
        .then(ipAddress => {
          setIpAddress(ipAddress);
          console.log('IP address:', ipAddress);
        })
        .catch(error => {
          console.log('Error getting IP address:', error);
        });

      console.log('Ip from App.js', getIpAddress());
    })();
  }, []);

  return isLoad ? <Splash /> : <Navigation />;
};

export default App;

const styles = StyleSheet.create({});
