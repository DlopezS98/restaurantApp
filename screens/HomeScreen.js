import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground,
  FlatList,
  Alert,
  Modal,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import ModalScreen from "../screens/Modal";

const popularData = [
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    image: require("../assets/images/Sandwich.jpg"),
    price: "$10.5",
    title: "Sandwich Jumbo",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vero!",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    image: require("../assets/images/BurgerPapas.jpg"),
    price: "$8.20",
    title: "Hamburguesa + Papas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vero!",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    image: require("../assets/images/comboAlas_papas.jpg"),
    price: "$8.00",
    title: "Pollo + Papas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vero!",
  },
];

const bestFood = [
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    image: require("../assets/images/comidaPollo.jpg"),
    price: "$15.99",
    title: "Ensalada + Pollo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vero!",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    image: require("../assets/images/EnsaladaCmb.jpg"),
    price: "$15.99",
    title: "Ensalada + Pollo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vero!",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    image: require("../assets/images/cmbPolloEnsalada.png"),
    price: "$15.99",
    title: "Ensalada + Pollo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vero!",
  },
];

const categoryData = [
  {
    id: "1dlopes981",
    categoryName: "Comida Rápida",
  },
  {
    id: "1dlopes982",
    categoryName: "Ensaladas",
  },
  {
    id: "1dlopes983",
    categoryName: "Gourmet",
  },
  {
    id: "1dlopes984",
    categoryName: "Cenas",
  },
  {
    id: "1dlopes9815",
    categoryName: "Desayunos",
  },
  {
    id: "1dlopes986",
    categoryName: "Almuerzos",
  },
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "",
      image: "",
      price: "",
      description: "",
    };
    this._ItemCategory = this._ItemCategory.bind(this);
    this._ItemMorePopular = this._ItemMorePopular.bind(this);
    this._ItemBestFood = this._ItemBestFood.bind(this);
    this._ModalScreen = this._ModalScreen.bind(this);
  }

  _ItemCategory({ category }) {
    return (
      <View>
        <TouchableOpacity>
          <LinearGradient
            start={[0.2, 0.8]}
            end={{ x: 1, y: 0 }}
            colors={["#FF926B", "#FFC38B"]}
            style={styles.itemCategory}
          >
            <Text style={{ color: "#fff" }}>{category}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  _ItemMorePopular({ image, price, title, desc }) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          this.setState({
            title: title,
            image: image,
            price: price,
            description: desc,
            showModal: true,
          })
        }
      >
        <Image source={image} style={styles.imgItem} />
      </TouchableOpacity>
    );
  }

  _ItemBestFood({ image, price, desc, title }) {
    return (
      <TouchableOpacity
        onPress={() =>
          this.setState({
            title: title,
            image: image,
            price: price,
            description: desc,
            showModal: true,
          })
        }
        style={styles.item}
      >
        <Image source={image} style={styles.imgItem} />
      </TouchableOpacity>
    );
  }

  _ModalScreen({ img, desc, price, title }) {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.containerModal}>
          <ImageBackground
            source={img}
            style={styles.bannerModal}
          ></ImageBackground>
          <View style={styles.bodyModal}>
            <View style={{ flex: 2 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: 10,
                  fontSize: 18,
                }}
              >
                {title}
              </Text>
              <Text style={{ textAlign: "center", marginBottom: 10 }}>
                {desc}
              </Text>
              <Text style={{ textAlign: "center", fontSize: 18 }}>
                Precio: {price}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#282828",
                  width: 100,
                  height: 35,
                  padding: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                }}
                onPress={() => this.setState({ showModal: false })}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Cerrar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Order");
                  this.setState({ showModal: false });
                }}
                style={{
                  backgroundColor: "#282828",
                  width: 120,
                  height: 35,
                  padding: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Agregar Pedido
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    return (
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <this._ModalScreen
          img={this.state.image}
          desc={this.state.description}
          price={this.state.price}
          title={this.state.title}
        />

        <View style={styles.container}>
          <View style={styles.header}>
            <TextInput placeholder="Buscar" style={styles.textInput} />
            <LinearGradient
              start={[1, 0.3]}
              end={{ x: 0, y: 1 }}
              colors={["#fbd072", "#f2a365", "#282828"]}
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
            </LinearGradient>
          </View>

          <View style={styles.body}>
            <View style={{ paddingHorizontal: 24, marginBottom: 10 }}>
              <Text style={styles.title}>Categorias</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              collapsable={true}
              horizontal
              data={categoryData}
              renderItem={({ item }) =>
                this._ItemCategory({ category: item.categoryName })
              }
              keyExtractor={(item) => item.id}
            />
            <View style={{ paddingHorizontal: 24, marginBottom: 10 }}>
              <Text style={styles.title}>Mas popular</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              collapsable={true}
              horizontal
              data={popularData}
              renderItem={({ item }) =>
                this._ItemMorePopular({
                  price: item.price,
                  desc: item.desc,
                  image: item.image,
                  title: item.title,
                })
              }
              keyExtractor={(item) => item.id}
            />
            <View
              style={{ paddingHorizontal: 24, marginBottom: 10, marginTop: 20 }}
            >
              <Text style={styles.title}>Mejores platillos</Text>
            </View>
            <FlatList
              style={{ marginBottom: 60 }}
              showsHorizontalScrollIndicator={false}
              collapsable={true}
              horizontal
              data={bestFood}
              renderItem={({ item }) =>
                this._ItemBestFood({
                  image: item.image,
                  price: item.price,
                  title: item.title,
                  desc: item.description,
                })
              }
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
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
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
  },
  body: {
    flex: 2,
    marginTop: 10,
    flexDirection: "column",
  },
  item: {
    backgroundColor: "#fff",
    width: 200,
    //marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 12,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  imgItem: {
    width: "100%",
    height: 150,
    borderRadius: 12,
  },
  itemCategory: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  containerModal: {
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 100,
    width: "80%",
    height: "70%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bannerModal: {
    flex: 2,
    resizeMode: "cover",
  },
  bodyModal: {
    flex: 2,
    marginTop: 10,
    padding: 10,
  },
});
