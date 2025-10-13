import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function Screen02({ navigation }) {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [loading, setLoading] = useState(true);

  const getColors = async () => {
    try {
      const response = await fetch('https://68e5384f8e116898997ee468.mockapi.io/api/v1/products');
      const data = await response.json();
      const uniqueColors = Array.from(new Set(data.map((item) => item.color))).map((color) => ({
        color,
      }));
      setColors(uniqueColors);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getColors();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/vs_blue.png')}
          resizeMode="contain"
          style={{ width: 70, height: 100, marginRight: 10 }}
        />
        <Text style={styles.title}>
          Điện thoại Vsmart Joy 3 {'\n'}Hàng chính hãng
        </Text>
      </View>

      <View style={styles.colorSection}>
        <Text style={styles.colorLabel}>Chọn màu bên dưới:</Text>

        <View style={styles.colorList}>
          {colors.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorBox,
                {
                  backgroundColor: item.color,
                  borderWidth: selectedColor === item.color ? 3 : 1,
                  borderColor: selectedColor === item.color ? 'blue' : '#C4C4C4',
                },
              ]}
              onPress={() => setSelectedColor(item.color)}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.btnComplete}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>XONG</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  colorSection: {
    width: '100%',
    backgroundColor: '#EAEAEA',
    paddingVertical: 10,
    borderRadius: 10,
  },
  colorLabel: {
    fontWeight: 'bold',
    paddingLeft: 15,
    marginBottom: 10,
  },
  colorList: {
    alignItems: 'center',
  },
  colorBox: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 8,
  },
  btnComplete: {
    backgroundColor: '#1952E2',
    borderRadius: 6,
    padding: 12,
    width: '85%',
    alignItems: 'center',
    marginTop: 25,
  },
});
