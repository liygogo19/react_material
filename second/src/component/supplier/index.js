import React, { Component } from 'react';
import { NumberInput, Table } from 'zent';

import Action from './action';
import './index.css';

export default function Supplier(props) {
  const columns = [{
    title: '供应商',
    name: 'supplier'
  }, {
    title: '交付日期',
    name: 'deliveryDate'
  }, {
    title: '剩余可提货量',
    name: 'leftAmount'
  }, {
    title: '分配量',
    bodyRender(data, pos) {
      return <NumberInput value={data.deliveryQuantity}
                          max={data.leftAmount}
                          onChange={(evt) => props.onAllocationChange({
                            deliveryQuantity: evt.target.value
                          }, props.no, pos.row)} />
    }
  }]  
  return (
    <div className="supplier">
      <Action no={props.no}
              close={props.close}
              confirmAllocation={props.confirmAllocation}/>
      <Table columns={columns}
             datasets={props.datasets} />
    </div>
  )
}
