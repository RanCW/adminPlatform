/**
 * Created by ranchengwei on 2017/11/21.
 */
//引入axios start
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;
//引入axios end
let querystring = require('querystring')
export let https =async (param) => {
  let obj = {
    method: 'post',
  }
  obj=Object.assign(obj,param)
  obj.data=querystring.stringify(obj.data);
  let result=await axios(obj);
  return new Promise((resolve,reject)=>{
    if(result.data.state==1){
      resolve(result.data)
    }else {
      reject(result.data)
    }
  })
}
