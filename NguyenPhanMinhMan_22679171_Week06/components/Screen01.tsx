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
        source={require('./assets/vs_blue.png')}
        resizeMode="contain"
        style={{ width: 112, height: 132 }}
      />
      <Text style={{ fontWeight: 500, marginVertical: 10 }}>
        Dien thoai Vsmart Joy 3 - Hang chinh hang
      </Text>
      {/* start*/}

      <View style={styles.start}>
        <AntDesign name="star" size={24} color="yellow" />
        <AntDesign name="star" size={24} color="yellow" />
        <AntDesign name="star" size={24} color="yellow" />
        <AntDesign name="star" size={24} color="yellow" />
        <AntDesign name="star" size={24} color="yellow" />
        <Text style={{paddingLeft: 20}}>(Xem 828 danh gia)</Text>
      </View>
      {/* price*/}

      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>1.790.000 d</Text>
        <Text
          style={{
            fontSize: 13,
            color: 'black',
            textDecorationLine: 'line-through',
            paddingLeft: 10
          }}>
          1.790.000 d
        </Text>
      </View>
      {/* ?*/}

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'red', fontWeight: 'bold', marginVertical: 10 }}>
          O DAU RE HON HOAN TIEN{' '}
        </Text>
        <FontAwesome5 name="question-circle" size={24} color="black" />
      </View>
      {/* chon mau*/}
      <View style={styles.viewSelect}>
        <TouchableOpacity style={styles.btnSelect}>
          4 MAU-CHON MAU
        </TouchableOpacity>
        <AntDesign name="right" size={20} color="black"/>
      </View>
      <TouchableOpacity style={styles.btnBuy}>CHON MUA</TouchableOpacity>
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
  start: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  btnBuy: {
    backgroundColor: 'red',
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
  viewSelect: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  btnSelect: {
    justifyContent: 'center',
    paddingRight: 90
  },
});
