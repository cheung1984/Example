/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Dimensions from 'Dimensions'
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;


export default class Loading extends Component {
  render () {
    return (
      <View style={styles.loadContainer}>
        <Image
         style={styles.loading}
         source={require('../images/loading.jpg')}
        ></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loadContainer:{
    width:ScreenWidth,
    height:ScreenHeight-90,
    // backgroundColor: '#fafafa',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading:{
    width:93,
    height:111
  }
});
