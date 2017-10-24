import React, { Component } from 'react'
import Filter from '../components/filter'
import { Input, DateRangePicker } from 'zent'

class GoodsFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...this.props.filters
        }

        this.getFilterItems = this.getFilterItems.bind(this);
        this.handleNoChange = this.handleNoChange.bind(this);
        this.handleGoodsChange = this.handleGoodsChange.bind(this);
        this.handleShopChange = this.handleShopChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onClearFilter = this.onClearFilter.bind(this);
        this.onFilter = this.onFilter.bind(this);
    }

    handleNoChange(e){
        this.setState({
            no:e.target.value.trim(),
        });
    }

    handleGoodsChange(e){
        this.setState({
            goodsName:e.target.value.trim(),
        });
    }

    handleShopChange(e){
        this.setState({
            shopName:e.target.value.trim(),
        });
    }

    handleDateChange(date){
        const [beginDate,endDate] = date;
        this.setState({
            beginDate:beginDate,
            endDate:endDate
        });
    }

    getFilterItems(){
        const {no, goodsName, shopName, beginDate, endDate} = this.state;

        return [
            {
                label:'提货单号',
                component:Input,
                props:{
                    placeholder:'请输入单号',
                    value:no,
                    onChange:this.handleNoChange,
                }
            },
            {
                label:'商品名称',
                component:Input,
                props:{
                    placeholder:'请输入名称',
                    value:goodsName,
                    onChange:this.handleGoodsChange,
                }
            },
            {
                label: null
            },
            {
                label:'商家名称',
                component:Input,
                props:{
                    placeholder:'请输入商家',
                    value:shopName,
                    onChange:this.handleShopChange,
                }
            },
            {
                label:'交货日期',
                component:DateRangePicker,
                props:{
                    value:[beginDate, endDate],
                    onChange:this.handleDateChange,
                }
            }
        ];
    }

    onFilter(){
        this.props.changeDatasets(this.state);
    }

    onClearFilter(){
        this.setState(this.props.filters);
    }

    render(){
        return(
            <Filter filters={this.getFilterItems()} onClear={this.onClearFilter} onConfirm={this.onFilter}/>
        );
    }
}

export default GoodsFilter;