// 'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://w4i1vz3nzk.execute-api.us-east-1.amazonaws.com/dev/dashboard');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Workspaces
          </h3>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Overview of all registered workspaces within your organization.
          </p>
        </div>
        <button
          type="button"
          className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
        >
          Add workspace
        </button>
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Shift
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Week 1
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Week 2
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Week 3
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Week 4
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.workspace}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.name}
              </TableCell>
              <TableCell>{item.week1}</TableCell>
              <TableCell>{item.week2}</TableCell>
              <TableCell>{item.week3}</TableCell>
              <TableCell>{item.week4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}