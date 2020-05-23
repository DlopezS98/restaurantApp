import * as React from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as Icon from "@expo/vector-icons";

const imgData = [
  { _id: "dlopezs981", img: require("../assets/images/burgerOfert.jpg") },
  { _id: "dlopezs982", img: require("../assets/images/burgerOfert.jpg") },
  { _id: "dlopezs983", img: require("../assets/images/burgerOfert.jpg") },
  { _id: "dlopezs984", img: require("../assets/images/burgerOfert.jpg") },
  { _id: "dlopezs985", img: require("../assets/images/burgerOfert.jpg") },
  { _id: "dlopezs986", img: require("../assets/images/burgerOfert.jpg") },
  { _id: "dlopezs987", img: require("../assets/images/burgerOfert.jpg") },
  { _id: "dlopezs988", img: require("../assets/images/burgerOfert.jpg") },
  { _id: "dlopezs989", img: require("../assets/images/burgerOfert.jpg") },
  { _id: "dlopezs9810", img: require("../assets/images/burgerOfert.jpg") },
  { _id: "dlopezs9811", img: require("../assets/images/burgerOfert.jpg") },
  { _id: "dlopezs9812", img: require("../assets/images/burgerOfert.jpg") },
];

function _renderOferts({ image }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.imageOfert} source={image} />
    </TouchableOpacity>
  );
}

export default function OfertsScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <LinearGradient
          start={[0.2, 0.6]}
          end={{ x: 1, y: 0 }}
          colors={["#FF926B", "#FFF3CD"]}
          style={styles.bgOpacity}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
            COMIDA RÁPIDA{" "}
            <Icon.AntDesign name="tagso" size={24} color="white" />
          </Text>
        </LinearGradient>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          collapsable
          data={imgData}
          renderItem={({ item }) => <_renderOferts image={item.img} />}
          keyExtractor={(item) => item._id}
        />

        <LinearGradient
          start={[0.2, 0.6]}
          end={{ x: 1, y: 0 }}
          colors={["#FF926B", "#FFF3CD"]}
          style={styles.bgOpacity}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
            CENAS <Icon.AntDesign name="tagso" size={24} color="white" />
          </Text>
        </LinearGradient>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          collapsable
          data={imgData}
          renderItem={({ item }) => <_renderOferts image={item.img} />}
          keyExtractor={(item) => item._id}
        />

        <LinearGradient
          start={[0.2, 0.6]}
          end={{ x: 1, y: 0 }}
          colors={["#FF926B", "#FFF3CD"]}
          style={styles.bgOpacity}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
            DESAYUNOS <Icon.AntDesign name="tagso" size={24} color="white" />
          </Text>
        </LinearGradient>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          collapsable
          data={imgData}
          renderItem={({ item }) => <_renderOferts image={item.img} />}
          keyExtractor={(item) => item._id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  bgOpacity: {
    marginVertical: 15,
    padding: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 20,
    width: 200,
    height: 200,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageOfert: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
