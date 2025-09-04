import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient 
        colors={['#FFFFFF','#37D6F8']}
        start={{x: 0, y: 0}} /*đầu*/
        end={{x: 0, y: 1}}/*cuối*/
        style={{flex: 1}}>
        <View style={styles.circle}>
          <Feather name="circle" size={150} color="black"/>
        </View>
        <View style={{flex: 0.3, alignItems: 'center'}}>
          <Text style={styles.textTitle}>GROW</Text>
          <Text style={styles.textTitle}>YOUR BUSINESS</Text>
        </View>
        <View style={{flex: 0.3}}>
          <Text style={styles.desc}>We will help you to grow your business using online server</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonView}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textEnd}>HOW WE WORK?</Text>
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
  circle: {
    paddingVertical: 50,
    alignItems: 'center'
  },
  textTitle: {
    fontSize: '25px',
    fontWeight: 'bold',

  },
  desc: {
    fontSize: '15px',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  buttonView: {
    backgroundColor: '#E3C000',
    alignItems: 'center',
    width: '150px',
    height: '50px'
  },
  buttonText: {
    fontSize: '25px',
    fontWeight: 'bold',
    padding: 5
  },
  textEnd: {
    fontWeight: 'bold',
    fontSize: '23px',
    textAlign: 'center',
    marginVertical: 25
  }
});

