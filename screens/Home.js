import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#eee",
  },
});
