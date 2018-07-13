/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Fragment } from 'react';
import {
  View,
  Alert
} from 'react-native';
import Styles from './style';
import Label from '../../components/label';
import Slider from '../../components/slider';
import Button from '../../components/button';

const getRandomNumber = () => Math.round((Math.random() * (100 - 1) + 1),1);

export default class Home extends Component {
  state = {
    score: 0,
    round: 1,
    sliderValue: getRandomNumber(),
    bullEyes: getRandomNumber()
  }

  renderHeader() {
    const {score, round, bullEyes} = this.state;
    return (
      <Fragment>
        <View style={{flex: 1, flexDirection:'row',justifyContent:'space-between'}}>
            <Label name={'Score'} value={score} nameStyle={{fontSize: 20}} valueStyle={{fontWeight: 'bold'}}/>
            <Label name={'Round'} value={round} nameStyle={{fontSize: 20}} valueStyle={{fontWeight: 'bold'}}/>
        </View>
        <View style={{flex: 1, alignItems:'center'}}>
          <Label name={"Bull's eyes"} value={bullEyes} nameStyle={{fontSize: 20}} valueStyle={{fontWeight: 'bold'}}/> 
        </View>
      </Fragment>
    );
  }
  
  onReset = () => {
    this.setState({
      score: 0,
      round: 1,
      bullEyes: getRandomNumber()
    });
  }

  onSucess = () => {
    this.setState({
      score: this.state.score + 10,
      round: this.state.round + 1,
      bullEyes: getRandomNumber(),
      sliderValue: getRandomNumber()
    })
  }

  onFail = () => {
    this.setState({
      score: this.state.score - 2,
      round: this.state.round + 1,
      bullEyes: getRandomNumber(),
      sliderValue: getRandomNumber()
    })
  }

  onHitMe = () => {
    const {sliderValue, bullEyes} = this.state;
    if (sliderValue === bullEyes) {
      Alert.alert(
        'Felicidades',
        'Acertaste',
        [
          {text: 'OK', onPress: this.onSucess},
        ],
      )
    } else {
      Alert.alert(
        'Que mal',
        `El valor que tenias es: ${sliderValue}`,
        [
          {text: 'OK', onPress: this.onFail},
        ],
      )
    }
  }

  onValueChange = (value) => {
    this.setState({
      sliderValue: Math.round(value,1)
    });
  }

  renderSlider() {
    return (
      <View style={{flex: 1}}>
        <Slider 
          value={this.state.sliderValue}
          minimumValue={1}
          onValueChange={this.onValueChange}
          maximumValue={100}
        />

        <Button
            onPress={this.onHitMe}
            styles={{alignSelf: 'center', marginTop: 16}}
            title="Hit me"
        />
      </View>
    );
  }

  renderOptions() {
    return (
      <View style={{flex: 1, justifyContent:'space-between', alignItems:'flex-end'}}>
        <Button
              onPress={this.onReset}
              styles={{alignSelf: 'center'}}
              title="Reset"
          />
          <Button
              onPress={() => console.warn('button pressed')}
              styles={{alignSelf: 'center'}}
              title="Help"
          />
      </View>
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        {this.renderHeader()}
        {this.renderSlider()}
        {this.renderOptions()}
      </View>
    );
  }
}

