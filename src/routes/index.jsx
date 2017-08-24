import React from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Card, Icon, Table, Carousel } from "antd-mobile";
import styles from "./index.less";

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
const cardConfig = [{
  title: '夯实的课程体系',
  content: [
    '前置：打字及基础信息技术',
    '基础：用编程解决学习问题',
    '高级：开发图形界面小工具',
    '班制：10人的小班充分学习'
  ]
}, {
  title: '卓越的核心团队',
  content: [
    '家教：150+课时／人',
    '博文：80+篇博客／人',
    '编码：5+年开发经验／人',
    '项目：10+个大中型／人'
  ]
}
// , {

// }, {

// }
];
const columns = [
  { title: '名称', dataIndex: 'title', key: 'title', width: '1rem' },
  { title: '课时（45分／课时）', dataIndex: 'a', key: 'a', width: '1rem' },
  { title: '价格（元）', dataIndex: 'b', key: 'b', width: '1rem' },
  { title: '特点', dataIndex: 'c', key: 'c', width: '1rem' }
];

const data = [
  { title: '基础打字&信息技术', a: '14', b: '2000', c: '拼音打字和基本信息技术', key: '1' },
  { title: '编程基础课程（上）', a: '18', b: '3000', c: '基础编程知识，解决各种数学问题', key: '3' },
  { title: '编程基础课程（下）', a: '18', b: '3000', c: '编程中级知识，完成控制台小程序', key: '4' },
  { title: '图形化程序开发', a: '35', b: '6500', c: '图形化小程序，为idea共创打下基础', key: '5' },
  { title: '信息竞赛(长期)', a: '15', b: '3000', c: '长期性的信息竞赛辅导', key: '6' }
];
function Index({ location }) {
  return (
    <div className={styles.normal1}>
      <h1 className={styles.title}>培养会编程的下一代</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>一台电脑，一段历程，成就美好未来</li>
      </ul>
      <Carousel
          className="my-carousel"
          autoplay={true}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
        >
          {listConfig.map((lc, i) =>
          <li key={i} className={styles["achievement" + i]}>
            <div className={styles["fig" + i]} />
            {lc.title}
            <br />
            {lc.sub}
          </li>
        )}
        </Carousel>
      <div className={styles.cardDiv}>
        <div className={styles.bottomLine}>特色介绍</div>
        {cardConfig.map((cc, i) =>
          <div className={styles.cards} key={i}>
            <div className={styles.cardTitle}>{cc.title}</div>
            <div className={styles.cardDetail}>{cc.content.map((ccc,i)=><div key={i} className={styles.leftFloat} >{ccc}</div>)}</div>
          </div>
        )}
        <div className={styles.bottomLine}>价格一览</div>
        <div className={styles.tableWrapper}>
          <Table
            columns={columns}
            dataSource={data}
          />
        </div>
        <div className={styles.bottomLine} style={{width:'100%'}}>
          码代（上虞）地址：谢塘镇易居公馆</div>
        <div>
          <a className={styles.grey} href="tel:15867164299">
              技术支持:杭州乾坤网络科技有限公司
              <br />
              上虞区经理王女士：18868136291
            </a>
        </div>
      </div>
    </div>
  );
}

Index.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);
