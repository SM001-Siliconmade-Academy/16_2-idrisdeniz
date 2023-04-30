import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//Icons
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const MyQRCode = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>55 saniye</Text>
      <Text style={styles.text3}>içinde QR kodun yenilenecek!</Text>
      <Image style={styles.image} source={require("../../assets/qr.png")} />
      <View style={styles.copyArea}>
        <Text style={styles.text2}>4507 6644 25</Text>
        <FontAwesome name="copy" size={24} color="black" />
      </View>
      <Text style={styles.text}>
        QR kodu kasada okutarak veya internet alışverişinde altındaki kodu
        yazarak tekliflerden faydalanabilirsin.
      </Text>
      <View style={styles.copyQrArea}>
        <FontAwesome name="camera" size={16} style={styles.cameraIcon} />
        <Text style={styles.text4}>QR OKUT</Text>
        <AntDesign name="up" size={16} color="white" />
      </View>
    </View>
  );
};

export default MyQRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 14,
    width: 200,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
    color: "#4F4F4F",
  },
  text1: {
    fontSize: 14,
    color: "#E6A29E",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 20,
    color: "#535353",
  },
  text3: {
    fontSize: 14,
    textAlign: "center",
    color: "#4F4F4F",
  },
  text4: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    marginTop: 15,
    marginBottom: 15,
  },
  copyArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  copyQrArea: {
    height: 40,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#00ADEF",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cameraIcon: {
    color: "white",
  },
});
