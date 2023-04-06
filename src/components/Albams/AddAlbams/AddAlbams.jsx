import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MovieServices } from '../../../services/MoviesServices';

const AddAlbams = () => {
  
  let navigate = useNavigate(); 

  let [addAlbam, setAddAlbam] = useState({
    loading: false,
    albams:{
      name: '',
      photo:'',
      actor : '',
      producer : '',
      Description : '',
      ratings:'',
      released : ''
    },
    groups : [],
    errorMessage : ''
  });

  let updateInput = (event) =>{
    setAddAlbam({
      ...addAlbam,
      albams: {
        ...addAlbam.albams,
        [event.target.name] : event.target.value
      }
    })
  }
 

  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await MovieServices.createAlbams(addAlbam.albams)
      if (response) {
        navigate('/albam/list', { replace: true })
      }
    } catch (error) {
      setAddAlbam({
        ...addAlbam,
        errorMessage: error.message,
      })
      navigate('/albam/add', { replace: false })
    }
  };
  

  let {loading, albams, groups, errorMessage} =addAlbam;

  return (
    <>
    <pre>{JSON.stringify(addAlbam.albams)}</pre>
      <section className='add-contact p3' >
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Add Albams</p>
              <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolor consequuntur, excepturi odio pariatur nostrum iure deleniti corrupti dolore dolorum officiis blanditiis inventore obcaecati aliquam ut, fugiat magni expedita debitis.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form action="" onSubmit={submitForm}>
                 <div className="mb-2">
                  <input
                  required= {true}
                  name='name'
                  value={albams.name} 
                  onChange={updateInput}
                  type="text"
                  className='form-control'
                  placeholder='Title'
                  
                   />
                 </div>
                 <div className="mb-2">
                  <input
                  required= {true}
                  name='photo'
                  value={albams.photo} 
                  onChange={updateInput}
                  type="text"
                  className='form-control'
                  placeholder='Photo URL'
                  
                   /> 
                 </div>
                 <div className="mb-2">
                  <input 
                  type="text"
                  className='form-control' 
                  placeholder='Actor'
                  required= {true}
                  name='actor'
                  value={albams.actor} 
                  onChange={updateInput}
                   />
                 </div>
                 <div className="mb-2">
                  <input 
                  type="text" 
                  className='form-control' 
                  placeholder='Producer'
                  required= {true}
                  name='producer'
                  value={albams.producer} 
                  onChange={updateInput}
                   />
                 </div>
                 <div className="mb-2">
                  <input
                  required= {true}
                  name='Description'
                  value={albams.Description} 
                  onChange={updateInput} 
                  type="text" 
                  className='form-control' 
                  placeholder='Description' />
                 </div>
                 <div className="mb-2">
                  <input 
                  type="text" 
                  className='form-control' 
                  placeholder='ratings'
                  required= {true}
                  name='ratings'
                  value={albams.ratings} 
                  onChange={updateInput} 
                   />
                 </div>
                 <div className="mb-2">
                  <input 
                  type="date" 
                  className='form-control' 
                  placeholder='Released'
                  required= {true}
                  name='released'
                  value={albams.released} 
                  onChange={updateInput} 
                   />
                 </div>
                 <div>
                  <input type="submit" className='btn btn-success' value="Create" />
                  <Link to={'/albam/list'} className="btn btn-dark ms-2">Cancel</Link>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddAlbams