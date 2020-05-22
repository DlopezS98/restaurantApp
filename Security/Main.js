import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import Constant from 'expo-constants';

function _login(navigation) {
  navigation.navigate("Login");
}

function _registrer(navigation) {
  navigation.navigate("Registrer");
}

function Main({ navigation }) {
  return (
    // <View style={styles.container}>
    <ImageBackground
      source={require("../assets/images/Inicio.jpg")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1 }}>
          <View style={styles.body}>
            <Text style={styles.title}>Bienvenido</Text>
            <View style={styles.groupButton}>
              <View style={{marginBottom:15,}}>
                <TouchableOpacity
                  style={styles.touchableButton}
                  onPress={() => _login(navigation)}
                >
                  <Text style={{ color: "#fff" }}>Iniciar sesión</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginBottom:10}}>
                <TouchableOpacity
                  style={styles.touchableButton}
                  onPress={() => _registrer(navigation)}
                >
                  <Text style={{ color: "#fff" }}>Registrarse</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    marginTop: Constant.statusBarHeight,
  },
  body: {
    flex: 1,
    margin: 15,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    alignSelf: "center",
  },
  groupButton: {
    margin:20,
  },
  touchableButton: {
    height: 40,
    borderWidth: 0.5,
    backgroundColor: "#F2A365",
    borderColor: "#F2A365",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});

export default Main;
