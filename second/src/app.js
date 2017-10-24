import React, { Component } from 'react';

import GoodsFilter from './container/goods-filter';
import GoodsTable from './container/goods-table';
import Action from './container/action';
import api from './api';
import logo from './logo.svg';
import './app.css';

const PAGE_SIZE = 10;
const TOTAL_ITEM = 100;
const defaultFilters = {
  no: '',
  goodsName: '',
  shopName: '',
  beginDate: null,
  endDate: null,
}

class App extends Component {
  state = {
    list: [],
    current: 1,
    loading: true,
    selected: []
  }

  filters = defaultFilters

  componentDidMount() {
    this.fetch();
  }

  handleFilterChange = (filters) => {
    this.filters = filters;
    this.fetch();
  }

  fetch = (query = {}) => {
    const stateData = {
      current: query.current || this.state.current
    };
    this.setState({
      loading: true
    });
    api.fetch({
      ...this.filters,
      ...stateData
    }).then(list => this.setState({
        list,
        loading: false,
        ...stateData
      })); 
  }

  handleTableSelected = (selected) => {
    this.setState({
      selected
    })
  }

  getHeader() {
    return <h2 className="app--title">商品提货</h2>
  }

  handleAllocationChange = (val, no, index) => {
    const list = this.state.list.map(item => {
      if (item.no !== no) {
        return item;
      }
      let sum = 0;

      return {
        ...item,
        child: item.child.map((sup, idx) => {
          if (idx !== index) {
            sum += sup.deliveryQuantity;
            return sup;
          }
          sum += val.deliveryQuantity;
          return {
            ...sup,
            ...val,
          }
        }),
        allocationAmount: sum        
      }
    });

    this.setState({
      list
    });
  }

  confirmAllocation = (no) => {
    const cur = this.state.list.filter(item => item.no === no)[0];
    const sum = cur.child.reduce((sub, val) => sub.deliveryQuantity + val, 0);

    return cur.deliveryQuantity === sum;
  }

  render() {
    const { state } = this;

    return (
      <div className="app">
        {this.getHeader()}
        <GoodsFilter filters={defaultFilters}
                     onFilterChange={this.handleFilterChange} />
        <Action selected={state.selected}
                list={state.list}
                onAllocationChange={this.handleAllocationChange}
                confirmAllocation={this.confirmAllocation} />
        <GoodsTable rowKey="no"
                    datasets={state.list}
                    loading={state.loading}
                    onChange={this.fetch}
                    pageInfo={{
                      pageSize: PAGE_SIZE,
                      current: state.current,
                      totalItem: TOTAL_ITEM
                    }}
                    selection={{
                      selectedRowKeys: state.selected,
                      onSelect: this.handleTableSelected
                    }} />
      </div>
    )
  }
}

export default App;
