import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Liner from './Liner';

const DropDownDesc = ({TEXT, Desc}) => {
  const [dropdown, setdropdown] = useState(false);
  return (
    <View style={styles.MainContainer}>
      <View style={styles.DropdownView1}>
        <Text style={styles.headerText}>{TEXT}</Text>
        <TouchableOpacity
          onPress={() => {
            dropdown ? setdropdown(false) : setdropdown(true);
          }}
          style={styles.iconViewStyle}>
          <Image
            style={styles.iconStyle}
            resizeMode={'center'}
            source={
              dropdown
                ? require('../assets/icons/Dropup.png')
                : require('../assets/icons/Dropdown.png')
            }
          />
        </TouchableOpacity>
      </View>
      {dropdown ? <Text style={styles.DescStyle}>{Desc}</Text> : null}
    </View>
  );
};

export default DropDownDesc;

const styles = StyleSheet.create({
  MainContainer: {paddingLeft: '3%', paddingRight: '2%'},
  headerText: {
    color: 'black',
    fontSize: 19,
    fontWeight: '800',
    paddingBottom: '2%',
  },
  DropdownView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: '100%',
    height: '100%',
  },
  DescStyle: {
    fontWeight: '600',
    lineHeight: 19,
    // justifyContent: 'center',
    fontSize: 14,
    color: 'rgba(128,128,128,0.9)',
  },
  iconViewStyle: {
    width: '13%',
    padding: '1%',
    height: 28,
  },
});
