import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SpecItem from './SpecItem'

export default class WheelSpecs extends Component {
  render() {
    const { data } = this.props
    return (
        <View
        style={styles.container}
        >
        {
          Object.keys(data).map((field, i) => {
            return <SpecItem key={i} field={field} value={data[field]} />
          })
        }
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
});