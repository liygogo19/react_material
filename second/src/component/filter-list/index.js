import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FilterItem from '../filter-item';

export default function FilterList(props) {
  const { filters, className } = props;

  const items = filters.map((item, index) => {
    const { children, ...itemProps } = item;

    return (
      <FilterItem key={index}
                  {...itemProps} >
        {children && children}
      </FilterItem>
    );
  });

  return (
    <div className={cx('filter-list', className)}>
      {items}
    </div>
  );
}

FilterList.propTypes = {
  filters: PropTypes.array.isRequired
};
