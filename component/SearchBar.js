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
  TouchableHighlight,
  Alert,
  Na
} from 'react-native';

import SearchResult from '../component/SearchResult'

import Dimensions from 'Dimensions'

var ScreenWidth = Dimensions.get('window').width;

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchIndex: this.props.isSearchIndex,
      keyWords: '',
      showClear: false,
      placeholder:'搜索附近的商品和门店'
    };
  }
  render () {
    if (this.state.isSearchIndex == 'true') {
      return (
        <View style={styles.searchContainer}>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              placeholder={this.state.placeholder}
              onChangeText={(keyWords) => this.setState({keyWords})}
            ></TextInput>
          </View>
          <TouchableHighlight style={styles.btnSearch} underlayColor='#e5e5e5' onPress={() => this.search()}>
              <Text style={styles.TxtSearch}>搜索</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={this.state.placeholder}
              onChangeText={(keyWords) => this.setState({keyWords})}
            ></TextInput>
          </View>
        </View>
      )
    }
  }
  search () {
    if(this.state.keyWords) {
      Alert.alert(
        '',
        this.state.keyWords,
        [
          {text:'OK'}
        ]
      )
    }
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop:20,
    height: 44,
    backgroundColor: '#fff',
    borderBottomWidth:1,
    borderBottomColor: '#ebebeb',
    flexDirection:'row'
  },
  inputWrap: {
    borderWidth:1,
    borderColor:'#ebebed',
    borderStyle:'solid',
    width: ScreenWidth-34-60,
    height:28,
    marginTop:8,
    marginLeft:34,
    borderRadius:2,
  },
  inputContainer: {
    borderWidth:1,
    borderColor:'#ebebed',
    borderStyle:'solid',
    width: ScreenWidth-16,
    height:28,
    marginTop:8,
    marginLeft:8,
    marginRight:8,
    borderRadius:2,
  },
  input: {
    width:ScreenWidth-34-53-34,
    height:28,
    fontSize:14,
    color: '#555',
    marginLeft:34,
  },
  btnSearch: {
    width:48,
    height:30,
    backgroundColor:'#e5e5e5',
    borderRadius:3,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginLeft:5,

  },
  TxtSearch: {
    color:'#333'
  }
});
