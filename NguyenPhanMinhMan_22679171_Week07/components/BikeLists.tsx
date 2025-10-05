import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const DATA = [{}];
export default function BikeLists() {
  const [bikes, setBikes] = useState([]);
  const navigation = useNavigation();
  const getBikes = async () => {
    try {
      const resp = await fetch(
        'https://68dc7ef37cd1948060aa7b62.mockapi.io/api/v1/bikes'
      );
      const json = await resp.json();
      setBikes(json);
    } catch (e) {
      console.log('Error', e);
    }
  };
  useEffect(() => {
    getBikes();
  }, []);

  const renderItem = ({ item }: any) => (
    <View style={{ justifyContent: 'space-between' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailBikes', { bike: item })}>
        <View style={{backgroundColor: '#F7BA8326', borderRadius: 15, marginVertical: 5, marginHorizontal: 5}}>
          <Image
            source={{ uri: item.img }}
            resizeMode="contain"
            style={{ width: 150, height: 150 }}
          />
          <Text style={{fontWeight: 'bold', textAlign: 'center', color: "#00000099"}}>{item.title}</Text>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}><FontAwesome5 name="dollar-sign" size={18} color="#F7BA83" />{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: '#E94141',
            fontSize: 20,
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
          }}>
          The world’s Best Bike
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#E9414187',
            borderRadius: 4,
            paddingRight: 30,
            paddingLeft: 30,
            paddingTop: 3,
            paddingBottom: 3,
          }}>
          <TouchableOpacity>
            <Text style={{ color: '#E94141' }}>All</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#E9414187',
            borderRadius: 4,
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 3,
            paddingBottom: 3,
          }}>
          <TouchableOpacity>Roadbike</TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#E9414187',
            borderRadius: 4,
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 3,
            paddingBottom: 3,
          }}>
          <TouchableOpacity>Mountain</TouchableOpacity>
        </View>
      </View>
      <FlatList data={bikes} renderItem={renderItem} numColumns={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
