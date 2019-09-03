import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from './Title';

// Generate Order Data
function createData(id, datetime, device, ip) {
  return { id, datetime, device, ip };
}

const rows = [
  createData(0, '16 Mar, 2019', 'POCOPHONE F1', '192.168.254.254'),
];

export default () => (
  <>
    <Title>Visits</Title>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Datetime</TableCell>
          <TableCell>Device</TableCell>
          <TableCell>IP Address</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.datetime}</TableCell>
            <TableCell>{row.device}</TableCell>
            <TableCell>{row.ip}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
);