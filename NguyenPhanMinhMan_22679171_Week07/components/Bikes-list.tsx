import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

const getBikes = () => {
  return fetch('https://68dc7ef37cd1948060aa7b62.mockapi.io/api/v1/bikes')
  .then(resp => resp.json())
  .then(json => {
    return json.bikes;
  })
  .catch(error => {
    console.log("error");
  })
};
const DATA = [{

}]
export default function App() {
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
          <TouchableOpacity style={{ color: '#E94141' }}>All</TouchableOpacity>
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
