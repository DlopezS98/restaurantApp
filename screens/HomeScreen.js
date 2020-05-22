import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";

const popularData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    image: require("../assets/images/BurgerPapas.jpg"),
    price: "$8.20",
    description: "Combo"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    image: require("../assets/images/Sandwich.jpg"),
    price: "$10.5",
    description: "Sandwich"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    image: require("../assets/images/comboAlas_papas.jpg"),
    price: "$8.00",
    description: "Combo"
  },
];

const categoryData = [{
  id:1,
  categoryName:'Comida Rápida'
},{
  id:2,
  categoryName:'Ensaladas'
},{
  id:3,
  categoryName:'Gourmet'
}];

function ItemMorePopular({image, price, desc }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={image} style={styles.imgItem} />
      <View style={styles.descItem}>
        <Text style={{ fontSize: 15 }}>{price}</Text>
        <Text style={{fontSize: 15}}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput placeholder="Buscar" style={styles.textInput} />
          <ImageBackground
            style={styles.banner}
            source={require("../assets/images/bannerHome.jpg")}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ color: "#fff" }}>Disfruta de nuestros</Text>
                <Text style={{ color: "#fff" }}>mejores platillos</Text>
              </View>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/images/foodFideos.png")}
              />
            </View>
          </ImageBackground>
        </View>

        <View style={styles.body}>
        <View style={{paddingHorizontal:24, marginBottom:10}}>
            <Text style={styles.title}>Categorias</Text>
          </View>
          <View style={{paddingHorizontal:24, marginBottom:10}}>
            <Text style={styles.title}>Mas popular</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            collapsable={true}
            horizontal
            data={popularData}
            renderItem={({ item }) => (
              <ItemMorePopular price={item.price} desc={item.description} image={item.image} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 1,
    flexDirection: "column",
    padding: 24,
  },
  title: {
    fontSize: 21,
  },
  textInput: {
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 15,
    marginBottom: 30,
  },
  banner: {
    height: 120,
    resizeMode: "cover",
    padding: 10,
    justifyContent: "center",
  },
  body: {
    flex: 2,
    marginTop: 10,
    flexDirection: "column",
  },
  item: {
    backgroundColor: "#fff",
    width: 200,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius:12,
    elevation:3
  },
  imgItem: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  descItem:{
    backgroundColor:'#eee',
    padding:5,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
