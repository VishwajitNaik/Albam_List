import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link,useParams } from 'react-router-dom'
import { MovieServices } from '../../../services/MoviesServices';
import Spinner from '../../spinner/Spinner';


const ViewAlbams = () => {

  let {contactId} = useParams();

  let [state, setState] = useState({
    loading: false,
    ambams: {},
    errorMessage: ''
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async ()=> {
      try{
        setState({...state, loading: true});
        let response = await MovieServices.getAlbms(contactId);
        // console.log(response.data);
        setState({
          ...state,
          loading: false,
          albams: response.data
        });
      }
      catch(error){
        setState({
          ...state,
          loading: false,
          errorMessage: error.message
        });
      }
  },[contactId])

  let {loading, albams, errorMessage}= state;

  return (
    <>
    <h2>{contactId}</h2>
      <section className='view-contact p-3'>
        <div className='coontainer'>
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-boald">View Content</p>
              <p className='fst-italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nostrum veniam laborum sit neque, fugit hic deserunt enim ullam, distinctio, blanditiis similique. Consectetur amet, sed ea consequatur quidem non veritatis.</p>
            </div>
          </div>
        </div>
      </section>
      {
        loading ? <Spinner /> : <React.Fragment>
            {/* // Check objject is epmty or not */}

              {
                Object.keys(albams).length > 0 &&
                <section className='view-content mt-3'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            <img src="https://th.bing.com/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&w=255&h=245&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" alt="" className='img-fluid albam-img' />
            </div>
            <div className="col-md-8 ">
              <ul className='list-group'>
                  <li className='list-group-item list-group-item-action'>
                    Title : <span className='fw-bold'>Vishwa</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Acotr: <span className='fw-bold'>Vishwa</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Producer: <span className='fw-bold'>Vishwa</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Description: <span className='fw-bold'>Vishwa</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Ratings: <span className='fw-bold'>Vishwa</span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Released : <span className='fw-bold'>Vishwa</span>
                  </li>
                        
                </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={"/albam/list"} className="btn btn-warning">Back</Link>
            </div>
          </div>
        </div>
      </section>


              }

        </React.Fragment>
      }
         
     
    </>
  )
}

export default ViewAlbams