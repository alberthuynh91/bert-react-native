import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class SpecItem extends Component {
  render() {
    const { field, value } = this.props
    return (
        <View
        style={styles.container}
        >
          <View style={styles.specItemContainer}>
            <Text style={styles.field}>
              {field} 
            </Text>
            <Text style={styles.value}>
              {value}
            </Text>
          </View>
          
          <View style={styles.hrContainer}>
            <View style={styles.horizonalRule}/>
          </View>
        </View>
        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  specItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  field: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 15
  },
  value: {
    color: 'black',
    fontSize: 16,
    paddingRight: 15
  },
  horizonalRule: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '90%',
  },
  hrContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});