import React, {Component} from 'react';
import { Dialog, Table } from 'zent';
import Supplier from '../components/supplier'

class AllocationTable extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const columns = [
            {
                title:'提货单编号',
                name:'no',
            },
            {
                title:'商品名称',
                name:'goodsName',
            },
            {
                title:'地域',
                name:'area',
            },
            {
                title:'商家名称',
                name:'shopName',
            },
            {
                title:'位置',
                name:'pos',
            },
            {
                title:'提货量',
                name:'deliveryQuantity',
            },
            {
                title:'分配量',
                name:'allocationAmount',
            },
            {
                title:'交货日期',
                name:'endDate',
            },
            {
                title:'提货单状态',
                name:'status',
            }
        ];
        const { selectedGood } = this.props;
        let dialog =  <Dialog
            visible={this.props.visible}
            title="提货分配"
            onClose={this.props.onInvisible}
            style={{ width: '700px' }}
        >
            <Table
                columns={columns}
                datasets={selectedGood}
                rowKey="no"
            ></Table>
            <Supplier onInvisible={this.props.onInvisible} tableData={selectedGood[0] && selectedGood[0].expand}></Supplier>
        </Dialog>;

        return(
            dialog
        );
    }
}

export default AllocationTable;