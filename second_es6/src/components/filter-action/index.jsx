import React, { Component } from 'react';
import { Button } from 'zent';
import './index.css'

class FilterAction extends Component {
    render(){
        const {onConfirm, onClear} = this.props;
        return(
            <div className="filter-action">
                <Button type="primary" onClick={onConfirm}>查询</Button>
                <Button onClick={onClear}>清空</Button>
            </div>
        );
    }
}

export default FilterAction;
