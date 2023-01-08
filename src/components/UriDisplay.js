import {ProgressBarAndroidComponent, StyleSheet, View} from 'react-native';

import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import React from 'react';

import Button from './Buttton';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const UriDisplay = ({imgUri}) => {
  return (
    <Image
      resizeMode="contain"
      indicator={Progress.Pie}
      indicatorProps={{
        size: 60,
        borderWidth: 0,
        color: '#376FCC',
        unfilledColor: 'rgba(200, 200, 200, 0.2)',
      }}
      style={{
        height: responsiveHeight(50),
        width: '100%',
      }}
      source={{
        uri: imgUri,
      }}
    />
  );
};

// import Image from 'react-native-image-progress';
// import Progress from 'react-native-progress';
// <Image
//   source={{uri: 'http://loremflickr.com/640/480/dog'}}
//   indicator={Progress.Pie}
//   indicatorProps={{
//     size: 80,
//     borderWidth: 0,
//     color: 'rgba(150, 150, 150, 1)',
//     unfilledColor: 'rgba(200, 200, 200, 0.2)',
//   }}
//   style={{
//     width: 320,
//     height: 240,
//   }}
// />;

export default UriDisplay;
