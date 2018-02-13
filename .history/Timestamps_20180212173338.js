import React, { Component } from "react";
import { Button, StyleSheet, Text, View, FlatList, Switch } from "react-native";

export default class Timestamps extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  getPreferredField(item) {
    const value = item.name ? item.name : (item.localName ? item.localName : (item.id ? item.id : (item.diff ? "----- elapsed: " + item.diff + " -----" : "")));
    return value;
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.timestamp}
          renderItem={({ item }) => (
            <Text style={{ alignSelf: "center" }}>
              {this.getPreferredField(item)}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: "center",
    fontSize: 26,
    fontWeight: "bold"
  }
});
