/**
 * @author yangying
 * @function 技术栈页面构建
 */
import React from 'react';
import './index.less';
import { Button, Icon } from 'antd';

class Skill extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            arr:[1,2,3,4,5,7,8,9,10]
          }
    }

    render(){
        return(
            <div className="skill">
              
              <div className="skill_left">
                <div className="skill_tittle">
                   <p>热门文章</p>
                    <ul>
                        <li>推荐</li>
                        <li>前端</li>
                        <li>Android</li>
                        <li>后端</li>
                        <li>人工智能</li>
                        <li>IOS</li>
                        <li>工具资源</li>
                        <li>阅读</li>
                    </ul> 
                </div>
              {this.state.arr.map((v,index)=>{
                  return(
                        <div  key={index} className="skill_content">
                            <div className="content_tittle">
                                <a>专栏</a>.
                                <a>YANGYING</a>.
                                <a>4小时前</a>.
                                <a>React/DVA</a>
                            </div>
                            <p>Android RxJava：这是一份RxJava使用入门学习指南</p>
                            <div className="content_icon">
                                <p><a><Icon type="heart-o" /> 27</a> <a><Icon type="paper-clip" /></a></p>
                                <p><a><Icon type="upload" /></a> <a><Icon type="star-o" /></a></p>  
                            </div>
                        </div>
                  )
              })

              }
               
              </div>
              <div className="skill_right">
                <div  className="right_one">
                    <p><i>热门标签</i><a>查看全部</a></p>
                    <ul  className="content_list">
                    {this.state.arr.map((v,index)=>{
                        return(
                            <li key={index}>html </li>
                        )
                    }) 
                    }
                      </ul>
                </div>
                
                    
               
              </div>
             
            </div>
        )
    }
}
export default Skill