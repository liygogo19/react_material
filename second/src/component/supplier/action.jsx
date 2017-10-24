import React, { Component } from 'react';
import { Button, Notify } from 'zent';

export default function Action(props) {
  const confirmAllocation = () => {
    if (props.confirmAllocation(props.no)) {
      Notify.success('修改成功');
      props.close();
    } else {
      Notify.error('修改失败，分配量不等于提货量');
    }
  }

  return (
    <div className="supplier__action">
      <Button type="primary" onClick={confirmAllocation}>确认</Button>
      <Button onClick={props.close}>取消</Button>    
    </div>    
  )
}
