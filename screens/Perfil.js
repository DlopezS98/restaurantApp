import * as React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Icon from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as firebase from "firebase";

function signOutUser() {
  firebase.auth().signOut();
}

export default function ProfileScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.sectionEdit}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>EDITAR...</Text>
            <TouchableOpacity onPress={()=> signOutUser()} style={styles.touchableButton}>
              <Icon.MaterialCommunityIcons name="logout" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableButton}>
              <Icon.AntDesign name="edit" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.sectionAvatar}>
            <Image
              source={require("../assets/images/MyPhotoCarnet.png")}
              style={styles.imgAvatar}
            />
          </View>
          <Text
            style={{ fontSize: 15, fontWeight: "bold", alignSelf: "center" }}
          >
            DlopezS98
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.form}>
            <Text style={{ color: "#fff" }}>Nombres</Text>
            <TextInput
              style={styles.input}
              value="Danny Aldahir"
              editable={false}
            />
            <Text style={{ color: "#fff" }}>Apellidos</Text>
            <TextInput
              style={styles.input}
              value="López Sánchez"
              editable={false}
            />
            <Text style={{ color: "#fff" }}>Correo</Text>
            <TextInput
              style={styles.input}
              value="01dlopezs98@gmail.com"
              editable={false}
            />
            <Text style={{ color: "#fff" }}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Password..."
              editable={false}
            />
            <Text style={{ color: "#fff" }}>Dirección</Text>
            <TextInput
              style={styles.input}
              value="San Marcos - Carazo"
              editable={false}
            />
            <Text style={{ color: "#fff" }}>Teléfono</Text>
            <TextInput
              style={styles.input}
              value="8874 4533"
              editable={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    padding: 24,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  header: {
    flexDirection: "column",
    marginBottom: 20,
    borderRadius: 5,
  },
  sectionEdit: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionAvatar: {
    marginTop: 20,
    overflow: "hidden",
    alignItems: "center",
    width: 120,
    height: 120,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  imgAvatar: {
    width: "100%",
    height: 120,
    borderRadius: 100,
  },
  touchableButton: {
    padding: 10,
    backgroundColor: "#282828",
    borderRadius: 10,
    elevation: 5,
  },
  body: {
    flexDirection: "column",
    backgroundColor: "#282828",
    borderRadius: 10,
    marginBottom: 20,
  },
  form: {
    marginHorizontal: 12,
    marginVertical: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    marginBottom: 15,
    color: "#aaa",
  },
});
