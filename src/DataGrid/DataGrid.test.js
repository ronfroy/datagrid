import React from 'react';
import ReactDOM from 'react-dom';
import DataGrid from './DataGrid';

it('renders without properties', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with data', () => {

  const data = [
    {id: 1, name: 'Name 1', description: 'description', value: 123.12},
    {id: 2, name: 'Name 2', description: 'description2', value: 123.12},
  ];

  const div = document.createElement('div');
  ReactDOM.render(<DataGrid data={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders with idField configured', () => {

  const data = [
    {idField: 1, data: 'test'},
    {idField: 2, data: 'test'},
  ];

  const div = document.createElement('div');
  ReactDOM.render(<DataGrid data={data} fieldId="idField"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
