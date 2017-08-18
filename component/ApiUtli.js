import axios from 'axios'
import qs from 'querystring'

var instance = axios.create({
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
    }
});
// axios.defaults.headers['content-Type'] = 'appliction/x-www-form-urlencoded';


let REQUEST_URL = 'https://gw-o2o.jd.com/client';
let hotWordsParam = {
  functionId:'hotWords/list',
  body: {
    "size":12,
    "type":2,
    "longitude":121.51505,
    "latitude":31.22905,
    "storeIds":[],
    "channelId":""
  },
  platCode:'H5',
  appVersion:'4.2.0',
  appName:'paidaojia',
  lng:121.51505,
  lat:31.22905,
  city_id:1
};
export const getHotWords = () => {
  return axios.get(REQUEST_URL, {params: hotWordsParam})
}

let historyWordsParam = {
  functionId:'searchHistory/getHistory',
  body: {},
  platCode:'H5',
  appVersion:'4.2.0',
  appName:'paidaojia',
  lng:121.51505,
  lat:31.22905,
  city_id:1
};

export const getHistoryWords = () => {
  return axios.get(REQUEST_URL, {params: historyWordsParam})
}

let searchResultParam = {
  functionId: 'homeSearch/searchByStorePostV_230',
  body: JSON.stringify({
    "longitude":116.50628,
    "latitude":39.79311,
    "type":2,
    "key":"西瓜",
    "industryTags":[],
    "catIds":[],
    "sortType":1,
    "page":1,
    "pageSize":10,
    "storeIds":[],
    "promotLabels":"",
    "discountRange":"",
    "serviceNo":1500886430293
  }),
  platCode:'H5',
  appVersion:'4.4.0',
  appName:'paidaojia',
  lng:116.50628,
  lat:39.79311,
  city_id:1
};
  export const getSearchResult = () => {
    return axios.post(REQUEST_URL,qs.stringify(searchResultParam))
  }
