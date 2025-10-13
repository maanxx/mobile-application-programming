import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductsScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch('https://68e5384f8e116898997ee468.mockapi.io/api/v1/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="blue" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

function FavoritesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Danh sách sản phẩm yêu thích</Text>
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Products') return <Ionicons name="list" size={size} color={color} />;
          if (route.name === 'Favorites') return <Ionicons name="heart" size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

function ProductDetails({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      const response = await fetch(`https://68e5384f8e116898997ee468.mockapi.io/api/v1/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="blue" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image source={{ uri: product.image }} style={{ width: '100%', height: 250, borderRadius: 10 }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>{product.name}</Text>
      <Text style={{ fontSize: 18, color: 'tomato' }}>{product.price}</Text>
      <Text style={{ textDecorationLine: 'line-through', color: 'gray' }}>{product.oldPrice}</Text>
      <Text style={{ marginTop: 10 }}>Màu: {product.color}</Text>
      <Text>Đánh giá: {product.rating}</Text>
      <Text>Lượt xem: {product.viewCount}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Chi tiết sản phẩm' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 15, backgroundColor: '#fff', borderRadius: 10, padding: 10 },
  image: { width: '100%', height: 150, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 5 },
  price: { fontSize: 16, color: 'tomato', marginTop: 3 },
});
