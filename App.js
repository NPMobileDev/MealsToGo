import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <React.Fragment>
      <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
        <View style={{backgroundColor:'green', padding:16, justifyContent:'center' }}>
          <Text >Search</Text>
        </View>
        <View style={{flex:1, backgroundColor:'blue', padding:16, justifyContent:'flex-start'}}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
});
