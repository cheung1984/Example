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
  TouchableHighlight,
  Alert,
} from 'react-native';

import {getHistoryWords} from '../component/ApiUtli'
import Loading from '../component/Loading'

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyList: [],
      loaded: false,
    };
  }
  componentWillMount () {
    this.fetchData()
  }
  render () {
    if(this.state.loaded) {
      let historyList = this.state.historyList.map((value, index) => {
        return (
            <View style={styles.history}>
              <Text style={styles.historyWords} onPress={() => this.search(value)}>{value}</Text>
            </View>
        )
      })
      return (
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>搜索历史</Text>
          <View style={styles.historyWrap}>
            {historyList}
          </View>
          {
            this.state.historyList.length == 0 ? (
              null
            ) : (
              <TouchableHighlight style={styles.btnClear} underlayColor="#fff" onPress={() => this.clearHistory()}>
                <Text style={styles.TxtClear}>清除搜索历史</Text>
              </TouchableHighlight>
            )
          }
        </View>
      )
    }else {
      return (
        null
      )
    }
  }
  fetchData(){
    getHistoryWords().then((resp) => {
      console.log(JSON.stringify(resp));
      let code = resp.data.code;
      if(code == 0) {
        let result = resp.data.result;
        this.setState({
          historyList: result,
          loaded: true,
        })
      }else {
        this.setState({
          historyList: [],
          loaded: true,
        })
      }
    }).catch((error) => {
      console.log(error);
    })
  }
  clearHistory () {
    this.setState({
      historyList: [],
    })
  }
  search (key) {
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
    historyContainer: {

    },
    historyTitle: {
      backgroundColor:'#f4f4f4',
      fontSize:14,
      padding:8,
      color:'#555',
      paddingLeft:15,
    },
    history: {
      borderBottomWidth:1,
      borderBottomColor:'#e8e8e8',
    },
    historyWords: {
      backgroundColor: '#fff',
      paddingLeft:15,
      paddingTop: 10,
      paddingBottom: 10,
    },
    btnClear: {
      borderWidth: 1,
      borderColor: '#47b34f',
      width:130,
      height: 41,
      justifyContent:'center',
      borderRadius: 4,
      backgroundColor: '#fff',
      marginTop: 20,
      marginBottom: 20,
      alignSelf:'center'
    },
    TxtClear: {
      textAlign:'center',
      color: '#47b34f',
    }
});
