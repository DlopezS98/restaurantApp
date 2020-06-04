import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

import Constant from "expo-constants";

/* function _Index(navigation) {
  navigation.navigate("Index");
}

function _registrer(navigation) {
  navigation.navigate("Main");
}

function _login(navigation) {
  navigation.navigate("Login");
} */

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      showPassword: true,
    };
  }

  _onSwitch = () => {
    this.state.isEnabled
      ? this.setState({ isEnabled: false, showPassword: true })
      : this.setState({ isEnabled: true, showPassword: false });
  };

  render() {
    /* const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState); */
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "#fff" }}>
          <View style={styles.container}>
            <ImageBackground
              style={{ height: 200, resizeMode: "cover" }}
              source={require("../assets/images/Banner.jpg")}
            >
              <View style={styles.header}>
                <View style={styles.title}>
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    INICIAR SESIÓN
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.body}>
              <View style={styles.form}>
                <View style={styles.formGroup}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Correo Electronico"
                  />
                </View>
                <View style={styles.formGroup}>
                  <TextInput
                    style={styles.textInput}
                    secureTextEntry={this.state.showPassword}
                    autoCapitalize="none"
                    placeholder="Contraseña"
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    marginBottom: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Mostrar contraseña</Text>
                  <Switch
                    style={{ marginLeft: 5 }}
                    trackColor={{ false: "#767577", true: "#30475E" }}
                    thumbColor={this.state.isEnabled ? "#F2A365" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this._onSwitch}
                    value={this.state.isEnabled}
                  />
                </View>
                <View style={styles.formGroup}>
                  <TouchableOpacity
                    style={styles.touchableButton}
                    onPress={() => this.props.navigation.navigate("Index")}
                  >
                    <Text style={{ color: "#fff" }}>Iniciar</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    justifyContent: "flex-end",
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ textDecorationLine: "underline" }}>
                      Olvidé mi contraseña
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    backgroundColor: "rgba(40, 40, 40, 0.7)",
    flexDirection: "column",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: 300,
    height: 60,
    backgroundColor: "rgba(242, 163, 101, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  body: {
    flex: 2,
    padding: 24,
    flexDirection: "column",
  },
  form: {
    flex: 1,
    justifyContent: "center",
  },
  formGroup: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  textInput: {
    fontSize:16,
    padding: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 5,
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
