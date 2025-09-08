import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, TextInput, Image } from 'react-native';
import { RadioButton } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.regText}>
        <Text style={styles.regText}>REGISTER</Text>
      </View>
      <View style={styles.emailView}>
        <TextInput
          style={styles.emailInput}
          placeholder='Name'
          autoCapitalize='none'
        />
      </View>
      <View style={styles.emailView}>
        <TextInput
          style={styles.emailInput}
          placeholder='Phone'
          autoCapitalize='none'
        />
      </View>
      <View style={styles.emailView}>
        <TextInput
          style={styles.emailInput}
          placeholder='Email'
          autoCapitalize='none'
        />
      </View>
      <View style={styles.emailView}>
        <TextInput
          style={styles.emailInput}
          placeholder='Password'
          autoCapitalize='none'
        />
        <AntDesign name="eye" size={30} color="black" />
      </View>
      <View style={styles.emailView}>
        <TextInput
          style={styles.emailInput}
          placeholder='Birthday'
          autoCapitalize='none'
        />
      </View>
      <View style={styles.rowContainer}>
        <RadioButton style={styles.radio} value='first'/> <Text style={{fontSize: 20}}>Male</Text>
        <RadioButton style={styles.radio} value='second'/> <Text style={{fontSize: 20}}>Femal</Text>
      </View> 
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.textView}>
        <Text style={styles.firstText}>When you agree to terms and conditions</Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d8efdf',
    justifyContent: 'center',
  },
  regText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },
  emailView: {
    flexDirection: 'row',
    backgroundColor: '#cae1d1',
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginHorizontal: 20,
    marginVertical: 10
    
  },
  emailInput: {
    flex: 1,
    fontSize: 20
  },
  buttonView: {
    backgroundColor: '#c34e3b',
    marginHorizontal: 20,
    marginTop: 15
  },
  button: {
    padding: 5
  },
  buttonText: {
    color: '#d8efdf',
    fontSize: 28,
    textAlign: 'center'
  },
  textView: {
    marginTop: 10
  },
  firstText: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
  },
  img: {
    alignItems: 'center',
  },
  icon: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    margin: 0,
    padding: 0
  },
  rowContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginHorizontal: 35,

  },
});