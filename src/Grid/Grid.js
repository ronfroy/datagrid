import React from 'react';
import PropTypes from "prop-types";
import ColumnType from "./columnType";


function getHeading(column, template) {
    if(column.props.heading !== undefined) {
      return column.props.heading;
    }

    if(ColumnType.NUMERIC === column.props.type) {
      return template.props.headingNumeric;
    }

  return template.props.heading;
}

function buildHeader(columns, template, onSort) {
  return React.cloneElement(template.props.row,{}, React.Children.map(columns, column => {
    return React.cloneElement(getHeading(column, template), {
      key: column.props.id,
      title: column.props.title,
      id: column.props.id,
      onSort: () => onSort(column.props.id)
    });
  }));
}

function buildBody(columns, template, data, fieldId) {
  return data.map(rowData => React.cloneElement(template.props.row, {
      key: rowData[fieldId],
      children: React.Children.map(columns,column => buildCell(column, template, rowData)),
    })
  )
}

function getCell(column, template) {
  if(column.props.cell !== undefined) {
    return column.props.cell;
  }

  if(ColumnType.NUMERIC === column.props.type) {
    return template.props.cellNumeric;
  }

  return template.props.cell;
}

function buildCell(column, template, rowData) {
  const cellComponent = getCell(column, template);
  const value = rowData[column.props.id] === undefined ? column.props.defaultValue : rowData[column.props.id];
  return React.cloneElement(cellComponent, {
    row: rowData,
    value: value,
    key: column.props.id,
  })
}

function Grid(props) {
  return React.cloneElement(props.template.props.layout, {
    header: buildHeader(props.children, props.template, props.onSort),
    body: buildBody(props.children, props.template, props.data, props.fieldId),
  });
}

Grid.propTypes = {
  fieldId: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  template: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired
};

export default Grid;

