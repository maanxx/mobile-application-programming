import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginView}>
        <Image source={require("./eye-icon.png")}/>
      </View>
      <View style={styles.emailView}>
        <Image style={styles.img} source={require("./blue-user-icon.png")}/>
        <TextInput
          style={styles.emailInput}
          placeholder='Please input user name'
          autoCapitalize='Please input password'
        />
      </View>
      <View style={styles.emailView}>
        <Image style={styles.img} source={require("./blue-lock-icon.png")}/>
        <TextInput
          style={styles.emailInput}
          placeholder='Password'
          autoCapitalize='none'
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.firstText}>Register</Text>
        <Text style={styles.firstText}>Forgot Password</Text>
      </View>

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Other Login Methods</Text>
        <View style={styles.line} />
      </View>
      <View><Image source={require("../assets/button-group.png")}/></View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  loginView: {
    alignItems: 'center',
    marginBottom: 0
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: 'containe',
  },
  emailView: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 3,
    borderColor: '#56585b'
  },
  emailInput: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 20,
    color: '#56585b'
  },
  buttonView: {
    backgroundColor: '#386ffc',
    marginHorizontal: 20,
    marginTop: 50,
    borderRadius: 10
  },
  button: {
    padding: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center'
  },
  textView: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
    justifyContent: 'space-between'
  },
  firstText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,

  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#386ffc',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});