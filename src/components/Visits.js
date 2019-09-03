import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import client from '../graphql-client';

import Title from './Title';

// Generate Order Data
function createData(id, datetime, device, ip) {
  return { id, datetime, device, ip };
}

const rows = [
  createData(0, '16 Mar, 2019', 'POCOPHONE F1', '192.168.254.254'),
];

export default () => {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const getVisits = async () => {
      const response = await client.query({
        query: gql`
          {
            visits {
              datetime,
              device,
              ip
            }
          }
        `,
      });

      console.log('response', response);

      setVisits(response.data.visits);
    };

    getVisits();
  }, [])

  return (
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
          {visits.map(visit => (
            <TableRow key={visit.ip}>
              <TableCell>{visit.datetime}</TableCell>
              <TableCell>{visit.device}</TableCell>
              <TableCell>{visit.ip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
};