import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataGrid } from './DataGrid';
import { Column } from './Grid';
import { BootstrapTableTemplate } from './Template';

const data = [
  {id: 1, name: 'Name 1', description: 'description', value: 123.12},
  {id: 2, name: 'Name 2', description: 'description2', value: 123.12},
  {id: 3, name: 'Name 3', description: 'description3'},
  {id: 4, name: 'Name 3', description: 'description3'},
  {id: 5, name: 'Name 3', description: 'description3'},
  {id: 6, name: 'Name 3', description: 'description3'},
];

ReactDOM.render(<DataGrid data={data} fieldId="id" template={<BootstrapTableTemplate />}>
      <Column id="id" title="Id" type="numeric" />
      <Column id="name" title="Name" />
      <Column id="description" title="Description" />
      <Column id="value" title="Value" type="numeric" defaultValue="N/A"/>
      <Column id="description2" title="Description2"  defaultValue="N/A"/>
</DataGrid>, document.getElementById('grid'));
