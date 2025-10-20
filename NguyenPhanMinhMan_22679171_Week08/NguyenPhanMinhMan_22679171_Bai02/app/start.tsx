import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet,
  } from "react-native";

  import { Feather, AntDesign, EvilIcons } from "@expo/vector-icons";
  import { useRouter } from "expo-router";
  export default function Start() {
    const router = useRouter();

    return (
      <View>
        <View style={{ alignItems: "center", marginVertical: 70 }}>
          <Image
            source={require("../assets/nhatky.png")}
            resizeMode="contain"
            style={{ width: 150, height: 150 }}
          />
        </View>
  
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "#8353E2",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 25,
            }}
          >
            MANAGE YOUR{"\n"} TASK
          </Text>
        </View>
  
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 50,
            borderWidth: 1,
            marginHorizontal: 25,
            borderColor: "#9095A0",
            borderRadius: 12,
            paddingHorizontal: 20,
            paddingVertical: 8,
          }}
        >
          <Feather name="mail" size={24} color="black" />
          <TextInput
            placeholder="Enter your name"
            style={{ color: "#9095A0", paddingLeft: 12, fontSize: 15 }}
          />
        </View>
  
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#00BDD6",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 60,
            height: 40,
            borderRadius: 12,
          }}
        >
          <TouchableOpacity onPress={() => router.push("/home")}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
                paddingRight: 7,
              }}
            >
              GET STARTED
            </Text>
          </TouchableOpacity>
          <AntDesign name="arrow-right" size={18} color="white" />
        </View>
      </View>
    );
  }
  
  