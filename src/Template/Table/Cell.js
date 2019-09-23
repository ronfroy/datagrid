import React from 'react';
import PropTypes from "prop-types";

function Cell(props) {
  return (
    <td className={props.trClass}>
      <div className={props.divClass}>{props.value}</div>
    </td>
  );
}

Cell.propTypes = {
  value: PropTypes.any,
  trClass: PropTypes.string,
  divClass: PropTypes.string,
};

Cell.defaultProps = {
  value: '',
  trClass: '',
  divClass: '',
};

export default Cell;
