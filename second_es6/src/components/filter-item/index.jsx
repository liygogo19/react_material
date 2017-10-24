import React, { Component } from 'react';
import './index.css'
import PropTypes from 'prop-types';


class FilterItem extends Component {

    render(){
        const {
            label,
            component,
            children,
            props:filterProps
        } = this.props;

        const isSimpleLabel = typeof label === 'string' || typeof label === 'number';
        const isSeperator = !label && !component && !children;

        if (isSeperator) {
            return (<div className="filter-item__seprator" />);
        }

        return(
            <div className="filter-item">
                {
                    isSimpleLabel ?
                    <div className="filter-item_label">{label}</div>
                    :
                    {label}
                }
                <div className="filter-item_control">
                    {React.createElement(component,filterProps)}
                </div>
            </div>
        );
    }
}

FilterItem.propTypes = {
    required : PropTypes.bool,
    component : PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ]),
    label:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.func
    ])
}


export default FilterItem;
