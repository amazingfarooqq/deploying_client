import React, { useContext, useState } from 'react';

export const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [userInfo, setUserInfo] = useState(JSON.parse(sessionStorage.getItem('userinfo')))
      

    const values = {
        userInfo,
        setUserInfo,
        users,
        setUsers
    }


    return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}