import * as React from 'react';

import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SendDirectSms} from 'react-native-send-sms';

export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [bodySMS, setBodySMS] = React.useState("Hello World");




  function sendSmsData(mobileNumber: string, bodySMS: string) {
    SendDirectSms(mobileNumber, bodySMS)
      .then((res: any) => console.log("then", res))
      .catch((err: any) => console.log("catch", err))
  }


  return (
    <View style={styles.container}>
      {/*<Text>Result: {result}</Text>*/}
      <Text style={styles.titleTextsmall}>
        Enter Recipients Number
      </Text>
      <TextInput
          value={mobileNumber}
          onChangeText={
            (mobileNumber) => setMobileNumber(mobileNumber)
          }
          placeholder={'Enter Conatct Number to Call'}
          keyboardType="numeric"
          style={styles.textInput}
      />
      <Text style={styles.titleTextsmall}>
        Enter SMS Body
      </Text>
      <TextInput
          value={bodySMS}
          onChangeText={(bodySMS) => setBodySMS(bodySMS)}
          placeholder={'Enter SMS body'}
          style={styles.textInput}
      />
      <TouchableOpacity style={styles.sendButton} onPress={()=> sendSmsData("0762925096","Hello World")}>
        <Text style={styles.sendButtonLabel}>Send SMS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:32
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  sendButtonLabel: {
    fontSize: 16,
    color: "#FFFFFF",

  },
  sendButton: {
    width: "100%",
    backgroundColor: "#22C674",
    borderRadius: 4,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 30,
  },
  titleTextsmall: {
    marginBottom: 8,
    marginTop: 16,
    fontSize: 16,
    alignSelf: "flex-start",
  },
  textInput: {
    paddingLeft: 16,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#3F44511F",
    borderRadius: 4,
    height: 44,
    color: "#000000",
    opacity: 0.75,
    width: "100%",
  },
});
