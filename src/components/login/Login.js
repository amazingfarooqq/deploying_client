import axios from "axios";
import React, { useContext, useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Header } from "../header/Header";
import './login.css';

export const Login = () => {
  const { userSession , setUserSession , userInfo , setUserInfo} = useAuth()

  const navigate = useNavigate()
    
  const [error, setError] = useState('')

  // sendUserRole(userRole)

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  })
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const HandleOnSubmit = async (e) => {
    e.preventDefault()
    
    axios({
      method: 'post',
      url: "http://localhost:5000/authlogin",
      data: {
        email: inputValues.email , 
        password: inputValues.password,
      },
    }).then(res => {
      if(res.data.status === 200) {

        sessionStorage.setItem("userinfo", JSON.stringify(res.data.getUser));
        setUserInfo(JSON.parse(sessionStorage.getItem('userinfo')))
        
        // console.log(JSON.parse(sessionStorage.getItem('userinfo')));


        navigate('/')

        // res.data.role ? navigate('/admin') : navigate('/')
      } 
      setError(res.data.message)
    })
    
  }


  return (
    <div>
      <Header />
               {/* <img className="col-10 col-lg-6 mx-3" src="https://images.pexels.com/photos/10499817/pexels-photo-10499817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}
      
               <div className="container my-5">
            <div className="row">
                <div className="col-12 login_form">

                  <div className="col-12 ">
                    <div className="row justify-content-center">
                       <img className='col-6 d-none d-lg-block p-0' src="https://images.pexels.com/photos/10499817/pexels-photo-10499817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />

                      <div className="col">
                      <form onSubmit={HandleOnSubmit}>

                        <div className="row justify-content-center py-5">
                          <h1 className="text-start mt-5 mb-3 text-center" style={{fontSize: '100px',fontWeight: '1000'}}>Login</h1>

                          <div className='col-10'>
                             {error && <Alert variant='danger'>{error}</Alert>}
                          </div>
                            <input placeholder='Email' name='email' value={inputValues.email} onChange={handleInputChange} className='col-9 m-1 rounded fs-4 p-3 my-2' type="text" />
                            <input placeholder='Password' name='password' value={inputValues.password} onChange={handleInputChange} className='col-9 m-1 rounded fs-4 p-3 my-2' type="text" />
                            
                            <div className="col-12 text-center">
                              <button className="btn btn-color px-5 fs-3">Login</button>      
                            </div>
                        </div>   

                      </form>
                      

                      </div>
                      
                    </div>
                  </div>
              
                </div>
               
            </div>
        </div>
        
    </div>
  );
};
