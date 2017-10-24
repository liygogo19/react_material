import React,{Component} from 'react'
import './index.css'
import {Button, Table, Input} from 'zent'

class Supplier extends Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        console.log(e.tartget.value);
    }

    render(){
        const expand_columns = [
            {
                title:'供应商',
                name:'supplier'
            },
            {
                title:'交付日期',
                name:'offerDate'
            },
            {
              title:'剩余可提货量',
              name:'leftAmount'
            },
            {
                title:'提货量',
                name:'takenQuantity',
                bodyRender: (data) => {
                    return (
                        <div>
                            <Input style={{ width: '100%' }} onChange={this.onChange} placeholder="请输入" value={data.takenQuantity}/>
                        </div>
                    );
                }
            }
        ]

        return(
            <div className="supplier_panel">
                <div className="supplier_btn">
                    <Button type="primary" >确认</Button>
                    <Button onClick={this.props.onInvisible}>取消</Button>
                </div>
                <div className="supplier_table">
                    <Table
                        columns={expand_columns}
                        datasets={this.props.tableData}
                    ></Table>
                </div>
            </div>
        );
    }
}

export default Supplier;