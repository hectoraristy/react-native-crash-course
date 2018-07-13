import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import Styles from './styles';

const ButtonCustom = (props) => {
    return (
      <TouchableOpacity 
      onPress={props.onPress}
      style={[Styles.button, props.styles]}>
        <Text style={[Styles.title, props.titleStyle]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    );
}

export default ButtonCustom;

