/**
 * @function API请求,params传递得参数列表
 */
import request from '../utils/request';
export function query(params) {
  return request('/api/user/get_list',params);
}
