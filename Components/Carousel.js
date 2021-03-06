import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

export default class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
    return (
        <View
        style={styles.scrollContainer}
        >
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
        >
            {images.map((image, i) => {
              return <Image key={i} style={styles.image} source={image} />
            })}
        </ScrollView>
        </View>
    )
    }
    console.log('No images were provided.')
    return null
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  },
});