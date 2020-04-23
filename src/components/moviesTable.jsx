import React, {Component} from 'react';
import Like from "./common/like";
import Table from './common/table';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';

class MoviesTable extends Component {

  constructor(){
    super();
    const user = getCurrentUser();
    if(user && user.isAdmin)
    this.columns.push(
      { 
       key: 'delete',
       content:movie => <button
                       onClick={()=>this.props.onDelete(movie)}  
                       className='btn btn-danger btn-sm'
                >
                delete
                </button>
       }
    )
  }
   columns = [
     { path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
     { path: 'genre.name', label: 'Genre'},
     { path: 'numberInStock', label: 'Stock'},
     { path: 'dailyRentalRate', label: 'Rate'},
     {
        key: 'like', 
        content:movie => <Like 
                       liked={movie.liked} 
                       onClick={()=>this.props.onLike(movie)}
                  />
        },
     
   ]
   
  render(){
   const {
     movies,
     sortColumn,
     onSort
   } = this.props;

    return ( 
      <Table 
        movies={movies}
        sortColumn={sortColumn}
        onSort={onSort}
        columns={this.columns}
      />
        
     );
}}
 
export default MoviesTable;