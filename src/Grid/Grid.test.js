import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';
import {TableTemplate} from '../Template';
import Column from './Column';

it('renders with empty data', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Grid data={[]} fieldId="id" template={<TableTemplate/>} onSort={() => false}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with data', () => {
  const data = [
    {id: 1, name: 'Name 1', description: 'description', value: 123.12},
    {id: 2, name: 'Name 2', description: 'description2', value: 123.12},
  ];

  const div = document.createElement('div');
  ReactDOM.render(<Grid data={data} fieldId="id" template={<TableTemplate/>} onSort={() => false}>
    <Column id="id" title="Id"/>
    <Column id="name" title="Name" />
  </Grid>, div);
  ReactDOM.unmountComponentAtNode(div);
});
