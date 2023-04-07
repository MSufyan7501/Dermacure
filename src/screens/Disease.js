/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {Alert, ImageBackground, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import {ipAddress, styles} from '../assets/helpers';
import Button from '../components/Buttton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import UriDisplay from '../components/UriDisplay';
import ProgressDialogue from '../components/ProgressDialogue';

const icon = '../assets/icons/';
let url = null; //image url
let response = {result: 'Melanoma', percentage: 40}; //response after fetching results
let fileName = null; // filename duplication
const Disease = ({navigation}) => {
  //use states variables
  const [Reserved, setReserved] = useState(null);
  const [imgUri, setimgUri] = useState(null);
  const [getStatus, setgetStatus] = useState(false);
  const [wait, setwait] = useState(false);
  const [uploaded, setuploaded] = useState(false);

  // function to select photo from gallery
  const choosePhoto = () => {
    setuploaded(false);
    const option = {noData: true};
    launchImageLibrary(option, response => {
      // console.log(response.assets[0]);
      if (!response.didCancel) setimgUri(response.assets[0]);
    });
  };

  // function to take photo from camera
  const takePhoto = () => {
    setuploaded(false);
    const option = {};
    launchCamera(option, response => {
      if (!response.didCancel) setimgUri(response.assets[0]);
    });
  };

  // function to fetch results from model
  const GetResults = async () => {
    setwait(true);
    await fetch('http://10.8.228.21:5000/predict/' + fileName, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(async json => {
        response = json;
        console.log('prediction :: ', response);
      })
      .catch(e => {
        console.log('error :: ', e);
      });
    // console.log(`${imgUri.fileName}`);
    setwait(false);
    setuploaded(false);
  };

  // function upload photo on API
  const UploadOnServer = async () => {
    try {
      setwait(true);
      var form_data = new FormData();
      form_data.append('img', {
        uri: imgUri.uri,
        name: imgUri.fileName,
        type: imgUri.type,
      });
      // console.log('form data : ', form_data);

      await fetch('http://10.8.228.21:5000/upload', {
        method: 'POST',
        body: form_data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => response.json())
        .then(async json => {
          console.log('JSON RESPONSE :: ', json.filename);
          url = json.url;
          fileName = json.filename;
          console.log('URL :: ', url);
          ToastAndroid.show('Image Uploaded to Server', ToastAndroid.SHORT);
          // setimgUri(null);
          setgetStatus(true);
          setuploaded(true);
        })
        .catch(error => {
          console.error(error);
        });
      setwait(false);
      // setimgUrl(await res.json());
      // let responseJson = await res.json();
      // console.log('response :::', responseJson.url);
      // console.log('get :::', getStatus);
    } catch (error) {
      // ToastAndroid.show(error, ToastAndroid.LONG);
      console.log('error TryCatch :: ', error);
    }
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
          <Button
            TEXT={'Open Gallery'}
            onPress={() => {
              choosePhoto();

              // navigation.navigate('Results', response);
            }}
          />
          <Button
            TEXT={'Take Photo'}
            onPress={() => {
              takePhoto();
            }}
          />
        </View>

        {imgUri ? (
          <View
            style={{
              height: '60%',
              alignItems: 'center',
              width: '90%',
            }}>
            <UriDisplay imgUri={imgUri.uri} />
            {uploaded ? (
              <Button
                TEXT={'Get Results'}
                onPress={async () => {
                  await GetResults();
                  // console.log('result', response.percentage);
                  navigation.navigate('Results', response);
                }}
              />
            ) : (
              <Button
                TEXT={'Upload Photo'}
                onPress={() => {
                  UploadOnServer();
                }}
              />
            )}

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
