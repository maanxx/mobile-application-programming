import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { OtpInput } from "react-native-otp-entry";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient 
        colors={['#FFFFFF','#37D6F8']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{flex: 1}}>

        <View style={{flex: 2, alignItems: 'center'}}>
          <Text style={styles.title}>CODE</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.textView}>VERIFICATION</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.phoneText}>Enter ontime password sent on ++84909923221</Text>
        </View>
        <OtpInput 
          numberOfDigits={6}
          onFilled={(code) => console.log("OTP:", code)}
          focusColor="black"
          theme={{
            containerStyle: { marginVertical: 20 },
            pinCodeContainerStyle: { borderBottomWidth: 2, borderColor: '#000' },
            pinCodeTextStyle: { fontSize: 20, fontWeight: 'bold' }
          }}
        />
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 45,
    paddingVertical: 70
  },
  textView: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  phoneText: {
    fontSize: 15, 
    fontWeight: 'bold', 
    textAlign: 'center'
  },
  buttonView: {
    flex: 2,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#E3C000',
    width: 300,
    height: 45
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10
  }
});