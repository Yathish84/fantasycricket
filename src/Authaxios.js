import axios from 'axios'
const accesstoken = process.env.LOGIN_SECRET;
const apiurl='http://15.206.110.130:5001'
const authaxios=axios.create({
  baseURL:apiurl,
  headers:{
    "Authorization" : `Bearer ${accesstoken}`,
    'Access-Control-Allow-Headers': 'x-access-token',
    "x-access-token": accesstoken
  }
});

export default authaxios;