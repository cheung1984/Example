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
  TouchableHighlight,
  TouchableWithoutFeedback,
  Touchable
} from 'react-native';

import Dimensions from 'Dimensions'
var ScreenWidth = Dimensions.get('window').width;

export default class StoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skuList:this.props.skuList,
      index:3,
      more:true,
    };
  }
  toStoreSku (skuName) {
    alert(skuName)
  }
  render () {
    return (
      <View style={styles.skuContainer}>
        {
          this.state.skuList.map((sku, index) => {
            if(index < this.state.index) {
              return (
                <TouchableWithoutFeedback onPress={() => this.toStoreSku(sku.skuName)}>
                  <View style={styles.skuWrap} >
                    <Image style={styles.skuImg} source={{uri:sku.imgUrl}}/>
                    <View style={styles.skuNameWrap}>
                      <Text style={styles.skuName} numberOfLines={1}>{sku.skuName}</Text>
                    </View>
                    <View style={styles.skuPriceWrap}>
                      <Text style={styles.skuPrice}>¥{sku.realTimePrice}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )
            }
          })
        }
        {
          this.state.more ? (
            <TouchableHighlight underlayColor="#fff" style={styles.btnSkuMore} onPress={() => this.skuMore(this.state.skuList.length)}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.txtSkuMore}>查看更多{this.state.skuList.length - 3}件商品</Text>
                <View style={styles.arrowDown}></View>
              </View>
            </TouchableHighlight>
          ) : (
            <TouchableHighlight underlayColor="#fff" style={styles.btnSkuMore} onPress={() => this.skuMore()}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.txtSkuMore}>收起</Text>
                <View style={styles.arrowUp}></View>
              </View>
            </TouchableHighlight>
          )
        }
      </View>
    )
  }
  skuMore (length) {
    if(length) {
      this.setState({
        index:length,
        more:false
      })
    }else {
      this.setState({
        index:3,
        more:true
      })
    }
  }
  toSku (skuId) {
    Alert.alert(
      '',
      skuId,
      [
        {text:'OK'}
      ]
    )
  }
}

const styles = StyleSheet.create({
  skuContainer: {
    paddingTop:15,
  },
  skuWrap:{
    flexDirection:'row',
    paddingBottom:5,
  },
  skuImg: {
    width:50,
    height:50,
  },
  skuNameWrap: {
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  skuName: {
    marginLeft:5,
    fontSize:13,
    color:'#333',
    width:ScreenWidth-64-10-20-50-40-5,
  },
  skuPriceWrap: {
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  skuPrice: {
    position:'absolute',
    right:-40,
    fontSize:13,
    color:'#ff5757',
  },
  btnSkuMore: {
    marginTop:15,
    paddingTop:17,
    paddingBottom:2,
    borderTopColor:'#e8e8e8',
    borderTopWidth:1,
  },
  txtSkuMore: {
    fontSize:14,
    color:'#47b34f'
  },
  arrowDown: {
    position:'absolute',
    right:0,
    width:8,
    height:8,
    borderBottomWidth:1,
    borderRightWidth:1,
    borderBottomColor:'#47b34f',
    borderRightColor:'#47b34f',
    transform:[{rotate:'45deg'}]
  },
  arrowUp: {
    position:'absolute',
    top:4,
    right:0,
    width:8,
    height:8,
    borderTopWidth:1,
    borderRightWidth:1,
    borderTopColor:'#47b34f',
    borderRightColor:'#47b34f',
    transform:[{rotate:'-45deg'}]
  },
});
