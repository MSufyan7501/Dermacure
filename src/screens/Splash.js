import {ImageBackground} from 'react-native';
import React from 'react';
import {Animated} from 'react-native';
const opacitys = new Animated.Value(1);
Animated.timing(opacitys, {
  toValue: 0,
  duration: 1000, // in milliseconds
  useNativeDriver: true,
}).start();

const Splash = () => {
  return (
    <ImageBackground
      source={require('../assets/icons/background-image.png')}
      resizeMode={'stretch'}
      style={{flex: 1}}
    />
  );
};
export default Splash;
