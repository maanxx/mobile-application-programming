import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  { Ionicons, Fontisto } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient 
        colors={['#FFFFFF','#37D6F8']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{flex: 1}}>
        <View style={styles.lock}>
          <Ionicons name="lock-closed" size={150} color="black" />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>
            FORGET
          </Text>
          <Text style={styles.title}>
            PASSWORD
          </Text>
        </View>
        <View style={{flex: 0.4}}>
          <Text style={styles.textView}>
            Provide your account's email for which you want to reset your password 
          </Text>
        </View>
        <View style={styles.inputView}>
          <Fontisto name="email" size={24} color="black" style={{marginRight: 20}}/>
          <TextInput
            style={styles.input}
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'

          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  lock: {
    paddingVertical: 50,
    alignItems: 'center'
  },
  title: {
    fontSize: '25px',
    fontWeight: 'bold',

  },
  textView: {
    fontSize: '13px',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  inputView: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 40,
    marginVertical: 10,
    backgroundColor: '#C4C4C4',
    width: 300,
    height: 45
  },
  input: {
    flex: 1,
    fontSize: '16px',
    color: '#000'
  },
  buttonView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 45,
    width: 300
    
  },
  buttonText: {
    fontWeight: 'bold'
  }
});
