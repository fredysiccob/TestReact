import React, {useEffect, useState} from 'react';
import ValidateLogin from "../../../adist/shared/Login/application/validateLogin";
import LoginFetchRepository from "../../../adist/shared/Login/infrastructure/loginFetchRepository";

const FormLogin = () => {

    window.localStorage.setItem('access', 'false');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [access, setAccess] = useState(false);

    useEffect(() => {
        setAccess(true);
    },[]);

    const handleUser = (e) => {
        setUser(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            let response = await ValidateLogin(user, password, new LoginFetchRepository());
            setAccess(response);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form>
            <div>
                <label htmlFor="user">Usuario</label>
                <input value={user} onChange={handleUser} id='user' type="text"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={handlePassword} id='password' type='password'/>
            </div>
            <button id='login' onClick={handleLogin}>Ingresar</button>
            <div role='alert-message'>
                {
                    !access? <p role='no-access'>Usuario y/o contraseña inválidos</p> : ''
                }</div>
        </form>
    );
};

export default FormLogin;