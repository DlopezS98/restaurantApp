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
  Alert
} from "react-native";
import Constant from "expo-constants";

function _Index(navigation) {
  navigation.navigate("Index");
}

function _main(navigation) {
  Alert.alert('INICIE SESIÓN PARA CONTINUAR!')
  navigation.navigate("Main");
}

function _registrer(navigation) {
  navigation.navigate("Registrer");
}

function Registrer({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
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
                <TextInput style={styles.textInput} placeholder="Nombres" />
              </View>
              <View style={styles.formGroup}>
                <TextInput style={styles.textInput} placeholder="Apellidos" />
              </View>
              <View style={styles.formGroup}>
                <TextInput style={styles.textInput} placeholder="Correo" />
              </View>
              <View style={styles.formGroup}>
                <TextInput style={styles.textInput} placeholder="Dirección" />
              </View>
              <View style={styles.formGroup}>
                <TextInput style={styles.textInput} placeholder="Usuario" />
              </View>
              <View style={styles.formGroup}>
                <TextInput style={styles.textInput} placeholder="Contraseña" />
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
                  thumbColor={isEnabled ? "#F2A365" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <View style={styles.formGroup}>
                <TouchableOpacity
                  style={styles.touchableButton}
                  onPress={() => _main(navigation)}
                >
                  <Text style={{ color: "#fff" }}>Registrarse</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
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

export default Registrer;
