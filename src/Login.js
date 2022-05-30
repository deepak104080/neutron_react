import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataAppContext } from './common/DataApp';

const Login = () => {
    const [username, setUserName] = useState('');
    const navigate = useNavigate();

    const updateUsernameFn = (event) => {
        setUserName(event.target.value);
    }

    const loginDetails = useContext(DataAppContext);
    console.log(loginDetails);

    const loginFn = () => {
        //api call
        //if verified - update on context
        loginDetails.setLogin(true);
        loginDetails.setUserName(username);
        //redirection
        navigate('/misc', {state: {username: username}});
        
    }

    useEffect(() => {
        //callApi();
        console.log('useeffect of login got triggered...');
    })
    
    return(
        <>
            <input type="text" onChange={updateUsernameFn} value={username} placeholder='Enter Username'/>
            <button onClick={loginFn}>Login</button>
        </>
    )
}


export default Login;