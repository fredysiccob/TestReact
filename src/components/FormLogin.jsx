import React from 'react';

const FormLogin = ({ handleSubmmit}) => {
    return (
        <div>
            Formulario login
            <form action="" onSubmit={handleSubmmit}>
                <label htmlFor="usuario">usuario</label>
                <input id="usuario" type="text"/>
                <label htmlFor="password">password</label>
                <input id="password" type="text"/>
                <button name='enviar' type='submit'>Enviar</button>
            </form>
        </div>
    );
};

export default FormLogin;