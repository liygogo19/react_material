import React, { Component } from 'react';
import { Input, DateRangePicker } from 'zent';

import Filter from '../component/filter';

export default class GoodsFilter extends Component {
  state = {
    ...this.props.filters
  }

  handleNoChange = (evt) => {
    this.setState({
      no: evt.target.value.trim()
    });
  }

  handleGoodsChange = (evt) => {
    this.setState({
      goodsName: evt.target.value.trim()
    });
  }

  handleShopChange = (evt) => {
    this.setState({
      shopName: evt.target.value.trim()
    })
  }

  handleDateChange = (date) => {
    const [beginDate, endDate] = date;
    this.setState({
      beginDate,
      endDate
    })
  }

  getFilterItems() {
    const { no, goodsName, shopName, beginDate, endDate } = this.state;

    return [{
      label: '提货单号',
      component: Input,
      props: {
        placeholder: '请输入单号',
        value: no,
        onChange: this.handleNoChange
      }
    }, {
      label: '商品名称',
      component: Input,
      props: {
        placeholder: '请输入名称',
        value: goodsName,
        onChange: this.handleGoodsChange
      }
    }, {
      label: null
    }, {
      label: '商家名称',
      component: Input,
      props: {
        placeholder: '请输入商家',
        value: shopName,
        onChange: this.handleShopChange
      }
    }, {
      label: '交货日期',
      component: DateRangePicker,
      props: {
        value: [beginDate, endDate],
        onChange: this.handleDateChange
      }
    }]
  }

  onFilter = () => {
    this.props.onFilterChange(this.state);
  }

  onClearFilters = () => {
    this.setState(this.props.filters, this.onFilter);
  }


  render() {
    return (
      <Filter filters={this.getFilterItems()}
              onClear={this.onClearFilters}
              onConfirm={this.onFilter} />      
    )
  }
};
