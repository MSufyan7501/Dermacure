import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ProgressDialogue = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: responsiveHeight(12),
          width: responsiveWidth(75),
          flexDirection: 'row',
          backgroundColor: '#bcc6d6',
          borderRadius: 4,
          paddingHorizontal: '10%',
        }}>
        <View
          style={{
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'black',
          }}>
          <ProgressBar color="#376FCC" />
        </View>
        <View
          style={{
            // width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: '#376FCC',
              fontStyle: 'italic',
            }}>
            Please wait...
          </Text>
        </View>
      </View>
    </View>
  );
  // return <Disease />;
  // return (
  // <View>
  //   <Text>App</Text>
  // </View>
  // );
};

export default ProgressDialogue;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 180,
    height: 900,
    top: -300,
    width: 390,
    position: 'absolute',
    paddingTop: '38%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
