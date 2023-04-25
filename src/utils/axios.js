import { notification } from 'antd';
import axios from 'axios';
import _ from 'lodash';

const io = axios.create({
  baseURL: '',
  timeout: 30 * 1000,
  withCredentials: true
});

const handleResponse = (responseData) => responseData;

io.interceptors.request.use((config) => {
  if (XENV && XENV !== '') {
    config.headers['x-env'] = XENV;
  }
  return config;
}, (err) => Promise.reject(err));

io.interceptors.response.use((res) => {
  const { data } = res;
  return handleResponse(data);
}, (err) => Promise.reject(err));

const httpClient = {};

const request = (config) => io.request(config)
  .then((data) => data)
  .catch((err) => {
    notification.error({
      duration: 8,
      message: `${err.config && err.config.url},请求出错`,
      description: `${(err.response && (err.response.data.msg || err.response.data.error))
          || err.message} ` // 超时信息会在err.message
    });
    return '';
  });

httpClient.get = (url, params, options) => {
  const config = { url, params };
  _.merge(config, options);
  return request(config);
};

httpClient.post = (url, data, options) => {
  const config = { url, method: 'post', data };
  _.merge(config, options);
  return request(config);
};

httpClient.postForm = (url, data = {}, options) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  const config = { url, method: 'post', data: formData, headers: { 'Content-Type': 'multipart/form-data' } };
  _.merge(config, options);
  return request(config);
};

export default httpClient;
export { io };