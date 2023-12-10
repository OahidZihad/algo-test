import React from 'react';
import { useTable } from 'react-table';

const CommentsTable = ({ columns, items }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: items
  });

  return (
    <table {...getTableProps()} style={{ border: '1px solid black', width: '100%' }}>
      <thead>
        {headerGroups?.map((headerGroup) => (
          <tr {...headerGroup?.getHeaderGroupProps()}>
            {headerGroup?.headers?.map((column) => (
              <th {...column?.getHeaderProps()} style={{ border: '1px solid black', background: 'lightgray', padding: '8px' }}>
                {column?.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows?.map((row) => {
          prepareRow(row);
          return (
            <tr {...row?.getRowProps()} style={{ border: '1px solid black' }}>
              {row?.cells?.map((cell) => (
                <td {...cell?.getCellProps()} style={{ padding: '8px' }}>
                  {cell?.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CommentsTable;
