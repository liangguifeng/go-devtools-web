import axios from "axios"
import _ from "lodash"

// 创建 axios 实例
const service = axios.create({
    baseURL: '/server', 		// /'/api'等于'http://baidu.com'
    timeout: 100000 		// 请求超时时间
})

function get(obj) {
    const {data, url} = coverFormData(obj);
    return new Promise((resolve, reject) => {
        service.get(url + '?' + data).then(res => {
            resolve(res.data);
        })
            .catch(error => {
                reject(error);
            })
    })
}

function post(obj) {
    const {data, url} = coverFormData(obj);
    return new Promise((resolve, reject) => {
        service.post(url, data)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            })
    })
}

// 处理请求参数
const coverFormData = (obj) => {
    let data = Object.keys(obj.data).map(item => {
        let value = obj.data[item];
        if (_.isArray(value) || _.isObject(value)) {
            value = JSON.stringify(value)
        }
        return encodeURIComponent(item) + '=' + encodeURIComponent(value);
    }).join('&');

    return {data: data, url: obj.url};
}

let requests = {}
requests.post = post
requests.get = get

export default requests