/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Provider } from 'react-redux';
import { Platform, StyleSheet, Text, FlatList, View } from "react-native";
import store from "./store.js";
import TimestampsContainer from "./TimestampsContainer";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <TimestampsContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
