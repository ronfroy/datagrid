import React from 'react';
import PropTypes from "prop-types";

function TableRow(props) {

  return (
    <tr className={props.rowClass}>
      {props.children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.array,
  rowClass: PropTypes.string
};

TableRow.defaultProps = {
  rowClass: ''
};

export default TableRow;

