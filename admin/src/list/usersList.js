import React from 'react';
import { List, Datagrid, TextField, EmailField, DateField } from 'react-admin';

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);
