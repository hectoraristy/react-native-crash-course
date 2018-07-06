/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

const Name = (props) => {
    const Wrapper = props.clickable ? TouchableOpacity : View;
    return (
        <Wrapper onPress={props.onPress}>
          <Text>
            {`Hello ${props.name}`}
          </Text>
        </Wrapper>
    );
}

export default class App extends Component {

  state = {

  }

  componentDidMount() {
    this.setState({
      name: 'Juan'
    });
  }
  
  changeName = () => {
    this.setState({
      name: 'Pablo',
    });
  }

  render() {
    console.warn(this.state.name);
    const name = this.state.name === null ? '' : this.state.name;
    return (
      <View style={{flex: 1 ,  justifyContent:'center', alignItems:'center'}}>
        <Name
        clickable
        onPress={this.changeName}
        name={name}
        />
      </View>
    );
  }
}

