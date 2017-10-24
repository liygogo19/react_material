import React,{Component} from 'react';
import { Table, Loading } from 'zent'

class GoodsTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            page: {
                pageSize: 6,
                current: 0,
                totalItem: 60,
            },
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(conf){
        this.setState({
            page:{
                pageSize: 6,
                current: conf.current,
                totalItem: 60,
            }
        });
    }

    render(){
        const {datasets} = this.props;

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

        const expand_columns = [
            {
                title:'序号',
                name:'order'
            },
            {
                title:'供应商',
                name:'supplier'
            },
            {
                title:'交付日期',
                name:'offerDate'
            },
            {
                title:'提货量',
                name:'takenQuantity'
            },
            {
                title:'到货日期',
                name:'arriveDate'
            },
            {
                title:'状态',
                name:'expand_status'
            }
        ]

        return (
            <Loading show={this.props.isLoading}>
                <Table
                    columns={columns}
                    datasets={datasets}
                    rowKey="no"
                    pageInfo={this.state.page}
                    onChange={(conf) => { this.onChange(conf); }}
                    selection={{
                        selectedRowKeys: this.props.selectedRowKeys,
                        onSelect:this.props.onSelect
                    }}
                    expandation={{
                        isExpanded:false,
                        expandRender(record){
                            if(record && record.expand)
                            {
                                return(
                                    <Table className='expand_table' columns={expand_columns} datasets={record.expand}></Table>
                                );
                            }
                        }
                    }}
                ></Table>
            </Loading>
        );
    }
}

export default GoodsTable;