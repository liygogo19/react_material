import React from 'react';
import { Button } from 'zent';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './index.css';

export default function FilterAction(props) {
  return (
    <div className={cx('filter-action', props.className)}>
      <Button
        type="primary"
        loading={props.loading}
        className="filter-action__btn"
        onClick={props.onConfirm}
      >
        {props.confirmText}
      </Button>
      <Button
        className="filter-action__btn--clear"
        onClick={props.onClear}
      >
        {props.clearText}
      </Button>
    </div>
  );
}

FilterAction.defaultProps = {
  confirmText: '查询',
  clearText: '清空'
};

FilterAction.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  confirmText: PropTypes.string,
  clearText: PropTypes.string,
};
