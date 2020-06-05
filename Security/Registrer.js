import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import Constant from "expo-constants";
import * as firebase from 'firebase';

export default class Registrer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnable: false,
      showPassword: true,
      name: "",
      email: "",
      password: "",
      errorMessage: "",
    };
  }

  handleSignUp = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name,
        });
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  _onSwitch = () => {
    this.state.isEnable
      ? this.setState({ isEnable: false, showPassword: true })
      : this.setState({ isEnable: true, showPassword: false });
  };

  render() {
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
                    CREAR CUENTA
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.body}>
              <View style={styles.form}>
                <View style={styles.formGroup}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(userName) =>
                      this.setState({ name: userName })
                    }
                    value={this.state.name}
                    placeholder="Usuario"
                  />
                </View>
                <View style={styles.formGroup}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(email) => this.setState({ email: email })}
                    value={this.state.email}
                    placeholder="Correo"
                  />
                </View>
                <View style={styles.formGroup}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Contraseña"
                    secureTextEntry={this.state.showPassword}
                    onChangeText={(password) =>
                      this.setState({ password: password })
                    }
                    value={this.state.password}
                    autoCapitalize="none"
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
                    thumbColor={this.state.isEnable ? "#F2A365" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this._onSwitch}
                    value={this.state.isEnable}
                  />
                </View>
                <View style={styles.formGroup}>
                  <TouchableOpacity
                    style={styles.touchableButton}
                    onPress={this.handleSignUp}
                  >
                    <Text style={{ color: "#fff" }}>Registrarse</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text>{this.state.errorMessage}</Text>
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
    marginBottom: 15,
  },
  textInput: {
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    borderColor: "#ccc",
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
