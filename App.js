import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from './Components/Carousel'
import WheelSpecs from './Components/WheelSpecs'
import Button from 'react-native-button';

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
  description: 'Selling a set of used Work Equip 05 wheels in good condition. Lightly driven on for 10k miles. No bends or cracks on the barrels. Would rate the wheels 9/10 condition. Great offsets for a variety of cars. Not looking for trades. CASH ONLY. Can meet anywhere in the Bay Area, CA.',
  price: '$3000'  
}

const wheelData = {
  manufacturer: 'Work',
  model: 'Equip 05',
  boltPattern: '5x144.3',
  multpiece: 'Three-Piece',
  frontSpecs: '18x9 +15',
  rearSpecs: '18x10 +0',
}

export default class App extends React.Component {

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  addComment = () => {
    // add a comment
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
          <Carousel images={images}/> 
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

        <View>
          <WheelSpecs data={wheelData} />
        </View>

        <View style={styles.description}>
          <Text style={{fontWeight: 'bold', marginBottom: 5}}>Description</Text>
          <Text>{data.description}</Text>
        </View>

        <View style={styles.commentButtonContainer}> 
          <Button
            onPress={this.addComment}
            color="#841584"
            style={{ fontSize: 20, color: 'black' }}
            containerStyle={styles.commentButton}
          >
            Add Comment
          </Button>
        </View>
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
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'    
  },
  description: {
    flex: 1,
    flexDirection: 'column',
    padding: 15
  },
  icons: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 23,
  },
  commentButton: {
    padding: 10,
    height: 45,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 1,
    borderWidth: 0.8,
    borderColor: 'black',
    width: '94%'
  },
  commentButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
