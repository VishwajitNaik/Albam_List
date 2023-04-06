import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { MovieServices } from '../../../services/MoviesServices';
import Spinner from '../../spinner/Spinner';


const EditAlbams = () => {
  let navigate = useNavigate(); 
  let {contactId} = useParams();

  let [edit, setEdit] = useState({
    loading : false,
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
  


  useEffect(() => {
    const fetchdata = async () => {
      try {
        setEdit({
          ...edit, 
          loading: true
        });
        let response = await MovieServices.getAlbms(contactId);
        setEdit({
          ...edit,
          loading: false,
          albams: response.data
        });
      } catch (error) {
        setEdit({
          ...edit,
          loading:false,
          errorMessage: error.message
        });
      }
    };
    fetchdata();
  }, [contactId]);
 
let updateInput = (event) => {
  setEdit({
    ...edit,
    albams:{
      ...edit.albams,
      [event.target.name] : event.target.value
    }
  })
} 


let submmitForm = async (event) => {
  event.preventDefault();
  try {
    let response = await MovieServices.updateAlbam(edit.albams, contactId)
    if (response) {
      navigate('/albam/list', { replace: true })
    }
  } catch (error) {
    setEdit({
      ...edit,
      errorMessage: error.message,
    })
    navigate(`/albam/edit/${contactId}`, { replace: false })
  }
}
  
let {loading, albams, groups, errorMessage} = edit; 

  return (
    <>
    {
      loading ? <Spinner /> : <React.Fragment>
 <section className='add-contact p3' >
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 text-primary fw-bold">Edit Albam</p>
            <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolor consequuntur, excepturi odio pariatur nostrum iure deleniti corrupti dolore dolorum officiis blanditiis inventore obcaecati aliquam ut, fugiat magni expedita debitis.</p>
          </div>
        </div>
        <div className="row align-item-center">
          <div className="col-md-4">
            <form action="" onSubmit={submmitForm}>
               <div className="mb-2">
                <input
                required="true"
                name='name'
                onChange={updateInput} 
                value={albams.name}
                type="text" 
                className='form-control' 
                placeholder='Title'
                
                 />
               </div>
               <div className="mb-2">
                <input
                required="true"
                name='photo'
                onChange={updateInput} 
                value={albams.photo}
                type="text" 
                className='form-control' 
                placeholder='Photo URL'
                
                 />
               </div>
               <div className="mb-2">
                <input 
                required="true"
                name='actor'
                onChange={updateInput} 
                value={albams.actor}
                type="text" 
                className='form-control' 
                placeholder='Actor' />
               </div>
               <div className="mb-2">
                <input
                required="true"
                name='producer'
                onChange={updateInput} 
                value={albams.producer} 
                type="text" 
                className='form-control' 
                placeholder='Producer' 

                />
               </div>
               <div className="mb-2">
                <input 
                required="true"
                name='Description'
                onChange={updateInput} 
                value={albams.Description}
                type="text" 
                className='form-control' 
                placeholder='Description' 

                />
               </div>
               <div className="mb-2">
                <input 
                required="true"
                name='ratings'
                onChange={updateInput} 
                value={albams.ratings}
                type="text" 
                className='form-control' 
                placeholder='ratings' 

                />
               </div>
               <div className="mb-2">
                <input
                required="true"
                name='released'
                onChange={updateInput} 
                value={albams.released} 
                type="date" 
                className='form-control' 
                placeholder='Released' />
               </div>
               <div>
                <input type="submit" className='btn btn-primary' value="Update" />
                <Link to={'/albam/list'} className="btn btn-dark ms-2">Cancel</Link>
               </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src={albams.photo} alt="" className='img-fluid albam-img' />
          </div>
        </div>
      </div>
    </section>
      </React.Fragment>
    }
   
  </>
  )
}

export default EditAlbams