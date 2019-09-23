import React from 'react';
import PropTypes from "prop-types";

function Heading(props) {
  return (
    <th className={props.className} onClick={props.onSort}>
      <div className={props.divClass}>{props.title}</div>
    </th>
  );
}

Heading.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  thClass: PropTypes.string,
  divClass: PropTypes.string,
  onSort: PropTypes.func,
};

Heading.defaultProps = {
  id: '',
  title: '',
  thClass: '',
  divClass: '',
  onSort: () => false,
};

export default Heading;

