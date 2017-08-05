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
  Alert
} from 'react-native';

import {getHotWords} from '../component/ApiUtli'
import Loading from '../component/Loading'
import Dimensions from 'Dimensions'

var ScreenWidth = Dimensions.get('window').width;

export default class HotWords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotWordList: [],
      loaded: false,
    };
  }
  componentWillMount () {
    console.log('1');
    this.fetchData()
  }
  render () {
    console.log('2');
    if(this.state.loaded) {
      let hotWordList = this.state.hotWordList.map((value, index) => {
        return (
            <Text style={styles.hotWords} onPress={() => this.search(value.hotWords)}>{value.hotWords}</Text>
        )
      })
      return (
          <View style={styles.hotContainer}>
            <Text style={styles.hotTitle}>热门搜索</Text>
            <View style={styles.hotWrap}>
              {hotWordList}
            </View>
          </View>
      )
    }else {
      return (
        null
      )
    }
  }
  fetchData(){
    getHotWords().then((resp) => {
      console.log(resp);
      let code = resp.data.code;
      if(code == 0) {
        let result = resp.data.result;
        console.log(result);
        this.setState({
          hotWordList: result.hotWordVOList,
          loaded: true,
        })
      }
    }).catch((error) => {
      console.log(error);
    })
  }
  search(key) {
    Alert.alert(
      '',
      key,
      [
        {text:'OK'}
      ]
    )
  }
}

const styles = StyleSheet.create({
  hotContainer: {
    backgroundColor:'#fff',
  },
  hotWrap:{
    marginTop: 15,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'center',
    paddingLeft: 15,
  },
  hotWords:{
    width: (ScreenWidth-75)/4,
    marginBottom: 15,
    borderWidth:1,
    borderColor: '#e8e8e8',
    alignItems:'center',
    paddingTop:5,
    paddingBottom:5,
    borderRadius:5,
    textAlign:'center',
    marginRight:15,
  },
  hotTitle: {
    backgroundColor:'#f4f4f4',
    fontSize:14,
    padding:8,
    color:'#555',
    paddingLeft:15,
  }
});
