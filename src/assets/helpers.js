import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

// export const ipAddress = '192.168.100.11'; // replace with your desired default IP address
export const ipAddress = '10.8.224.115'; // replace with your desired default IP address

export const getIpAddress = () => ipAddress;

export const setIpAddress = newIpAddress => {
  // ipAddress = newIpAddress;
};
export const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  InputContainerStyle: {
    width: '90%',
    backgroundColor: 'transparent',
    opacity: 1,
    marginLeft: '7%',
    color: 'black',
  },
  Container: {
    flexDirection: 'row',
    width: '90%',
    marginVertical: 9,
    height: responsiveHeight(6),
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    paddingHorizontal: '8%',
    alignItems: 'center',
    borderRadius: responsiveHeight(6) / 2,
  },
  MainBox: {
    width: '87%',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 26,
    paddingVertical: '3%',
    alignItems: 'center',
  },
  MainText: {
    fontSize: 24,
    paddingVertical: '3%',
    fontWeight: '800',
    fontStyle: 'italic',
    color: '#376FCC',
  },
  Note: {
    fontSize: 12,
    fontWeight: '800',
    color: '#376FCC',
    textAlign: 'center',
    paddingHorizontal: '10%',
  },
  FbGoogleBox: {
    flexDirection: 'row',
    height: responsiveHeight(5.5),
    backgroundColor: 'white',
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
  },
});
export const api = 'http://dermacure.pythonanywhere.com/';
