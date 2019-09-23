import React from 'react';
import PropTypes from "prop-types";

function Layout(props) {
  return (
      <table className={props.tableClass}>
        <thead className={props.headClass}>
          { props.header }
        </thead>
        <tbody className={props.bodyClass}>
          { props.body }
        </tbody>
      </table>
  );
}

Layout.propTypes = {
  tableClass: PropTypes.string,
  headClass: PropTypes.string,
  bodyClass: PropTypes.string
};

Layout.defaultProps = {
  tableClass: '',
  headClass: '',
  bodyClass: ''
};

export default Layout;
