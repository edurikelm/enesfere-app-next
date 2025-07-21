'use client';

import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { data } from '../../public/work_orders/data';
import Link from 'next/link';

const PRIORITY_OPTIONS = ['-', 'Critical', 'High', 'Med', 'Low'];

const columns = [
  {
    name: 'Building',
    selector: (row) => row['Building'],
    sortable: true,
  },
  {
    name: 'Work Order ID',
    selector: (row) => row['Work Order ID'],
    sortable: true,
  },
  {
    name: 'Asset Type',
    selector: (row) => row['Asset Type'],
    sortable: true,
  },
  {
    name: 'Asset ID',
    cell: (row) => (
      <Link
        href={`/work-orders/${row['Work Order ID']}`}
        className="text-blue-600 underline"
      >
        {row['Title']}
      </Link>
    ),
    sortable: true,
  },
  {
    name: 'Title',
    selector: (row) => row['Title'],
    sortable: true,
  },
  {
    name: 'Priority',
    cell: (row, rowIndex) => (
      <select
        className="select select-bordered border-black select-sm w-full max-w-xs bg-white"
        defaultValue={row['Priority'] || '-'}
        onChange={(e) => {
          const newPriority = e.target.value;
          console.log(`Fila ${rowIndex}: prioridad cambiada a`, newPriority);
        }}
      >
        {PRIORITY_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ),
    sortable: true,
    // ignoreRowClick: true,
    // button: true,
  },
  {
    name: 'Status',
    selector: (row) => row['Status'],
    sortable: true,
  },
  {
    name: 'Energy Cost',
    selector: (row) => row['Energy Cost'],
    sortable: true,
  },
  {
    name: 'Impacts',
    selector: (row) => row['Impacts']?.join(', ') || '',
    sortable: true,
  },
  {
    name: 'Owner',
    selector: (row) => row['Owner'],
    sortable: true,
  },
  {
    name: 'Trade',
    selector: (row) => row['Trade'],
    sortable: true,
  },
  {
    name: 'Work Order Source',
    selector: (row) => row['Work Order Source'],
    sortable: true,
  },
];

// const data = [
//   {
//     id: 1,
//     nombre: 'Juan Pérez',
//     edad: 28,
//     email: 'juan@example.com',
//   },
//   {
//     id: 2,
//     nombre: 'María López',
//     edad: 34,
//     email: 'maria@example.com',
//   },
//   {
//     id: 3,
//     nombre: 'Carlos Ruiz',
//     edad: 45,
//     email: 'carlos@example.com',
//   },
// ];

const customStyles = {
  rows: {
    style: {
      minHeight: '56px',
      borderBottom: '1px solid #e5e7eb', // Tailwind: border-gray-200
    },
  },
  headCells: {
    style: {
      backgroundColor: '#f3f4f6', // Tailwind: bg-gray-100
      fontWeight: 'bold',
      borderBottom: '2px solid #d1d5db', // Tailwind: border-gray-300
    },
  },
  cells: {
    style: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
};

export default function DataTableComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // console.log(order56);

  return (
    <div className="p-6 w-full">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">Lista de Usuarios</h2>
          <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            responsive
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
}
