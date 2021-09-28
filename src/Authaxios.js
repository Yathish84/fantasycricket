import axios from 'axios'
const accesstoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsIm1vYmlsZV9udW1iZXIiOiI5ODc2NDI2NzgyIiwiaXNUZW1wVXNlciI6ZmFsc2UsImVtYWlsIjoieWF0aGl5YXRpc2gwMDJAZ21haWwuY29tIiwiaWF0IjoxNjMyMzc0NzM3LCJleHAiOjEwMjcyMzc0NzM3LCJhdWQiOiI2NSIsImlzcyI6IkxlYWd1ZSBYIn0.dJwfAPOqxwQnxJeP0FdsuyfipTPahir8PLbBy-1jz9o'
const apiurl='http://15.206.110.130:5001'
const authaxios=axios.create({
  baseURL:apiurl,
  headers:{
    "Authorization" : `Bearer ${accesstoken}`,
    "x-access-token": accesstoken
  }
});

export default authaxios;