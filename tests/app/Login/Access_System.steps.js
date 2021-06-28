
import {defineFeature, loadFeature} from 'jest-cucumber';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

const feature = loadFeature('./tests/app/features/Access_System.feature');

defineFeature(feature, test => {
    test('Ingresando al sistema', ({ given, when, then }) => {
        const validateCredencials = jest.fn(() => 200);
        given('que el usuario esta en la pagina de login', () => {
            render(<Login validate={validateCredencials}/>);
        });

        when(/^ingresa nickname "(.*)" y "(.*)"$/, (nickname, password) => {
            const user = screen.getByLabelText(/usuario/i);
            const passw = screen.getByLabelText(/password/i);
            userEvent.type(user, nickname);
            userEvent.type(passw, password);

            const button = screen.getByRole('button', {name: 'ingresar'});
            userEvent.click(button);
        });

        then('el sistema valida que el nickname y contraseña son validos', () => {
            expect(validateCredencials).toHaveReturned();
        });
    });
});