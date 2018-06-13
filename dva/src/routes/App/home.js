/**
 * @author tanzhiling
 * @function 首页UI
 */
import React from 'react';
import './home.less';
import { Button, Icon } from 'antd';
import {getLocation,getWeather} from '../../utils/common';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr:[1,2,3,4,5]
    }
  }
  render() {
    return (
      <div className="home">
        <div className="banner">
          <img src={require('../../assets/app/banner.jpg')} alt="" />
          <div className="banner-content">
            <div className="message">
              <p>如果要在自己</p>
              <p>年轻的时候做更多的梦</p>
              <p>就一定要找到那些</p>
              <p>能和你一起做梦的朋友</p>
            </div>
            <div className="user">
              <img src={require('../../assets/app/user.jpg')} alt=""/>
              <a>tanzhiling</a>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>
            <p>文章<span>推荐</span></p>
          </h2>
          <div className="content-left">
            <ul>
              {this.state.arr.map((v,index)=>{
                return(
                  <li key={index}>
                    <h4>程序员请放下你的技术情节，与你的同伴一起进步</h4>
                    <section>
                      <img src={require('../../assets/app/001.png')} alt=""/>
                      <p>
                        如果说掌握一门赖以生计的技术是技术人员要学会的第一课的话，
                        那么我觉得技术人员要真正学会的第二课，不是技术，而是业务、交流与协作，学会关心其他工作伙伴的工作情况和进展...
                      </p>
                    </section>
                    <Button type="primary">
                      阅读全文<Icon type="right" />
                    </Button>
                    <footer>
                      <span>2018-06-08</span>
                      <span>作者：tanzhiling</span>
                      <span>分类：</span>
                    </footer>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="content-right">
            <div className="weather">
              <p>{getLocation()}<span>当前位置</span></p>
              <p>今天<span>{getWeather()}</span></p>
            </div>
            <div className="article">
              <h2>
                <p>最新<span>文章</span></p>
              </h2>
              <ul>
              {this.state.arr.map((v,index)=>{
                return(
                  <li key={index}>
                    打了死结的青春，捆死一颗苍白绝望的灵魂
                  </li>
                  )
                })
              }
              </ul>
            </div>
            <div className="rank">
              <h2>
                <p>点击<span>排行</span></p>
              </h2>
              <ul>
              {this.state.arr.map((v,index)=>{
                return(
                  <li key={index}>
                    打了死结的青春，捆死一颗苍白绝望的灵魂
                  </li>
                  )
                })
              }
              </ul>
            </div>
            <div className="connect">
              <h2>
                <p>友情<span>连接</span></p>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


