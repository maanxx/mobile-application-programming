import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function Screen01({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch(
        'https://68e5384f8e116898997ee468.mockapi.io/api/v1/products'
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading)
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.image }}
              resizeMode="contain"
              style={styles.image}
            />

            <Text style={styles.productName}>{item.name}</Text>

            <View style={styles.ratingRow}>
              {[...Array(5)].map((_, i) => (
                <AntDesign key={i} name="star" size={20} color="#FFD700" />
              ))}
              <Text style={styles.ratingText}>
                ({item.viewCount} lượt xem)
              </Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.newPrice}>{item.price}</Text>
              <Text style={styles.oldPrice}>{item.oldPrice}</Text>
            </View>

            <View style={styles.policyRow}>
              <Text style={styles.policyText}>
                Ở ĐÂU RẺ HƠN HOÀN TIỀN{' '}
              </Text>
              <FontAwesome5 name="question-circle" size={18} color="black" />
            </View>

            <TouchableOpacity
              style={styles.selectBox}
              onPress={() => navigation.navigate('Screen02', { product: item })}
            >
              <Text style={styles.selectText}>
                Màu: {item.color} - CHỌN MÀU
              </Text>
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyText}>CHỌN MUA</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 180,
  },
  productName: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 13,
    marginLeft: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  newPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  oldPrice: {
    fontSize: 14,
    color: '#555',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  policyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  policyText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
    marginRight: 5,
  },
  selectBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 5,
  },
  selectText: {
    fontWeight: '500',
    fontSize: 14,
  },
  buyButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: 15,
  },
  buyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
