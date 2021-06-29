import React, {useState} from 'react';
import ValidateLogin from "../../../adist/shared/Login/application/validateLogin";
import LoginFetchRepository from "../../../adist/shared/Login/infrastructure/loginFetchRepository";

const FormLogin = () => {

    window.localStorage.setItem('access', 'false');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleUser = (e) => {
        setUser(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        // try {
            e.preventDefault();
            let access = ValidateLogin(user, password, new LoginFetchRepository());
            window.localStorage.setItem('access', 'true');
        // } catch (e) {
        //     window.localStorage.setItem('access', 'false');
        // }
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
        </form>
    );
};

export default FormLogin;