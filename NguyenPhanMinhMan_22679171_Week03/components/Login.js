import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, TextInput, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginView}>
        <Text style={styles.loginText}>LOGIN</Text>
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
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.firstText}>When you agree to terms and conditions</Text>
        <Text style={styles.secText}>For got you password</Text>
        <Text style={styles.thirText}>Or login with</Text>
      </View>
      <View style={styles.img}><Image source={require("../assets/social-icon-group.png")} style={styles.icon} /></View>
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
  loginView: {
    marginBottom: 40
  },
  loginText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  emailView: {
    flexDirection: 'row',
    backgroundColor: '#cae1d1',
    paddingHorizontal: 20,
    paddingVertical: 25,
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
    marginTop: 50
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
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 20
  },
  secText: {
    color: '#5d25fa',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 500,
    marginTop: 20
  },
  thirText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 500,
    marginTop: 20
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
  }
});