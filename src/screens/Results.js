import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import DropDownDesc from '../components/DropDownDesc';
import Liner from '../components/Liner';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const desc =
  'A benign (not cancer) growth on the skin that is formed by a cluster of melanocytes (cells that make a substance called melanin, which gives color to skin and eyes). A nevus is usually dark and may be raised from the skin. Also called mole. ';
const causes =
  'Congenital melanocytic nevi are caused by a change in color (pigment) cells of the skin. The moles happen by chance. CMN is not passed down from the parents. There is no way to prevent your child from being born with moles.\n\nIn very rare cases, CMN can indicate a condition called neurocutaneous melanosis. Neurocutaneous melanosis can occur when the CMN are large and found on the back. In this case, the moles can affect the spine and brain, and may cause seizures. This type of CMN is also usually just due to chance and is not passed down from the parents.';
const symptoms =
  'Symptoms of CMN include the presence of moles on the skin from birth or that appear in the first few months of life. These birthmarks range in color from light brown to black. They may darken, get thicker or grow hair as your child ages. They are usually painless.\n\nDiagnosis of CMN involves a physical exam. The health care provider will also ask about your child or family’s medical history. If the moles are very large, located in areas that may indicate other concerns, or as part of the work-up for neurocutaneous melanosis, an imaging test called an MRI may be done. This can help the health care team find out if the mole impacts your child’s health, rather than just his or her appearance.';
const precaution =
  'The management of congenital melanocytic nevi depends on a number of factors, including the size of the lesion, the location of the lesion, the age of patient, the effect on cosmesis, and the potential for malignant transformation.\n\nAlthough the risk of malignant transformation in small and medium-sized congenital melanocytic nevi has not been established, many physicians agree that the risk is probably not significant enough to warrant the prophylactic removal of all of these lesions. However, some patients may desire removal of these lesions to improve cosmesis';

const Results = () => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(
    e => {
      if (e.nativeEvent.lines.length >= 3) {
        setLengthMore(true);
      } //to check the text is more than 4 lines or not
      console.log(lengthMore);
    },
    [lengthMore],
  );
  return (
    <ScrollView style={styles.MainContainer}>
      <View>
        {/* <Text>Results</Text> */}
        <View style={styles.ResultContainer}>
          <Text style={styles.headerText}>Nevus</Text>
          <View
            style={{
              width: '67%',
              height: '60%',
              alignItems: 'center',
              flexDirection: 'row',
              // backgroundColor: 'orange',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: 'rgba(128,128,128,0.9)',
                width: '37%',
                height: '30%',
                borderRadius: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'orange',
                  width: '30%',
                  height: '100%',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              />
            </View>
            <Text style={styles.DescStyle}> Medium Risk(20%)</Text>
          </View>
          {/* <View style={{flexDirection: 'row', witdh: '90%', height: '100%'}}>
          <View
            style={{
              backgroundColor: 'orange',
              witdh: '90%',
              height: '100%',
            }}></View>
        </View> */}
        </View>
        <View style={{paddingHorizontal: '5%'}}>
          <View>
            <Text style={[styles.headerText, {paddingVertical: '5%'}]}>
              Description
            </Text>
            <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 3}
              style={styles.DescStyle}>
              {desc}
            </Text>
            {lengthMore ? (
              <Text
                onPress={toggleNumberOfLines}
                style={[styles.DescStyle, {color: '#376FCC', marginTop: 5}]}>
                {textShown ? 'Read less ← ' : 'Read full description →'}
              </Text>
            ) : null}
            <Liner />
          </View>
          <DropDownDesc TEXT="Causes" Desc={causes} />
          <Liner />

          <DropDownDesc TEXT="Symptoms" Desc={symptoms} />
          <Liner />

          <DropDownDesc TEXT="Precautions" Desc={precaution} />
          <Liner />
        </View>
      </View>
    </ScrollView>
  );
};

export default Results;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ResultContainer: {
    // height: '13%',
    height: responsiveHeight(12.5),
    width: '100%',
    paddingVertical: '7%',
    paddingHorizontal: '5%',
    backgroundColor: 'rgba(128,128,128,0.2)',
  },
  DescStyle: {
    fontWeight: '500',
    lineHeight: 19,
    fontSize: 14,
    color: 'rgba(128,128,128,0.9)',
  },
  headerText: {
    color: 'black',
    fontSize: 19,
    fontWeight: '800',
  },
});
