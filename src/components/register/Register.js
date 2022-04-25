import React, {  useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import { useNavigate } from "react-router-dom";
import { Header } from '../header/Header'
import './register.css'
import axios from 'axios';


export const Register = () => {
  
  const {  } = useAuth()
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [disabled, setDisabled] = useState(false)

  const [inputValues, setInputValues] = useState({
    fileInput: "",
    imgInput: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    age: "",
    dob: "",
    address: "",
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
    setDisabled(true)

    axios({
      method: 'post',
      url: "http://localhost:5000/authregister",
      data: {
        email: inputValues.email , 
        phoneNumber: inputValues.phoneNumber, 
        password: inputValues.password,
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        age: inputValues.age,
        dob: inputValues.dob,
        address: inputValues.address,
      },
    }).then(res => {
        if(res.data.status == 200) {
          console.log(res.data.message);
          navigate('/login')
        }
        
        setDisabled(false)
        if(inputValues.password !== inputValues.confirmPassword) {
          return setError('passwords do not match')
          setDisabled(true)
        } 
        setError(res.data.message)
        return
      
    })

  }

  return (
    <div>
      <Header />
      
      
      <div className="container my-5">
            <div className="row">
                <div className="col-12 registration_form">

                  <div className="col-12 ">
                    <div className="row justify-content-center">
                       <img className='col-6 d-none d-lg-block p-0' src="https://images.pexels.com/photos/421655/pexels-photo-421655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />

                      <div className="col">

                        <form onSubmit={HandleOnSubmit}>
                        <div className="row justify-content-center py-5">
                        <h1 className="text-start mt-5 mb-3 text-center" style={{fontSize: '100px',fontWeight: '1000'}}>Register</h1>

                       <div className='col-10'>
                        {error && <Alert variant='danger'>{error}</Alert>}
                       </div>
                          <label className='col-10 col-lg-5' htmlFor="input"  id="labelforpassport">
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                            <span id="span">Upload your passport copy</span>
                            <input className='file_input' id="fileInput" type="file" name='fileInput' value={inputValues.fileInput} onChange={handleInputChange}/>
                          </label>

                          <label className='col-10 col-lg-5' htmlFor="input"  id="labelfordp">
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                            <span id="span">Upload your image</span>
                            <input className='image_input' id="imgInput" type="file" name='imgInput' value={inputValues.fileInput} onChange={handleInputChange}/>
                          </label>

                          <input placeholder='first name' className='col-5 rounded fs-4 p-3 my-1' type="text" name='firstName' value={inputValues.firstName} onChange={handleInputChange}/>
                          <input placeholder='last name' className='col-5 rounded fs-4 p-3 my-1' type="text" name='lastName' value={inputValues.lastName} onChange={handleInputChange}/>
                          <input placeholder='Email' className='col-10 rounded fs-4 p-3 my-1' type="email" name='email' value={inputValues.email} onChange={handleInputChange}/>
                          <input placeholder='Phone Number' className='col-10 rounded fs-4 p-3 my-1' type="number" name='phoneNumber' value={inputValues.phoneNumber} onChange={handleInputChange}/>
                          <input placeholder='Password' className='col-5 rounded fs-4 p-3 my-1' type="password" name='password' value={inputValues.password} onChange={handleInputChange}/>
                          <input placeholder='Confirm Password' className='col-5 rounded fs-4 p-3 my-1' type="password" name='confirmPassword' value={inputValues.confirmPassword} onChange={handleInputChange}/>
                          <input placeholder='Age' className='col-5 rounded fs-4 p-3 my-1' type="number" name='age' value={inputValues.age} onChange={handleInputChange}/>
                          <input placeholder='dob' className='col-5 rounded fs-4 p-3 my-1' type="date" name='dob' value={inputValues.dob} onChange={handleInputChange}/>
                          <input placeholder='address' type="text" className='col-10 fs-4 p-3 my-1' name='address' value={inputValues.address} onChange={handleInputChange}/>

                          <div className="col-12 text-center">
                            <button type='submit' className="btn btn-color px-5 fs-3" disabled={disabled}>Register</button>      
                          <p className='fs-5 mt-3'>Already have an account? <br />
                            <Link className='' to="/login">Log In </Link> 
                          </p>
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
  )
}
