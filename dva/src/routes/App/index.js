/**
 * @author tanzhiling
 * @function 容器(单页面应用)
 */
import React from 'react';
import Menu from '../../components/menu';
import './index.less';
class App extends React.Component {
  constructor(props) {
    super(props);
   }
  render() {
    return (
      <div className="app">
          <Menu/>
          <div className="content">
            {this.props.children}
          </div>
      </div>
    );
  }
}
export default App

