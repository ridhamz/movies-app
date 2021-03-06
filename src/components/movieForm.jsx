import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { toast } from 'react-toastify';
import { getGenres } from '../services/genreService';
import { getMovie, saveMovie } from '../services/movieService';

class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        },
        genres: [],
        errors: {}
    }
     
     schema = {
         _id: Joi.string(),
         title: Joi.string()
            .required()
            .label('Title'),
         genreId: Joi.string()
            .required()
            .label('Genre'),
         numberInStock: Joi.number()
            .required()
            .min(0)
            .max(100)
            .label('Number in stock'),
         dailyRentalRate : Joi.number()
            .required()
            .min(0)
            .max(10)
            .label('Daily Rental Rate')       
     };

      async populateGenre () {
       const {data: genres} = await getGenres();
        this.setState({ genres });

    }

    async populateMovie (){
         try{
             const movieId = this.props.match.params.id ;
             if(movieId === "new") return ;
             const {data: movie} = await getMovie(movieId);
             this.setState({ data: this.mapTopViewModel(movie) })
         }catch(ex){
             if(ex.response && ex.response.status === 404)
             this.props.history.replace("/not-found");
         }
    }

     async componentDidMount(){
        await this.populateGenre();
        await this.populateMovie()
     }
     
     mapTopViewModel(movie) {
         return {
             _id : movie._id,
             title: movie.title,
             genreId: movie.genre._id,
             numberInStock: movie.numberInStock,
             dailyRentalRate: movie.dailyRentalRate
         };
     }

     doSubmit = async () => {
         const { data } = this.state;
         try{
         await saveMovie(data);
         toast("Done with successfully");
         this.props.history.push("/movies");
         }catch(ex){
         toast.error(ex.response.data);
         }
         
     }
     
    render() { 
        return (
            <div>
               <h1>Movie Form</h1>
               <form onSubmit={this.handleSubmit}>
               {this.renderInput("title","Title","text")}
               {this.renderSelect("genreId","Genre",this.state.genres)}
               {this.renderInput("numberInStock", "Number in Stock", "number")}
               {this.renderInput("dailyRentalRate","Rate","number")}
               {this.renderButton('Save')}
               </form>
            </div>
         );
    }
}
 
export default MovieForm;