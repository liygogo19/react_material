import React, { Component } from 'react';
import { Button, Dialog, Notify } from 'zent';

import AllocationTable from '../component/allocation-table';

const { openDialog, closeDialog } = Dialog;

export default function Action(props) {
  const showDeliveryIds = () => {
    return (
      <div>
        你选择的提货单是：
        {
          <br />
        }
        {
          props.selected.map(item => {
            return `${item} `
          })            
        }
      </div>
    )
  }

  const onConfirmDelivery = () => {
    const dialogId = 'delivery';
    const close = () => closeDialog(dialogId);

    if (props.selected.length === 0) {
      Notify.error('请至少选择一个提货单')
      return false
    }

    openDialog({
      title: '提货',
      dialogId,
      children: showDeliveryIds(),
      footer: (<div>
        <Button onClick={close} type="primary">确定</Button>
        <Button onClick={close}>取消</Button>
      </div>)
    })
  }

  const onConfirmAllocation = () => {
    const dialogId = 'allocation';
    const close = () => closeDialog(dialogId);

    if (props.selected.length === 0) {
      Notify.error('请至少选择一个提货单')
      return false
    }
    if (props.selected.length > 1) {
      Notify.error("提货分配只可以选择一笔提货单")
      return false
    }

    openDialog({
      title: '提货分配',
      style: {
        width: 700
      },
      dialogId,
      children: <AllocationTable close={close}
                                 datasets={props.list.filter(item => item.no === props.selected[0])}
                                 onAllocationChange={props.onAllocationChange}
                                 confirmAllocation={props.confirmAllocation} />
    })
  }

  return (
    <div className="app__action">
      <Button type="primary" onClick={onConfirmDelivery}>确认提货</Button>
      <Button type="primary" onClick={onConfirmAllocation}>提货分配</Button>
      <Button>取消分配</Button>
    </div>
  )
}
