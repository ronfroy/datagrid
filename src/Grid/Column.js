import React from 'react';
import PropTypes from 'prop-types';
import columnType from './columnType';

const Column = () => <div />;

Column.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cell: PropTypes.object,
  heading: PropTypes.object,
  type: PropTypes.oneOf(Object.values(columnType)),
  defaultValue: PropTypes.any
};

Column.defaultProps = {
  defaultValue: undefined,
  type: columnType.TEXT
};

export default Column;
