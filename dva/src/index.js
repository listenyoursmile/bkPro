import dva from 'dva';
import './index.less';
import {
  browserHistory
} from 'dva/router';
//初始化设置
const app = dva({
  history: browserHistory
});

//插件
// app.use({});

//Model 模块加载
app.model(require('./models/app').default);

//Router 路由配置
app.router(require('./router').default);

//启动配置
app.start('#root');
