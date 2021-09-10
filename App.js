import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AdMobBanner } from "expo-ads-admob";
import { useFonts } from "expo-font";

let url = "https://api.chucknorris.io/jokes/random";

export default function App() {
  let [data, setData] = useState("A quote is coming");

  let [fontsLoaded] = useFonts({
    dot: require("./assets/fonts/dot.ttf"),
  });

  async function pegaDados() {
    let resposta = await fetch(url);
    let respostaJSON = await resposta.json();
    setData(respostaJSON.value);
  }

  useEffect(() => {
    pegaDados();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headertext}>Chuck Norris Quote Generator</Text>
      </View>
      {/* HEADER */}
      {/* MAIN */}
      <View style={styles.maincontainer}>
        {/* <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          servePersonalizedAds // true or false
          // onDidFailToReceiveAdWithError={this.bannerError}
        /> */}
        <Text style={styles.quote}>{data}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.TouchableOpacity}
          onPress={() => pegaDados()}
        >
          <Text style={styles.headertext}>Another quote </Text>
        </TouchableOpacity>
        {/* <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-2208900470437599/3928728142"
          servePersonalizedAds // true or false
          // onDidFailToReceiveAdWithError={this.bannerError}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  header: {
    paddingTop: 35,
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#845EC2",
    width: "100%",
  },
  headertext: { color: "white", fontFamily: "dot", fontSize: 20 },
  maincontainer: {
    flex: 1,
    backgroundColor: "#C9B3EC",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quote: {
    padding: 50,
    height: "50%",
    textAlign: "center",
    color: "black",
    fontFamily: "dot",
    fontSize: 26,
  },
  TouchableOpacity: {
    backgroundColor: "#845EC2",
    padding: 50,
    margin: 20,
    borderRadius: 50,
    elevation: 10,
  },
});
