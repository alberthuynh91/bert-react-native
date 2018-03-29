import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const images = [
  {
    uri: 'https://res.cloudinary.com/wheelchimp/image/upload/v1518503938/nz7vzot8xzmxgajn0pur.jpg'
  },
  {
    uri: 'https://res.cloudinary.com/wheelchimp/image/upload/v1518503938/nz7vzot8xzmxgajn0pur.jpg'
  },
  {
    uri: 'https://res.cloudinary.com/wheelchimp/image/upload/v1518503948/edz5c3wrylkn6ugzt5sz.jpg'
  }
]

let data = {
  title: 'Work Equip 18x9.5 +20 18x10.5 +20',
  description: 'Brand/Model: Work Equip -Bolt Pattern: 5x114.3 -Front: 18x9.5+20 -Rear: 18x10.5+20 -Face: Chrome (original from work) -Price: $2600 NO TRADE NO TRADE -Contact: 626 551 132 ZERO **Gold hardware available for additional cost** **Want a different lug pattern? can also redrill these** See original listing here: http://zilvia.net/f/showthread.php?t=647958'
}

const dimensions = Dimensions.get('window');
const { width } = Dimensions.get('window');
const height = dimensions.width * 0.8;
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

export default class App extends React.Component {

  getCarousel = () => {
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
            {images.map(image => (
              <Image style={styles.image} source={image} />
            ))}
          </ScrollView>
        </View>
      );
    }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    

    

    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}>
          {this.getCarousel()}
        </View>

        <View style={styles.touchContainer}>
          <TouchableOpacity onPress={this.onPress}>
            <Icon name="email" size={30} color="black" style={styles.icons}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onPress}>
            <Icon name="favorite" size={30} color="black" style={styles.icons}/>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>
          {data.title}
        </Text>

        <Text style={styles.description}>
          {data.description}
        </Text>

      </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingVertical: 20
  },
  touchContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    marginTop: 20
  },
  icons: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 23,
  },
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  }
});
