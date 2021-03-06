import React from 'react';
import { render } from 'react-dom';

class Support extends React.Component {
  render() {
    return (
      <div>
        <div className="bannar">
          <div className="absolute bannar-text">
            <div className="panel ml-100">
              <div className="panel-title animated fadeInUp">
                <h2>我们为您提供有保障的支持
                  <br/><small>我们提供Web应用开发、App定制开发、微信创意开发、互联网策划
                与运营、动漫游戏制作、广告宣传片制作、微电影制作等服务</small>
                </h2>
              </div>
              <br/>
              <div className="panel-body animated-slow fadeInUp">
                <a className="hvr-fade hvr-pianyi" href="#">了解详情</a>
              </div>
            </div>
          </div>
          <div className="background-wrapper">
            <figure>
              <img src="/public/images/bannar-3.jpg" alt=""/>
            </figure>
          </div>
        </div>
        <section>
          <div className="container-center">
            <div className="title-center">
              <h2>技术保障
                  <br/>
                  <small>产品开发、策划与运营、影视传播</small>
                </h2>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export { Support };
