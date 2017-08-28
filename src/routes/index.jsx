import React from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Card, Icon, Table, Carousel, NavBar,Modal } from "antd-mobile";
// import styles from "./index.less";
import './header.less';
import fig0 from '../assets/a0.png';
import fig1 from '../assets/a1.png';
import fig2 from '../assets/a2.png';

const figs = {
  fig0, fig1, fig2
}

const listConfig = [
  {
    title: "活学活用",
    sub: "将编程运用到学习中"
  },
  {
    title: "所见即所得",
    sub: "激发孩子的学习兴趣"
  },
  {
    title: "和孩子共创",
    sub: "将孩子的idea向世界展示"
  }
];

const docConfig = {
  doc0: {
    title: "一站式私塾",
    sub: "提供每晚和周末托管的一站式服务"
  },
  doc1: {
    title: "各学科全面发展",
    sub: "小初各个学科都有专门的辅导课程"
  },
  doc2: {
    title: "不辜负孩子的兴趣爱好",
    sub: "平衡学业，让孩子更快乐的学习和生活"
  }
}

const colors = [
  '#8966b1',
  '#47a9ca',
  '#df6260',
  // '#fdbd57',
];

const columns = [
  { title: '名称', dataIndex: 'title', key: 'title', width: '1rem' },
  { title: '时间', dataIndex: 'a', key: 'a', width: '2rem' },
  { title: '价格（元）', dataIndex: 'b', key: 'b', width: '1rem' },
];

const data = [
  { title: '晚托班', a: '每天放学4点到6点', b: '2000', key: '1' },
  { title: '周末托管', a: '周末托管2小时', b: '3000', key: '2' },
  { title: '周末强化', a: '周末半天', b: '3000', key: '3' },
  { title: '特色班', a: '35', b: '6500', key: '4' },
];

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      select: 0,
      modal1: false
    };
  }

  render() {
    const { select, modal1 } = this.state;
    return (
      <div className="normal" style={{background: colors[select]}}>
         <NavBar
            leftContent={null}
            rightContent={<a className="tel" href="tel:18868136291">
                  联系我们
                </a>}
          >
            
          </NavBar>
    {/* infinite */}
        <Carousel
          className="my-carousel"
          autoplay={true}  
          selectedIndex={select}
          swipeSpeed={35}
          beforeChange={(from, to) => this.setState({select: to})}
        >
          {listConfig.map((lc, i) =>
            <li key={i} className="my-slide">
              <div className="fig" style={{backgroundImage:`url(${figs['fig'+i]})`}}/>
            </li>
          )}
        </Carousel>
        <div className="detail-doc">
          <div className="title">{docConfig['doc'+select].title}</div>
          <div className="sub">{docConfig['doc'+select].sub}</div>
        </div>
        <div className="detail-button">
          <span onClick={()=>this.setState({modal1: true})}>查看课表</span>
        </div>
        <div className="footer">
          <a className="support-info" href="tel:18868136291">
            技术支持：杭州乾坤网络科技有限公司
              <br />
            上虞区经理王女士：18868136291
            </a>
        </div>
        <Modal
          title="课程表"
          transparent
          maskClosable={false}
          visible={this.state.modal1}
          footer={[{ text: '确定', onPress: ()=>this.setState({modal1: false}) }]}
        >
        <Table
        columns={columns}
        dataSource={data}
      />
      <div className="location">
        新希望私塾地点：上虞谢塘易居公馆
      </div>
        </Modal>
      </div>
    );
  }
}

Index.propTypes = {
  // location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);
