import React, { Component } from 'react';
import './index.css';
import FilterItem from '../filter-item'

class FilterList extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        const filters = this.props.filters;

        const items = filters.map(function(item,index){
            const {children,...itemProps} = item;
            return (<FilterItem key={index} {...itemProps} >
                {children && children}
            </FilterItem>);
        });
        return(
            <div>
                {items}
            </div>
        );
    }
}

export default FilterList;