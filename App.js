import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <View style={styles.Search}>
          <Text>Search</Text>
        </View>
        <View style={styles.List}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  Search: {
    backgroundColor: "green",
    padding: 16,
    justifyContent: "center",
  },
  List: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
    justifyContent: "flex-start",
  },
});
