import React, { Component } from "react";
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from '../services/genreService';
import { paginate } from '../utils/paginate';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from "./common/searchBox";
import {toast} from 'react-toastify';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize :4,
    selectedGenre:null,
    searchQuery: "",
    sortColumn: {path:'title',order: 'asc'},
  };

  async componentDidMount(){
    const { data } = await getGenres(); 
    const genres = [{name:'All',_id:''},...data]

    const { data: movies }  = await getMovies();
    this.setState({ genres, movies }
        );
  }

  handleDelete = async movie => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({ movies });
     try{
        await deleteMovie(movie._id)
        toast("Movie deleted successfully");
     }catch(ex){
          if(ex.response && ex.response.status === 404)
           toast.error('This movie has already been deleted');

           this.setState({ movies: originalMovies });
     }
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
   
   handlePageChange = page =>{
     this.setState({currentPage:page});
   }

   handleGenreSelect = genre =>{
     this.setState({ selectedGenre: genre, currentPage:1, searchQuery:"" });
   }

   handleSearch = query =>{
     this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 })
   }

   handleSort = sortColumn =>{
      this.setState({sortColumn})
   } 

   getPageData = () => {
     const { 
            pageSize,
            currentPage, 
            movies, 
            selectedGenre,
            searchQuery,
            sortColumn
            } = this.state;
     let filtred = movies
     if(searchQuery)
     filtred = movies.filter( m => 
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
      else if (selectedGenre && selectedGenre._id )
        filtred = movies.filter(m => m.genre._id === selectedGenre._id)
        
    const sorted = _.orderBy(filtred,[sortColumn.path],[sortColumn.order]);
    const allMovies = paginate(sorted,currentPage,pageSize);
    
    return { totalCount: filtred.length, data: allMovies }
   }

   


  render() {
    const { user } = this.props;
    const { length: count } = this.state.movies;
    const { 
            pageSize,
            currentPage, 
            sortColumn,
            searchQuery
            } = this.state;
        

    if (count === 0) return <p>There are no movies in the database.</p>;
      
      const { totalCount, data } = this.getPageData()

    return (
      <div className="row">
      <div className="col">
         <ListGroup 
             items={this.state.genres}
             textProperty="name"
             valueProperty="_id"
             selectedItem={this.state.selectedGenre}
             onItemSelect={this.handleGenreSelect}
          />
          
          {user &&
           <Link 
             to="/movies/new"
             className="btn btn-primary btn-sm"
             style= {{ marginBottom: 20 }} 
            >
            New Movie
            </Link>
            }
          
         <p>Showing {totalCount} movies in the database.</p>

         <SearchBox value={searchQuery} onChange={this.handleSearch}  />
        
        <MoviesTable 
           movies={data}
           sortColumn={sortColumn}
           onDelete={this.handleDelete}
           onLike={this.handleLike}
           onSort={this.handleSort}
        />
        <Pagination 
           itemsCount={totalCount}
           pageSize={pageSize}
           currentPage={currentPage}
           onPageChange={this.handlePageChange}
            />
       </div>
        
      </div>
    );
  }
}

export default Movies;
