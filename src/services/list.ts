import httpClient from '@/utils/axios';
//查询审核列表
export const searchListInfo = (data: any) => httpClient.post('/api/getListInfo', data);
// 查询审核详情
export const searchDetails = (data: any) => httpClient.post('/api/getDetails', data);


export const searchInfo = (data: any) => httpClient.post('/api/getListInfo/2', data);

export const getAuthInfo = (data: any) => httpClient.post('/api/getAuthInfo', data);
