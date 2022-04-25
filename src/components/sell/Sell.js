import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import { Header } from '../header/Header'

export const Sell = () => {
  const { userInfo } = useAuth()

  return (
    <div>
      <Header />
      
      <div className="container py-5">

        <div className="row">
          <form>
            <h1 className='fw-bold' style={{fontSize: '100px'}}>Sell Property</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis repudiandae voluptatibus quo nostrum ex provident ipsa sunt, culpa, possimus non? Voluptatem error blanditiis, obcaecati neque officia nobis nesciunt alias!</p>
              <hr />
          {}

          {userInfo?
            <div className="row mt-5">
            
            <div className="col">

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="first">First Name</label>
                  <input type="text" className="form-control" placeholder="" id="first" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="last">Last Name</label>
                  <input type="text" className="form-control" placeholder="" id="last" />
                </div>
              </div>
            
            </div>

            <div className="row">
              <div className="col-12">

                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="email"/>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-12">

                <div className="form-group">
                  <label htmlFor="email">Message </label> <br />
                  <textarea className='w-100' name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>

            </div>

            <button type='button' className="btn btn-primary mt-1">Submit</button>

            </div>
          </div>
          : 
          <div>
            <h1>Please login to sell your property</h1>
            <Link to='/login'> <button className='btn btn-dark p-5 fs-4 py-3 m-1'>login</button> </Link>
          </div>
          }



        
          </form>
        </div>

      </div>
    
    </div>
  )
}
