/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {Image, ImageBackground, Text, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../assets/helpers';
import Button from '../components/Buttton';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import UriDisplay from '../components/UriDisplay';
import ProgressDialogue from '../components/ProgressDialogue';
const icon = '../assets/icons/';
let url = null;
// export default class Diseases extends Component {
//   //   //use states variables
//   constructor() {
//     super();
//     this.state = {imgUri: ''};
//     this.state = {getStatus: false};
//   }

//   // functions
//   choosePhoto = () => {
//     const option = {noData: true};
//     launchImageLibrary(option, response => {
//       // console.log(response.assets[0]);
//       if (!response.didCancel) this.setState({imgUri: response.assets[0]});
//     });
//   };
//   takePhoto = () => {
//     const option = {};
//     launchCamera(option, response => {
//       if (!response.didCancel) this.setState({imgUri: response.assets[0]});
//     });
//   };
//   // UploadOnServer = async () => {
//   //   var form_data = new FormData();
//   //   form_data.append('img', {
//   //     uri: imgUri.uri,
//   //     name: imgUri.fileName,
//   //     type: imgUri.type,
//   //   });
//   //   console.log('form data : ', form_data);
//   //   let res = await fetch('https://dermacure.pythonanywhere.com/upload', {
//   //     method: 'POST',
//   //     body: form_data,
//   //     headers: {
//   //       'Content-Type': 'multipart/form-data',
//   //     },
//   //   }).then(this.setState({imgUri: response.assets[0]}));
//   //   // setimgUrl(await res.json());
//   //   let responseJson = await res.json();
//   //   console.log('response :::', responseJson.url);
//   //   console.log('get :::', getStatus);
//   // };
//   render() {
//     return (
//       <ImageBackground
//         source={require(icon + 'background-image.png')}
//         blurRadius={10}
//         resizeMode={'stretch'}
//         style={[styles.MainView]}>
//         <View style={styles.MainBox}>
//           <View
//             style={{
//               flexDirection: 'row',
//             }}>
//             <Button TEXT={'Open Gallery'} onPress={this.choosePhoto} />
//             <Button TEXT={'Take Photo'} onPress={this.takePhoto} />
//           </View>
//           {this.state.imgUri ? (
//             <View
//               style={{
//                 height: '60%',
//                 alignItems: 'center',
//                 width: '90%',
//               }}>
//               <UriDisplay imgUri={this.state.imgUri} />
//               <Button
//                 TEXT={'Upload Photo'}
//                 onPress={() => {
//                   this.setState({imgUri: null});
//                   this.setState({imgUri: true});
//                   console.log(this.state.imgUri);
//                   console.log(this.state.getStatus);
//                 }}
//               />
//             </View>
//           ) : this.state.getStatus ? (
//             <UriDisplay imgUri={url} />
//           ) : null}
//         </View>
//       </ImageBackground>
//     );
//   }
// }
const Disease = ({navigation}) => {
  //use states variables
  const [imgUri, setimgUri] = useState(null);
  const [getStatus, setgetStatus] = useState(false);
  const [wait, setwait] = useState(false);

  // functions
  const choosePhoto = () => {
    const option = {noData: true};
    launchImageLibrary(option, response => {
      // console.log(response.assets[0]);
      if (!response.didCancel) setimgUri(response.assets[0]);
    });
  };

  const takePhoto = () => {
    const option = {};
    launchCamera(option, response => {
      if (!response.didCancel) setimgUri(response.assets[0]);
    });
  };

  const UploadOnServer = async () => {
    setwait(true);
    var form_data = new FormData();
    form_data.append('img', {
      uri: imgUri.uri,
      name: imgUri.fileName,
      type: imgUri.type,
    });
    console.log('form data : ', form_data);

    await fetch('https://dermacure.pythonanywhere.com/upload', {
      method: 'POST',
      body: form_data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => response.json())
      .then(async json => {
        // console.log('JSON RESPONSE :: ', json.url);
        url = json.url;
        // console.log('URL :: ', url);
        ToastAndroid.show('Image Uploaded to Server', ToastAndroid.SHORT);
        setimgUri(null);
        setgetStatus(true);
      })
      .catch(error => {
        console.error(error);
      });
    setwait(false);
    // setimgUrl(await res.json());
    // let responseJson = await res.json();
    // console.log('response :::', responseJson.url);
    // console.log('get :::', getStatus);
  };

  return (
    <ImageBackground
      source={require(icon + 'background-image.png')}
      blurRadius={10}
      resizeMode={'stretch'}
      style={[styles.MainView]}>
      <View style={styles.MainBox}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Button TEXT={'Open Gallery'} onPress={choosePhoto} />
          <Button TEXT={'Take Photo'} onPress={takePhoto} />
        </View>

        {imgUri ? (
          <View
            style={{
              height: '60%',
              alignItems: 'center',
              width: '90%',
            }}>
            <UriDisplay imgUri={imgUri.uri} />
            {/* <Button TEXT={'Upload Photo'} onPress={UploadOnServer} /> */}
            <Button
              TEXT={'Get Results'}
              // picture server pe jay gi server response me disease
              // ka nam bataye ga agar koi error aata ha to alert nae
              //to next screen ko params me disease name bhejna
              onPress={() => {
                navigation.navigate('Results');
              }}
            />

            {wait ? <ProgressDialogue /> : null}
          </View>
        ) : getStatus ? (
          <UriDisplay imgUri={url} />
        ) : null}
      </View>
    </ImageBackground>
  );
};

export default Disease;
