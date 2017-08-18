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
  Image,
  ListView,
  ScrollView
} from 'react-native';


import {getSearchResult} from '../component/ApiUtli'
import Loading from '../component/Loading'
import Dimensions from 'Dimensions'

import SearchBar from '../component/SearchBar'
import StoreInfo from '../component/StoreInfo'

var ScreenWidth = Dimensions.get('window').width;

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWords: '',
      dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      SearchResultList:[],
      loaded:false,
    };
  }
  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position);

            let longitude = JSON.stringify(position.coords.longitude);//精度
            let latitude = JSON.stringify(position.coords.latitude);//纬度
            console.log("123 "+longitude);
            console.log(latitude);

            // this.fetchData(longitude,latitude);
        },
        (error) =>{
            console.log(error);
        },
        {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000}
    );
  }
  componentWillMount () {
    this.fetchData()
  }
  render () {
    return (
      <View>
        <SearchBar isSearchIndex="false"></SearchBar>
        {
          this.state.loaded ? (
            <ScrollView style={{marginBottom:70,}}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderDate}
              ></ListView>
            </ScrollView>
          ) : (
            <Loading></Loading>
          )
        }
      </View>
    )
  }
  renderDate (storeSku) {
    return (
      <View style={styles.storeContainer}>
        <StoreInfo store={storeSku.store} skuList={storeSku.skuList}></StoreInfo>
      </View>
    )
  }
  fetchData () {
    getSearchResult().then((resp) => {
      console.log(resp);
      // resp = this.state.SearchResultList;
      // console.log(resp.data.result.storeSkuList);
      if(resp.data.code == '0') {
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(resp.data.result.storeSkuList),
          loaded:true
        })
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}


const styles = StyleSheet.create({
  storeContainer:{
    paddingTop:20,
    paddingBottom:15,
    paddingLeft:10,
    paddingRight:10,
    borderBottomColor:'#e7e9e4',
    borderBottomWidth:1,
    backgroundColor:'#fff',
  }
});
