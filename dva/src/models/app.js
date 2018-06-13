/**
 * @author tanzhiling
 * @function app模块数据
 */
import {
  query
} from '../services/api';
export default {
  namespace: 'app',
  state: {
    menuList:[
      {
        title_CN:"首页",
        title_US:"Home",
        path:''
      },{
        title_CN:"技术栈",
        title_US:'Technology',
        path:'/skill'
      },{
        title_CN:"慢生活",
        title_US:'Slow Life',
        path:''
      },{
        title_CN:"轻松一刻",
        title_US:"Relaxed",
        path:''
      },{
        title_CN:"剑指远方",
        title_US:'Future',
        path:''
      }
    ]
  },
  subscriptions: {
    setup({dispatch,history}) {
      return history.listen(({pathname}) => {
        if (pathname === '/') {
          dispatch({type: 'load'});
        }
      });
    },
  },

  effects: {
    * fetch({payload}, {call,put}) {
      const result = yield call(query);
      yield put({type: 'save',userList: result.data});
    },
  },

  reducers: {
    save(state, {userList}) {
      const {data} = userList
      return { ...state, userList: data};
    },
  },

};
