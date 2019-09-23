import React from 'react';
import PropTypes from "prop-types";
import { TableCell, TableHeading, TableLayout, TableRow } from "../Table";

const TableTemplate = () => <div />;

TableTemplate.propTypes = {
  layout: PropTypes.object,
  row: PropTypes.object,
  cell: PropTypes.object,
  heading: PropTypes.object
};

TableTemplate.defaultProps = {
  layout: <TableLayout tableClass="table table-hover"/>,
  cell: <TableCell />,
  cellNumeric: <TableCell divClass="text-right" />,
  row: <TableRow />,
  heading: <TableHeading />,
  headingNumeric: <TableHeading divClass="text-right" />,
};

export default TableTemplate;
