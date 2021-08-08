import axios from 'axios'


export function request(config) {
  return new Promise((resolve,reject) => {
    const instance = axios.create({
      //创建实例
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
    //请求拦截
    instance.interceptors.request.use(
      config => {
        // console.log(config);
        return config
      },error => {
        console.log(err);
      });
    //响应拦截
    instance.interceptors.response.use(
      res => {
      // console.log(res);
      return res
    },error => {
      console.log(err);
    })
    //发送网络请求
    // return instance(config)  //返回值是一个Promise
    return instance(config)
      .then(res => {
        resolve(res)
    }).catch(err => {
        reject(err)
    })
  })
}



export function request2(config) {
  return new Promise((resolve,reject) => {
    const instance = axios.create({
      //创建实例
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout:5000
    })
    //请求拦截
    instance.interceptors.request.use(
      config => {
        return config
      },error => {
        console.log(err);
      });
    //响应拦截
    instance.interceptors.response.use(
      res => {
        // console.log(res);
        return res
      },error => {
        console.log(err);
      })
    //发送网络请求
    // return instance(config)  //返回值是一个Promise
    return instance(config)
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
  })
}











