import React from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";

//Icons
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Balance = () => {
  const win = Dimensions.get("window");
  const ratio = win.width / 967;

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Image
          style={{
            width: win.width,
            height: ratio * 610,
            resizeMode: "center",
          }}
          source={require("../../../assets/hopi-kart.png")}
        />
        <Text style={styles.font}>
          Hopipay kart içine kolayca para yükleyerek istediğin her yerde harcama
          yapabildiğin ücretsiz bir sanal karttır. Bu kartinla;
        </Text>
        <View style={styles.tick}>
          <AntDesign
            name="checkcircle"
            size={16}
            color="#0CACEE"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.font}>
            Hopi ile anlaşmalı markalarda paranı kat kat harcayabilirsin.
          </Text>
        </View>
        <View style={styles.tick}>
          <AntDesign
            name="checkcircle"
            size={16}
            color="#0CACEE"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.font}>
            Arkadaşlarına anında para gönderebilirsin.
          </Text>
        </View>
        <View style={styles.tick}>
          <AntDesign
            name="checkcircle"
            size={16}
            color="#0CACEE"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.font}>
            Tüm e-ticaret sitelerinde kolayca alışveriş yapabilirsin.
          </Text>
        </View>
      </View>
      <View style={styles.containerUnder}>
        <View style={styles.copyQrArea}>
          <Text style={styles.text4}>HOPİPAY KARTINI AKTİVE ET</Text>
        </View>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  containerTop: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 400,
  },
  tick: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 390,
  },
  font: {
    fontSize: 12,
  },
  containerUnder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  copyQrArea: {
    flex: 1,
    backgroundColor: "#00ADEF",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  cameraIcon: {
    color: "white",
  },
  text4: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
