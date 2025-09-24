import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/vs_red.png')}
        resizeMode="contain"
        style={{ width: 301, height: 306 }}
      />
      <Text>
        Dien thoai Vsmart Joy 3 {'\n'} Hang chinh hang
        Mau: <Text>do</Text>
        Cung cap boi <Text>Tiki Tradding</Text>
        <Text>1.790.000 d</Text>
      </Text>
     
      <TouchableOpacity style={styles.btnComplete}>XONG</TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 5,
  },
  btnComplete: {
    backgroundColor: '#1952E294',
    color: '#FFF',
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 70,
    marginBottom: 0,
    borderRadius: 6,
    padding: 10,
    width: '85%',
    alignItems: 'center'

  },

});
