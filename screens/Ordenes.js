import * as React from "react";
import {
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const datos = [
  {
    _id: "12alke240drw1",
    price: "$ 19.99",
    description: "Comida premiun, lorem ipsum sit a met dolor",
    img: require("../assets/images/cmbPolloEnsalada.png"),
  },
  {
    _id: "12alke240drw2",
    price: "$ 19.99",
    description: "Comida premiun, lorem ipsum sit a met dolor",
    img: require("../assets/images/comidaPollo.jpg"),
  },
  {
    _id: "12alke240drw3",
    price: "$ 19.99",
    description: "Comida premiun, lorem ipsum sit a met dolor",
    img: require("../assets/images/EnsaladaCmb.jpg"),
  },
  {
    _id: "12alke240drw4",
    price: "$ 19.99",
    description: "Comida premiun, lorem ipsum sit a met dolor",
    img: require("../assets/images/foodFideos.png"),
  },
  {
    _id: "12alke240drw5",
    price: "$ 19.99",
    description: "Comida premiun, lorem ipsum sit a met dolor",
    img: require("../assets/images/Sandwich.jpg"),
  },
  {
    _id: "12alke240drw6",
    price: "$ 19.99",
    description: "Comida premiun, lorem ipsum sit a met dolor",
    img: require("../assets/images/BurgerPapas.jpg"),
  },
  {
    _id: "12alke240drw7",
    price: "$ 19.99",
    description: "Comida premiun, lorem ipsum sit a met dolor",
    img: require("../assets/images/Burger.jpg"),
  },
];

function _ItemOrders({ image, price, desc }) {
  return (
    <TouchableOpacity>
      <LinearGradient
        start={[0.2, 0.8]}
        end={{ x: 1, y: 0 }}
        colors={["#FF926B", "#222831"]}
        style={styles.containerItem}
      >
        <View style={styles.sectionImg}>
          <View style={styles.containerImg}>
            <Image style={styles.imgItem} source={image} />
          </View>
        </View>
        <View style={styles.sectionDesc}>
          <Text style={{color:'#fff', textAlign:'center', }}>{price}</Text>
          <Text style={{color:'#fff', textAlign:'center', fontStyle:'italic'}}>{desc}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          collapsable={true}
          data={datos}
          renderItem={({ item }) => (
            <_ItemOrders
              image={item.img}
              price={item.price}
              desc={item.description}
            />
          )}
          keyExtractor={(item) => item._id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal:24,
    flexDirection: "column",
  },
  containerItem: {
    flex: 1,
    width:'100%',
    height:150,
    marginVertical: 15,
    flexDirection:'row',
    borderRadius:10,
    elevation:3,
  },
  sectionImg: {
      flex:2.5,
      width:'100%',
      height:150,
      overflow:'hidden',
  },
  containerImg: {
      alignItems:'center',
      justifyContent:'center',
      margin:10,
      elevation:3
  },
  imgItem: {
      width:'100%',
      height:'100%',
      borderRadius:10,
      backgroundColor:'#eee',
  },
  sectionDesc: {
      flex:3,
      justifyContent:'center'
  },
});
