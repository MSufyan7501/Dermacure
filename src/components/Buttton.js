/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Button = ({TEXT, navigation, ToScreen, onPress, DISABLE}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={DISABLE}
      style={[
        {
          height: responsiveHeight(5.5),
          width: responsiveWidth(38),
          backgroundColor: DISABLE ? 'grey' : '#376FCC',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          marginVertical: responsiveHeight(2),
        },
      ]}>
      <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '700'}}>
        {TEXT}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
