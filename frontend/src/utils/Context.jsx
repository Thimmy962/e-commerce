import { createContext, useState, useEffect } from "react";
import {jwtDecode} from 'jwt-decode';
import {useNavigate} from 'react-router-dom'

const AuthContenxt = createContext()
export default AuthContenxt

export const AuthProvider = ({children}) => {


    let authTokens = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null //Check if tokens are available in localStorage
    const [tokens,setTokens] = useState(() => {return authTokens})
    const [user, setUser] = useState(() => {
        return tokens ? jwtDecode(tokens.access) : null
    })
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const updateToken = async () => {
        console.log("Updating");
        let res = await fetch('http://localhost:8000/account/token/refresh/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"refresh": tokens.refresh})
        });

    
        let data = await res.json(); // Correctly await the promise returned by res.json()

        if (res.status == 200) {
            setTokens(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem('tokens', JSON.stringify(data));
        } else {
            logout()
        }
    };

    const login = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data = {

            "email": e.target.email.value, 
            "password": e.target.password.value,
        }
        

        let res = await fetch('http://localhost:8000/account/token/',{
            'method': 'POST',
            'headers':
            {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })

            if(res.status === 200){ //If status is ok then do the following
                let data = await res.json()
                console.log(data)
                setTokens(data)
                setUser(jwtDecode(data.access))

                if(e.target.remember.checked == true){ // If logged in user checked the remember me box then save his info in localStorage
                    localStorage.setItem('tokens', JSON.stringify(data))
                }
                
                navigate('/') //return user to home page
            }
        else{
            logout()
        }
        setLoading(false)
    }


    const logout = () => {
        if(authTokens){
            localStorage.clear('tokens') //If there are tokens stored in the localStorage then delete if
        }

        setTokens(null)
        setUser(null)

        navigate('/')
    }

    useEffect(() => {
        let minutes = 4 * 60 * 1000
        let interval = setInterval(() => {
            if(tokens){
                updateToken()
            }
        }, minutes)

        return () => clearInterval(interval)

    }, [tokens,loading])

    const data = {
        user:user,
        tokens:tokens,
        login: login,
        logout:logout
    }
  return (
    <AuthContenxt.Provider value = {data}>
        {children}
    </AuthContenxt.Provider>
  )
}