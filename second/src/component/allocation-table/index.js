import React, { Component } from 'react';
import { NumberInput, Table } from 'zent';

import Supplier from '../supplier';

export default class AllocationTable extends Component {
  columns = [{
    title: '提货单编号',
    name: 'no'
  }, {
    title: '商品名称',
    name: 'goodsName'
  }, {
    title: '地域',
    name: 'area'
  }, {
    title: '商家名称',
    name: 'shopName'
  }, {
    title: '位置',
    name: 'pos'
  }, {
    title: '提货量',
    name: 'deliveryQuantity'
  }, {
    title: '分配量',
    name: 'allocationAmount'
  }, {
    title: '交货日期',
    name: 'date'
  }]

  renderSupplier = () => {
    const { datasets, onAllocationChange, confirmAllocation, close } = this.props;

    if (datasets[0].child && datasets[0].child.length) {
      return <Supplier no={datasets[0].no}
                       close={close}
                       datasets={datasets[0].child}
                       onAllocationChange={onAllocationChange}
                       confirmAllocation={confirmAllocation} />
    }
  }

  render() {
    const { props } = this;

    return (
      <div>
        <Table columns={this.columns}
               datasets={props.datasets} />
        {
          this.renderSupplier()
        }
      </div>
    )
  }
}
