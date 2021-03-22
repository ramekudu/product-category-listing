import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import axios from "axios";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import makeData from './makeData'
import { ReactQueryDevtools } from "react-query/devtools";


const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                
                if(cell.getCellProps().key.indexOf("id")!= -1)
                {let id =  cell.value;
                  return <td > <button
                  modifiers="negative"
                  onClick={() => {
                    onDeleteClick(id);
                  }}
                >
                  Delete
                </button></td>
                }
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function onDeleteClick(id){

  const productDeleteApi = "http://localhost:8083/products/product/"+id;
  fetch(productDeleteApi, { method: 'DELETE' })
        .then(() => console.log("Deleted successfully"));
}

function ProductTable( props) {
  const queryClient = useQueryClient();

  const { isLoading, error, data, isFetching } = useQuery("prodData", () =>
    fetch(
      "http://localhost:8083/products/products"
    ).then((res) => res.json())
  );

  const columns = 
     [
      {
        
        Header: "Product Details",
        columns: [
          {
            Header: "Product Name",
            accessor: "name"
          },
          {
            Header: "Description",
            accessor: "description"
          },
          {
            Header: "Category Name",
            accessor: "category.categoryName"
          },
          {
            Header: "Created Date",
            accessor: "createdDate"
          },
          {
            Header: "Updated  Date",
            accessor: "updatedDate"
          }
          ,
          {
            Header: "Delete Product",
            accessor: "id"
          }

        ],
      },
    ]
  
  

if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default ProductTable