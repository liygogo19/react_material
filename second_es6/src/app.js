import React, { Component } from 'react';
import './app.css';
import GoodsFilter from './container/goods-filter'
import Action from './container/actions'
import GoodsTable from './container/goods-table'
import AllocationTable from './container/allocation-table'
import datasets from './data'
import fetch from './api'
import { Notify, Dialog, Button } from 'zent'

const defaultFilter = {
    no: '',
    goodsName: '',
    shopName: '',
    beginDate: null,
    endDate: null
}

const chosenState = {
    selected: []
}

const { openDialog, closeDialog } = Dialog;
const id = 'my_dialog';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          ...chosenState,
          datasets:datasets,
          isLoading:false,
          selectedRowKeys: [],
          visible:false,
      }
      this.changeDatasets = this.changeDatasets.bind(this);
      this.onSelect = this.onSelect.bind(this);
      this.confirmTake = this.confirmTake.bind(this);
      this.allocationChange = this.allocationChange.bind(this);
      this.onInvisible = this.onInvisible.bind(this);
      this.onVisible = this.onVisible.bind(this);
  }

  getHeader(){
      return <h2 className="app--title">商品提货</h2>
  }

  onSelect(selectedRowkeys=[],selectedRows,currentRow){
      this.setState({
          'selectedRowKeys': selectedRowkeys,
          'selected':selectedRows
      }, function () {
          console.log(this.state.selected);
      });
  }

  changeDatasets(query={}){
      this.setState({
          isLoading:true,
      });

      fetch(query).then((fetchDatas)=>{
          this.setState({
              datasets:fetchDatas,
              isLoading:false,
          });
      });
  }

  allocationChange(){
      var chosenList = this.state.selected;
      if(chosenList.length>1){
          Notify.error('一次至多分配一个订单！');
      }
      if(chosenList.length<1){
          Notify.error('请选择一个订单！');
      }
      if(chosenList.length==1) {
          this.onVisible();
      }
  }

  onInvisible(){
      this.setState({
          visible:false,
      });
  }

  onVisible(){
      this.setState({
          visible:true,
      });
  }

  confirmTake(){
      var order_list = this.state.selectedRowKeys;
      console.log(order_list);
      if(order_list.length<1){
          Notify.error('请至少选择一个订单！');
      }
      else {
          openDialog({
              dialogId: id,
              title: '提货',
              children: <div>你选择的提货单是:<br/><div>{order_list.join(' ')}</div></div>,
              footer: <Button onClick={() => closeDialog(id)}>关闭</Button>
          });
      }
  }

  render(){
    return (
      <div>
          {this.getHeader()}
          <GoodsFilter changeDatasets={this.changeDatasets} filters={ defaultFilter } />
          <Action allocationChange={this.allocationChange} confirmTake={this.confirmTake} />
          <GoodsTable
              isLoading={this.state.isLoading}
              datasets={this.state.datasets}
              selectedRowKeys={this.state.selectedRowKeys}
              onSelect={this.onSelect}
          ></GoodsTable>
          <AllocationTable selectedGood={this.state.selected} onInvisible={this.onInvisible} visible={this.state.visible}/>
      </div>
    );
  }
}

export default App;
