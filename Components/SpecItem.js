import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class SpecItem extends Component {
  render() {
    const { field, value } = this.props
    return (
        <View
        style={styles.container}
        >
          <Text style={styles.field}>
            {field}: 
          </Text>
          <Text style={styles.value}>
            {value}
          </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  field: {
    fontWeight: 'bold'
  },
  value: {
    color: 'black'
  }
});