import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './OrderDetail.less';



export default class OrderDetail extends Component {
  state = {
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

  render() {

    return (
      <PageHeaderLayout title="订单详情" content="订单详情订单详情订单详情">
        fewaf


      </PageHeaderLayout>
    );
  }
}
