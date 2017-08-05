/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  StatusBar
} from 'react-native';

import Hot from '../component/Hot'
import History from '../component/History'
import SearchBar from '../component/SearchBar'


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render () {
    return (
      <View style={styles.searchContainer}>
      <SearchBar isSearchIndex="true"></SearchBar>
      <ScrollView>
        <Hot></Hot>
        <History></History>
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchContainer:{
    backgroundColor:'#f4f4f4',
  }
});
