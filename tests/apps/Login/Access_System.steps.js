
import {defineFeature, loadFeature} from 'jest-cucumber';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormLogin from "../../../src/components/FormLogin";
import React from "react";

const feature = loadFeature('./tests/apps/features/Access_System.feature');

defineFeature(feature, test => {
    test('El usuario ingresando datos validos', ({given, when, and, then}) => {
        const submit = jest.fn();
        submit.mockImplementation((e)=>{
            e.preventDefault();
            return { code :'200' }
        });
        let component;

        given('que el usuario visualiza el formulario para ingresar al sistema', () => {
            component = render(<FormLogin handleSubmmit={submit}/>);
        });

        when(/^ingrese nickname "(.*)" o "(.*)"$/, (nickname, email) => {
            console.log(nickname,email);
            const user = screen.getByLabelText(/usuario/i);
            userEvent.type(user,nickname);
            console.log(user);
        });

        and(/^su contraseña "(.*)"$/, (key) => {
            const password = screen.getByLabelText(/password/i);
            userEvent.type(password,key);
        });

        and('seleccione ingresar', () => {
            const  button = screen.getByRole('button', {name: /enviar/i});
            userEvent.click(button);
            expect(submit).toHaveBeenCalledTimes(1);
        });

        then('el sistema valida que el nickname y contraseña son validos', () => {
            expect(submit).toHaveReturnedWith({
                code :'200'
            });
            // component.debug();
        });

        and('redirecciona a la pagina de inicio de Notificaciones.', () => {

        });
    });
});