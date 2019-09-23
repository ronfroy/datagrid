import React from 'react';
import PropTypes from "prop-types";
import {TableCell, TableHeading, TableLayout, TableRow} from ".";

const Template = () => <div />;

Template.propTypes = {
  layout: PropTypes.object,
  row: PropTypes.object,
  cell: PropTypes.object,
  heading: PropTypes.object
};

Template.defaultProps = {
  layout: <TableLayout />,
  cell: <TableCell />,
  cellNumeric: <TableCell />,
  row: <TableRow />,
  heading: <TableHeading />,
  headingNumeric: <TableHeading />,
};

export default Template;
