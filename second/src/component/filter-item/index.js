import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './index.css';

const WORD_WIDTH = 12;

export default function FilterItem(props) {
  const {
    label,
    width,
    component,
    siblings,
    children,
    className,
    wordCount,
    wordWidth,
    required,
    props: filterProps
  } = props;
  const isSimpleLabel = typeof label === 'string' || typeof label === 'number';
  const isSeperator = !label && !component && !children;

  if (isSeperator) {
    return (<div className="filter-item__seprator" />);
  }

  let labelStyle = {};

  if (wordCount) {
    labelStyle = {
      width: wordWidth * wordCount
    };
  }
  width && (labelStyle = {
    width
  });

  const labelClass = cx('filter-item__label', {
    'filter-item__label--required': required
  });

  return (
    <div className={cx('filter-item', className)}>
      {
        isSimpleLabel ?
          <div className={labelClass} style={labelStyle}>
            {label}
          </div> :
          label
      }
      <div className="filter-item__control">
        {component && React.createElement(component, filterProps)}
        {children}
      </div>
      {siblings && <div className="filter-item__siblings">{siblings}</div>}
    </div>
  );
}

FilterItem.defaultProps = {
  wordWidth: WORD_WIDTH
};

FilterItem.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]),
  siblings: PropTypes.node,
  wordCount: PropTypes.number,
  width: PropTypes.number
};
