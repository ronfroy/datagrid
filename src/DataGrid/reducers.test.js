import React from 'react';
import {createReducers} from './reducers';
import {sort} from './actions';

it('sort data', () => {

  const data = [
    {id: 1, name: 'Name 1', description: 'description', value: 123.12},
    {id: 2, name: 'Name 2', description: 'description2', value: 123.12},
  ];

  const outputState = createReducers({ data }, sort('id'));
});
