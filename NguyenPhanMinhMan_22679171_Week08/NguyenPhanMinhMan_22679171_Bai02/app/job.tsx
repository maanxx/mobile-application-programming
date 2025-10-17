import { AntDesign, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState([]);
  const [job, setJob] = useState("");
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

  const handleAddJob = async () => {
    try {
      const resp = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: job }),
      });

      if (resp.ok) {
        Alert.alert("Success", "Add Job");
        setJob("");
        router.push("/home");
      } else {
        Alert.alert("Lỗi", "No found!");
      }
    } catch (err) {
      Alert.alert("Error", "No connect to server");
    }
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

        <TouchableOpacity style={{}} onPress={() => router.back()}>
          <AntDesign name="arrow-left" size={24} color="#9095A0" />
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: 30 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 28 }}>
          ADD YOUR JOB
        </Text>
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="address-book" size={24} color="#1DD75B" />
        <TextInput
          style={{ fontSize: 17, paddingLeft: 10 }}
          placeholder="Input your job"
          value={job}
          onChangeText={setJob}
        />
      </View>

      <View
        style={{ alignItems: "center", marginBottom: 20, marginVertical: 55 }}
      >
        <TouchableOpacity
          onPress={handleAddJob}
          style={{
            backgroundColor: "#00BDD6",
            width: 120,
            height: 40,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "white", paddingRight: 7 }}>FINISH</Text>
          <AntDesign name="arrow-right" size={15} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/nhatky.png")}
          resizeMode="contain"
          style={{
            width: 150,
            height: 150,
            marginTop: 55,
          }}
        />
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
