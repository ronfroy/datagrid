import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import PropTypes from "prop-types";
import Container from './Container';
import { TableTemplate } from '../Template'
import { createReducers } from './reducers'

const DataGrid = function ({data, ...props}) {
  const store = createStore(createReducers(data));

  return (<Provider store={store}><Container {...props}/></Provider>)
};

DataGrid.propTypes = {
  data: PropTypes.array,
  template: PropTypes.object,
  fieldId: PropTypes.string,
};

DataGrid.defaultProps = {
  data: [],
  template: <TableTemplate />,
  fieldId: 'id'
};

export default DataGrid

