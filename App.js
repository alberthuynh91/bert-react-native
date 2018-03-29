import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

let pic = {
  uri: 'https://res.cloudinary.com/wheelchimp/image/upload/v1518503938/nz7vzot8xzmxgajn0pur.jpg'
};

let data = {
  title: 'Work Equip 18x9.5 +20 18x10.5 +20',
  description: 'Brand/Model: Work Equip -Bolt Pattern: 5x114.3 -Front: 18x9.5+20 -Rear: 18x10.5+20 -Face: Chrome (original from work) -Price: $2600 NO TRADE NO TRADE -Contact: 626 551 132 ZERO **Gold hardware available for additional cost** **Want a different lug pattern? can also redrill these** See original listing here: http://zilvia.net/f/showthread.php?t=647958'
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}>
          <Image source={pic} style={{width: 193, height: 110}}/>
        </View>

        <Text style={{fontWeight: 'bold'}}>
          {data.title}
        </Text>

        <Text style={{marginTop: 20}}>
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
  }
});
