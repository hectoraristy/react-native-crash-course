/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';
import Axios from 'axios';

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  onPressAxios = () => {
    Axios.get('https://reqres.in/api/users/3').then((response) => {
      this.setState({
        data: response.data.data
      })
    }).catch(error => console.log(error));
  }

  onPressFetch = () => {
    fetch('https://reqres.in/api/users/2').then((response) => {
      response.json().then((result) => {
        this.setState({
          data: result.data
        })
      }).catch(error => console.log(error))
    }).catch(error => console.log(error));
  }

  renderInformation = () => {
    const {data} = this.state;
    return (
      <View style={{flex: 1, justifyContent:'center'}}>
        <Text>
            {`Name: ${data.first_name} ${data.last_name}`}
        </Text>
        <Image style={{height:100,width:100}}source={{uri: data.avatar}} />
      </View>
    )
  }

  render() {
    const displayInfo = this.state.data !== undefined ? this.renderInformation() : null;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Detail screen!</Text>
        <TouchableOpacity onPress={this.onPressAxios}>
          <Text style={{color: 'red'}}>Make a request with axios</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressFetch}>
          <Text style={{color: 'blue'}}>Make a request with fetch</Text>
        </TouchableOpacity>
        {displayInfo}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
