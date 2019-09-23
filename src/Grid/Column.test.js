import React from 'react';
import ReactDOM from 'react-dom';
import DataGrid from '../DataGrid/DataGrid';
import Column from './Column';

it('renders', () => {

  const data = [
    {id: 1, name: 'Name 1', description: 'description', price: 123.12},
    {id: 2, name: 'Name 2', description: 'description2', price: 123.12},
  ];

  const div = document.createElement('div');

  ReactDOM.render(<DataGrid data={data}>
    <Column id="id" title="Id"/>
    <Column id="name" title="Name" />
    <Column id="description" title="Description" />
    <Column id="price" title="Price" />
  </DataGrid>, div);

  ReactDOM.unmountComponentAtNode(div);
});

