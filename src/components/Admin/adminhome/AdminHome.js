import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { Header } from "../../header/Header";
import { AdminSection } from "./AdminSection";
import { UserSection } from "./UserSection";

export const AdminHome = () => {
  const {users, setUsers , userInfo } = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
      
    axios({
      method: 'post',
      url: "http://localhost:5000/profiles",
      // data: {
      //   checkid: checkid
      // },
    }).then(res => {
      if(res.data.status === 200) {
        setUsers(res.data.getUsers)  
      } 
      else {
        console.log('error');
      }
      // setError(res.data.message)
    }).catch(err => {
      console.log('error at admin');
    })
  }, [])


  useEffect(() => {
    console.log(userInfo);
    if (userInfo && userInfo.role === 'owner') {
      navigate("/dashboard");
    } else if(userInfo && userInfo.role === 'admin') {
      navigate("/dashboard");
    }else if(userInfo && userInfo.role === 'user') {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <div>
      <Header />
      <AdminSection />
      <UserSection />
    </div>
  );
};
