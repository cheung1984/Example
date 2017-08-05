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
  Image,
  Alert,
  TouchableWithoutFeedback
} from 'react-native';

import Dimensions from 'Dimensions'
var ScreenWidth = Dimensions.get('window').width;

import SkuList from '../component/SkuList'

export default class StoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store:this.props.store,
      skuList:this.props.skuList
    };
  }
  toStoreHome (storeName) {
    alert(storeName)
  }
  render () {
    return (
      <TouchableWithoutFeedback onPress={() => this.toStoreHome(this.state.store.storeName)}>
      <View style={styles.storeContainer}>
          <View style={styles.storeLogoWrap}>
              <Image source={{uri:this.state.store.logo}} style={styles.storeLogo}/>
          </View>
          <View style={styles.storeSkuContainer}>
            <View style={{flexDirection:'row',width:ScreenWidth-64-30}}>
              <Text style={styles.storeName}>{this.state.store.storeName}</Text>
              {
                this.state.store.tagList.length > 0 ? (
                  this.state.store.tagList.map((honor, index) => {
                    return (
                      <Image
                        source={{uri:honor.tagLogoUrl}}
                        style={styles.storeHonor}
                      ></Image>
                    )
                  })
                ) : (
                  null
                )
              }
            </View>
            <View style={styles.deliveryTagWrap}>
            {
              this.state.store.carrierNo == '9966' ? (
                <View style={styles.dadaTag}>
                    <Text style={styles.txtDadaTag}>达达专送 - {this.state.store.deliveryFirst}</Text>
                </View>
              ) : (
                <View style={styles.storeTag}>
                    <Text style={styles.txtStoreTag}>商家自送 - {this.state.store.deliveryFirst}</Text>
                </View>
              )
            }
            </View>
            <View style={styles.storeStarWrap}>
              <Text style={styles.txtStoreStar}>{this.state.store.starGrade} | {this.state.store.monthSale}</Text>
            </View>
            <View style={styles.storeSkuWrap}>
              {
                this.state.store.tag.length > 0 ? (
                  this.state.store.tag.map((tag, index) => {
                    return (
                      <View style={styles.storeTagWrap}>
                        <View style={[styles.txtTagWrap,{backgroundColor:'#'+tag.colorCode}]}>
                          <Text style={styles.txtTag}>{tag.iconText}</Text>
                        </View>
                        <Text style={styles.txtWord}>{tag.words}</Text>
                      </View>
                    )
                  })
                ) : (
                  null
                )
              }
              <SkuList skuList={this.state.skuList}></SkuList>
            </View>
          </View>
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  storeContainer:{
    flexDirection:'row',
    // alignItems:'flex-start'
  },
  storeLogoWrap: {
    borderWidth:1,
    borderColor:'#e8e8e8',
    borderRadius:4,
    width:66,
    height:66,
  },
  storeLogo: {
    width:64,
    height:64,
    borderRadius:4
  },
  storeSkuContainer: {
    marginLeft:8,
    alignItems:'flex-start'//根据文字大小撑开View
  },
  storeName: {
    color:'#333',
    fontSize:16,
  },
  storeHonor: {
    width:18,
    height:20,
    position:'absolute',
    right:0,
  },
  deliveryTagWrap: {
    marginTop:10,
  },
  dadaTag: {
    borderRadius:2,
    borderWidth:1,
    borderColor:'#16A9ff',
  },
  txtDadaTag: {
    color:'#16A9ff',
    fontSize:10,
    textAlign:'center',
    padding:2
  },
  storeTag: {
    borderRadius:2,
    borderWidth:1,
    borderColor:'#b6b6b6',
  },
  txtStoreTag: {
    color:'#999',
    fontSize:10,
    textAlign:'center',
    padding:2
  },
  storeStarWrap: {
    marginTop:8,
  },
  txtStoreStar: {
    fontSize:11,
    color:'#999'
  },
  storeSkuWrap: {
    marginTop:12,
    borderTopWidth:1,
    borderTopColor:'#e8e8e8',
    width:ScreenWidth-64-10-20,
  },
  storeTagWrap: {
    flexDirection:'row',
    alignItems:'flex-start',//根据文字大小撑开View
    marginTop:10
  },
  txtTagWrap: {
    borderRadius:2,
    marginRight:4,
    padding:2,
  },
  txtTag: {
    marginBottom:2,
    color:'#fff',
    fontSize:10,
  },
  txtWord: {
    color:'#999',
    fontSize:10,
  }
});
