import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const data = [
    { id: '1', name: 'iPhone 16' },
    { id: '2', name: 'Samsung Galaxy S24' },
    { id: '3', name: 'Vsmart Joy 3' },
    { id: '4', name: 'Xiaomi Redmi Note 13' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>List Products</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

function SearchScreen() {
  const [keyword, setKeyword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Find something......</Text>
      <TextInput
        style={styles.input}
        placeholder="Input kw"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Text style={{ marginTop: 15 }}>
        What u thinking: <Text style={{ fontWeight: 'bold' }}>{keyword}</Text>
      </Text>
    </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Information</Text>
      <Image
        source={{
          uri: 'https://i.pravatar.cc/200',
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Minh Man</Text>
      <Text>Email: manmanminh@example.com</Text>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home-outline';
            else if (route.name === 'Search') iconName = 'search-outline';
            else if (route.name === 'Profile') iconName = 'person-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  listItem: {
    padding: 12,
    marginVertical: 6,
    width: 300,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
  },
  listText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#AAA',
    borderRadius: 6,
    padding: 8,
    width: '90%',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
