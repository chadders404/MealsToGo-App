import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <ExpoStatusBar style="auto" />

      <View
        style={{
          padding: 16,
          backgroundColor: "green",
        }}
      >
        <Text>Testing 3</Text>
      </View>
      <View
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: "blue",
        }}
      >
        <Text>Testing 2</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
