import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FilterList from '../filter-list';
import FilterAction from '../filter-action';

import './index.css';

export default function Filter(props) {
  const { filters, className, ...actionProps } = props;
  const { onClear, onConfirm } = actionProps;

  return (
    <div className={cx('filter', className)}>
      <FilterList filters={filters}
                  className={cx({ [`${className}__list`]: className })} />
      {onClear && onConfirm &&
      <FilterAction {...actionProps}
                    className={cx({ [`${className}__actions`]: className })} />}
    </div>
  );
}

Filter.propTypes = {
  filters: PropTypes.array.isRequired,
  onClear: PropTypes.func,
  onConfirm: PropTypes.func
};
