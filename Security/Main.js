import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Constant from "expo-constants";

export default class Main extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Inicio.jpg")}
        style={styles.image}
      >
        <StatusBar barStyle="light-content" backgroundColor="#FF926B" />
        <View style={styles.container}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1 }}>
            <View style={styles.body}>
              <Text style={styles.title}>Bienvenido</Text>
              <View style={styles.groupButton}>
                <View style={{ marginBottom: 15 }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Login")}
                  >
                    <LinearGradient
                      start={[0.2, 0.8]}
                      end={{ x: 1, y: 0 }}
                      colors={["#FF926B", "#222831"]}
                      style={styles.touchableButton}
                    >
                    <Text style={{ color: "#fff" }}>Iniciar sesión</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 10 }}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Registrer")}
                  >
                    <LinearGradient
                      start={[0.2, 0.8]}
                      end={{ x: 1, y: 0 }}
                      colors={["#FF926B", "#222831"]}
                      style={styles.touchableButton}
                    >
                    <Text style={{ color: "#fff" }}>Registrarse</Text>
                    </LinearGradient>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // marginTop: Constant.statusBarHeight,
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
    margin: 20,
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
