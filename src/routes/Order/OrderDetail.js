import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { getTimeDistance } from '../../utils/utils';

import styles from './OrderDetail.less';



const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

@connect(state => ({
  chart: state.chart,
}))
export default class Analysis extends Component {
  state = {
    loading: true,
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: [],
  }

  componentDidMount() {
    // this.props.dispatch({
    //   type: 'chart/fetch',
    // }).then(() => this.setState({ loading: false }));
  }

  componentWillUnmount() {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'chart/clear',
    // });
  }


  isActive(type) {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return;
    }
    if (rangePickerValue[0].isSame(value[0], 'day') && rangePickerValue[1].isSame(value[1], 'day')) {
      return styles.currentDate;
    }
  }

  render() {



    return (
      <PageHeaderLayout title="订单详情" content="表单页用于向用户">
        fewaf


      </PageHeaderLayout>
    );
  }
}
