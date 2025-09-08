import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, TextInput, Image } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginView}>
        <Text style={styles.loginText}>LOGIN</Text>
      </View>
      <View style={styles.emailView}>
        <MaterialIcons name="person" size={30} color="black" />
        <TextInput
          style={styles.emailInput}
          placeholder='Name'
          autoCapitalize='none'
        />
      </View>
      <View style={styles.emailView}>
        <Ionicons name="lock-closed" size={30} color="black" />
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
        <Text style={styles.firstText}>CREATE ACCOUNT</Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2c300',
    justifyContent: 'center',
  },
  loginView: {
    marginBottom: 100
  },
  loginText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20
  },
  emailView: {
    flexDirection: 'row',
    backgroundColor: '#dcbe3b',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  emailInput: {
    flex: 1,
    fontSize: 20
  },
  buttonView: {
    backgroundColor: '#060000',
    marginHorizontal: 20,
    marginTop: 50
  },
  button: {
    padding: 5
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 28,
    textAlign: 'center'
  },
  textView: {
    marginTop: 10
  },
  firstText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },

});