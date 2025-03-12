
import React, { useState, useEffect } from 'react';
import VideogameService from '../services/VideogameService'; 
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './AddVideoGameStyles.css';


const AddVideoGameComponent = () => {

    const [name,setName] = useState('');
    const [category,setCategory] = useState('');
    const [platform,setPlatform] = useState('');
    const [rating,setRating] = useState();

    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateVideoGames = (e) =>{
        e.preventDefault();

        const videogame = {name,category,platform,rating};

        if(id){
            VideogameService.updateVideoGameById(id,videogame).then((response) =>{
                console.log(response.data);
                navigate("/videogames")
            }).catch(error=>{
                console.log(error);
            });
        }else{
            VideogameService.createVideoGame(videogame).then((response) =>{
                console.log(response.data);
                navigate("/videogames")
            }).catch(error=>{
                console.log(error);
            });
        }

       
    }

    useEffect(()=>{
        VideogameService.getVideoGameById(id).then((response)=>{
            setName(response.data.name);
            setCategory(response.data.category);
            setPlatform(response.data.platform);
            setRating(response.data.rating);
        }).catch(error =>{
            console.log(error);
        })
    },[])

    const title = () =>{
        if(id){
            return <h2 className='text-center '>Update VideoGame</h2>
        }else{
            return <h2 className='text-center'>Add Videogame</h2>
        }
    }
    
    return (
        
        <div className='container'>
          <div className='row'>
              <div className='card col-md-6 offset-md-3 '>
                  <h2 className='text-center' >{title()}</h2>
                  <div className='card-body'>
                      <form>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Name</label>
                              <input type = 'text' placeholder='Write the title of the video game here' name='name' className='form-control' value={name} onChange={(e)=> setName(e.target.value)} />
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Category</label>
                              <input type = 'text' placeholder='Write the category of the video game here' name='category' className='form-control' value={category} onChange={(e)=> setCategory(e.target.value)} />
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label'>Platform</label>
                              <select name='platform' className='form-control' value={platform} onChange={(e) => setPlatform(e.target.value)}>
                                <option value=''>Select a platform</option>
                                <option value='PC'>PC</option>
                                <option value='PlayStation'>PlayStation</option>
                                <option value='Xbox'>Xbox</option>
                                <option value='Nintendo Switch'>Nintendo Switch</option>
                                <option value='Mobile'>Mobile</option>
                            </select>
                          </div>
                          <div className='form-group mb-2'>
                              <label className='form-label' required>Rating</label>
                              <input type = 'number' placeholder='Give a rating for your video game here' name='rating' className='form-control' min="0" max="10" value={rating} onChange={(e)=> {
                                if(e.target.value >=0 )setRating(e.target.value)}}/>
                          </div>
                          <button className = "btn btn-success bg-dark " onClick={(e)=>saveOrUpdateVideoGames(e)}>Save</button>
                          &nbsp; &nbsp;
                          <Link to='/videogames' className='btn btn-danger'>Cancelar</Link>
                      </form>
                  </div>
              </div>
          </div>
        </div>
      
    );
};

export default AddVideoGameComponent;