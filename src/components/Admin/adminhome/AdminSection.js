import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { UserDetail } from './UserDetail';

export const AdminSection = () => {
    const {users, setUsers , userInfo } = useAuth()
    // console.log(checkid);
    let count = 1

  return (
    <div className='container mt-5'>
      {userInfo && (userInfo.role === 'admin' || userInfo.role === 'owner')  &&
         <>
            <h1>Users</h1>
            <table className="table  table-light border border-secondary">
          <thead className='border border-secondary'>
            <tr>
              <th className='border border-secondary' scope="col" >Id</th>
              <th className='border border-secondary' scope="col" >First</th>
              <th className='border border-secondary' scope="col" >Last</th>
              <th className='border border-secondary' scope="col" >Email</th>
              <th className='border border-secondary' scope="col" >Phone</th>
              {/* <th className='border border-secondary' scope="col" >age</th> */}
              <th className='border border-secondary' scope="col" >address</th>
              {/* <th className='border border-secondary' scope="col" >dob</th> */}
              <th className='border border-secondary' scope="col" >Approvement</th>
              <th className="border border-secondary" scope="col">role</th>
            <th className='border border-secondary' scope="col" >Set</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              const {_id ,firstName , lastName , email ,phoneNumber , age , dob , role , address , approvement} = user
              return  <tr key={_id}>
              <th className='border border-secondary' scope="row">{count++}</th>
              <td className='border border-secondary'>{firstName}</td>
              <td className='border border-secondary'>{lastName}</td>
              <td className='border border-secondary'>{email}</td>
              <td className='border border-secondary'>{phoneNumber}</td>
              <td className='border border-secondary'>{address}</td>
              {/* <td className='border border-secondary'>{dob}</td> */}
              
              <td className='border border-secondary'> {approvement ? 'approved' : 'pending'}</td>
             

            
              <td className="border border-secondary">{role}</td>
              <td className="border border-secondary">
               <UserDetail />
              </td>

              {/* <td className='border border-secondary'> 
              {approvement ? 
                <button className='btn btn-danger' title='click to change to admin'>Remove</button>      
                : <button className='btn btn-success' title='click to change to admin'>Approve</button>   
              }
              </td> */}
              {/* {userInfo.role === 'owner' && 
              <td className="border border-secondary">
                <button className="btn btn-dark" title="click to change to admin">{role}</button>
              </td>
            } */}
            </tr>
            })
            }

          </tbody>
             </table>
         </>
       }
    </div>
  )
}
