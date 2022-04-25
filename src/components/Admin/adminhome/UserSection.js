import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

export const UserSection = () => {
    const {users, setUsers , userInfo } = useAuth()
    // console.log(checkid);
    let count = 1

  return (

    <div className='container mt-5'>
      {userInfo && userInfo.role === 'user' &&
            <>

              <div className="row justify-content-around" style={{display: 'flex', justifyItems: 'center'}}>
                <div className="col-4">
                 <img className="w-100" height={350} src="https://www.pngitem.com/pimgs/m/22-224000_profile-pic-dummy-png-transparent-png.png" alt="img" />
                </div>
                <div className="col-5">
                  <h2 className="fw-bold p-0 m-0">{userInfo.firstName} {userInfo.lastName}</h2>
                  <p>{userInfo.address}</p>

                  <div className="row">
                    <div className="col-12 fs-4"><h5 className="fw-bold" style={{display: 'inline'}}>Birthday</h5>: 12/12/12</div>
                    <div className="col-12 fs-4"><h5 className="fw-bold" style={{display: 'inline'}}>Age</h5>: {userInfo.age}</div>
                    <div className="col-12 fs-4"><h5 className="fw-bold" style={{display: 'inline'}}>Phone</h5>: {userInfo.phoneNumber}</div>
                    <div className="col-12 fs-4"><h5 className="fw-bold" style={{display: 'inline'}}>Email</h5>: {userInfo.email}</div>
                    <div className="col-12 fs-4"><h5 className="fw-bold" style={{display: 'inline'}}>Approvement</h5>: {userInfo.approvement ? <span className='text-success'>Approved</span> : <span className='text-danger'>Pending</span>}</div>


                  </div>
                </div>
              </div>
            
                {/* <div className="row px-5 justify-content-around"  style={{display: 'flex', alignItems: 'center'}}>
                   <div className="col-9 col-md-6 col-lg-5 text-start">
                        <img width={250} height={250} src="https://www.pngitem.com/pimgs/m/22-224000_profile-pic-dummy-png-transparent-png.png" alt="img" />
                    </div>
                    <div className="col-9 col-md-6 col-lg-4">
                        <h5>Name: {userInfo.firstName} {userInfo.lastName}</h5>
                        <h5>Email: {userInfo.email}</h5>
                        <h5>Approvement: {userInfo.approvement ? <span className='text-success'>Approved</span> : <span className='text-danger'>Pending</span>}</h5>
                        <h5>Age: {userInfo.age}</h5>
                        <h5>Date of birth: {userInfo.dob}</h5>
                        <h5>Address: {userInfo.address}</h5>
                    </div>

                    <div className="col-6">
                        <img width={"100%"} src="https://www.papertotravel.com/image/MP-582/N/0200-Datapage-%26-Page-1.jpg" alt="passport img" />
                    </div>
                   
                </div> */}
            </>
    
       }
    </div>
  )
}
