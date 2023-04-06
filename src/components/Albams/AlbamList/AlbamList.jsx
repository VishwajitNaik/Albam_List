import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MovieServices } from '../../../services/MoviesServices';
import Spinner from '../../spinner/Spinner';

const AlbamList = () => {

  let [query, setQuery] = useState ({
    text : ''
  })

  let [state, setState] = useState({
    loading : false,
    albams : [],
    filteredAlbams : [],
    errorMessage : ''
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      setState({...state, loading:true});
      let response = await MovieServices.getAllMovies();
      // console.log(response.data);
      setState({
        ...state,
        loading: false,
        albams: response.data,
        filteredAlbams: response.data
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message
      });
    }
  }, []);

  //delete Albam
  let clickdelete = async (contactId)=>{
      try{
        let response = await MovieServices.deleteAlbam(contactId);
        if(response){
          setState({...state, loading:true});
          let response = await MovieServices.getAllMovies();
          // console.log(response.data);
          setState({
            ...state,
            loading: false,
            albams: response.data,
            filteredAlbams: response.data
          });
        }
      }catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message
        });
      }
  }

//search contacts
  let searchAlbams = (event) =>{
    setQuery({...query, text : event.target.value})
    let theAlbams = state.albams.filter(albam =>{
      return albam.name.toLowerCase().includes(event.target.value.toLowerCase())
    })  
    // console.log(theAlbams);
    setState({
      ...state,
      filteredAlbams: theAlbams
    })
  }

  let{loading, albams, filteredAlbams ,errorMessage} = state;

  return (
    <>
    {/* <pre>{JSON.stringify(albams)}</pre> */}
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <Link to={'/albam/add'} className="btn btn-primary"> 
                <i className='fa fa-plus-circle me-2' />
                New</Link>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi amet fugit nulla deserunt! Velit est numquam quo qui quas enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, possimus!</p>
              </div>
            </div>
            <div className='row'>
              <div className="col-md-6">
                <form action="" className='row'>
                <div className="col">
                <div className="mb-2">
                    <input
                    name='text'
                    value={query.text}
                    onChange={searchAlbams} 
                    type="text" 
                    className='form-control' 
                    placeholder='Search Names' 

                    />
                  </div>
                </div>
                <div className="col">
                <div className="mb-2">
                    <input type="text" className='btn btn-outline-dark' value="search" />
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
        loading ? <Spinner /> : <React.Fragment>
        <section className='contact-list'>
        <div className="container">
          <div className="row">
          {
            filteredAlbams.length > 0 &&
            filteredAlbams.map(albam =>{
              return (
                <div className="col-md-6" key={albam.id}>
              <div className="card my-2">
                <div className="card-body">

                  <div className="row align-item-center d-flex justify-content-around">
                  <div className="col-md-4">
                    <img src={albam.photo} alt="" className='img-fluid albam-img' />
                  </div>

                  <div className="col-md-7">
                    <ul className='list-group'>
                      <li className='list-group-item list-group-item-action'>
                        Name : <span className='fw-bold'>{albam.name}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        RelaseDate: <span className='fw-bold'>{albam.released}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Description: <span className='fw-bold'>{albam.Description}</span>
                      </li>
                      
                    </ul>
                  </div> 

                   <div className="col-md-1 d-flex flex-column align-items-center my-1">
                      {/* <Link to={`/albam/view/${albam.id}`} className='btn btn-warning my-1'>
                        <i className="fa fa-eye" />
                      </Link> */}
                      <Link to={`/albam/edit/${albam.id}`} className='btn btn-primary my-1'>
                        <i className='fa fa-pen' />
                      </Link>
                      <button className='btn btn-danger' onClick={() => clickdelete(albam.id)}>
                         <i className='fa fa-trash' />         
                      </button>
                   </div> 
                  </div>  
                </div>
              </div>
            </div>
              )
            })
          }

          </div>
        </div>
      </section>
        </React.Fragment>
      }

    
    </>
  )
}

export default AlbamList