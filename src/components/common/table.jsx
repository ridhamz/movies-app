import React from 'react';
import TatbleHeader from "./tableHeader";
import TableBody from './tableBody'

const Table = ({ columns, sortColumn, onSort, movies } ) => {
    return ( 
        <table className="table">
          <TatbleHeader 
            columns={columns}
            sortColumn={sortColumn}
            onSort={onSort}
          />
         <TableBody 
           columns={columns}
           data={movies}
         />
        </table>
     );
}
 
export default Table;