import {
  AntDesign,
  EvilIcons,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const API_URL = "https://68e5384f8e116898997ee468.mockapi.io/api/v1/jobs";

  const getData = async () => {
    try {
      const resp = await fetch(API_URL);
      const json = await resp.json();
      setData(json);
    } catch (err) {
      console.log("Loi", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const getItem = ({ item }: { item: any }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#d3d5d8",
          borderRadius: 20,
          marginVertical: 10,
          marginHorizontal: 10,
          paddingVertical: 10,
          justifyContent: 'space-around',

        }}
      >
        <MaterialCommunityIcons
          name="sticker-check-outline"
          size={24}
          color="#14923E"
        />
        <Text>{item.name}</Text>
        <MaterialCommunityIcons
          name="pencil-box-outline"
          size={24}
          color="#E05858"
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 15,
        }}
      >
        <TouchableOpacity style={{}} onPress={() => router.back()}>
          <AntDesign name="arrow-left" size={24} color="#9095A0" />
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/man.png")}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontWeight: "bold", paddingLeft: 6, fontSize: 18 }}>
              Hi Twinkle
            </Text>
            <Text style={{ color: "#171A1F", fontSize: 15, fontWeight: 500 }}>
              Have agrate day a head
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "#9095A0",
          height: 44,
          marginHorizontal: 14,
          paddingHorizontal: 10,
        }}
      >
        <EvilIcons name="search" size={35} color="black" />
        <TextInput
          style={{ fontSize: 17, paddingLeft: 10 }}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList data={filteredData} renderItem={getItem} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} />

      <View style={{alignItems: 'center', marginBottom: 20}}>
        <TouchableOpacity
        onPress={() => {router.push('/job')}}
          style={{
            backgroundColor: "#00BDD6",
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome6 name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
