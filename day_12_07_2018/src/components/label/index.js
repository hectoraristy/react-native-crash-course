import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import PropTypes from 'prop-types';

const Label = (props) => {
    return (
      <Text style={props.nameStyle}>
        {`${props.name}: `}
        <Text style={props.valueStyle}>
          {props.value}
        </Text>
      </Text>
    );
}

Label.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

Label.defaultProps = {
  name: '',
  value: 0
}

export default Label;

