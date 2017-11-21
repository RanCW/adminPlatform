/**
 * Created by ranchengwei on 2017/11/21.
 */
//引入axios start
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000';
//引入axios end
let querystring = require('querystring')
export let https = (param) => {
  let obj = {
    method: 'post',
  }
  obj=Object.assign(obj,param)
  obj.data=querystring.stringify(obj.data);
  return axios(obj)
}
