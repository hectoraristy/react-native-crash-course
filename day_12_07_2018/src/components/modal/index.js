import React, { Component } from 'react';
import {
  Text,
  Modal,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import Button from '../button';

const CustomModal = (props) => {
    const {modalVisible, onPress} = props;
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{position:'absolute',top:200,left: 0,right: 0, bottom: 200, backgroundColor:'red'}}>
            <View style={{ flex: 1, justifyContent:'space-between', alignItems:'center'}}>
              <Text>Bull's eye</Text>
              <Text>Este es un juego que se utiliza un slider para adivinar un numero, etc.</Text>
              <Button
                onPress={()=> onPress(!modalVisible)}
                title="Hide Modal"
               />
            </View>
          </View>
        </Modal>
      </View>
    );
}

CustomModal.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

CustomModal.defaultProps = {
  name: '',
  value: 0
}

export default CustomModal;

