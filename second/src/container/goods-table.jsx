import React, { Component } from 'react';
import { Table } from 'zent';

const columns = [{
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
}, {
  title: '提货单状态',
  name: 'status'
}]

const subColumns = [{
  title: '供应商',
  name: 'supplier'
}, {
  title: '交付日期',
  name: 'deliveryDate'
}, {
  title: '提货量',
  name: 'deliveryQuantity'
}, {
  title: '到货日期',
  name: 'arrivalDate'
}, {
  title: '状态',
  name: 'status'
}]

export default class GoodsTabel extends Component {
  render() {
    const { props } = this;
    
    return (
      <Table columns={columns}
             expandation={{
              expandRender(data) {
                if (data.child && data.child.length) {
                  return <Table columns={subColumns}
                                datasets={data.child} />
                }
              }
            }}
            {...props} />
    )
  }
}
