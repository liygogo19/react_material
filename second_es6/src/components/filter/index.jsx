import React, { Component } from 'react';
import './index.css'
import FilterList from '../filter-list'
import FilterAction from '../filter-action'
import cx from 'classnames'

class Filter extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        const { filters, className, ...actionProps} = this.props;
        const {onConfirm, onClear} = actionProps;
        return(
            <div className={cx('filter',className)}>
                <FilterList filters={filters} />
                {onConfirm && onClear &&
                    <FilterAction {...actionProps}/>
                }

            </div>
        );
    }
}

export default Filter;

