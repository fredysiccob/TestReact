import {defineFeature, loadFeature} from 'jest-cucumber';
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import React from "react";

import Login from "../../../src/app/components/views/Login";


const feature = loadFeature('./tests/app/features/Access_System.feature');

defineFeature(feature, test => {
    let alert = null;
    beforeEach(() => {
    });

    test('Ingresando al sistema', ({given, when, then}) => {

        given('que el usuario esta en la pagina de login', () => {
            render(<Login/>);
        });

        when(/^ingresa nickname "(.*)" y password "(.*)"$/, async (nickname, password) => {
            const user = screen.getByLabelText(/usuario/i);
            const passw = screen.getByLabelText(/password/i);
            userEvent.type(user, nickname);
            userEvent.type(passw, password);

            const button = screen.getByRole('button', {name: 'Ingresar'});
            userEvent.click(button);
            alert = await screen.findByRole('alert-message');
        });

        then('el sistema valida que el nickname y contraseña son validos', async () => {
            expect(alert).toHaveTextContent('');
        });
    });

    test('Error de acceso', ({given, when, then, and}) => {
        given('que el usuario jesus osornio esta en la pagina de login', () => {
            render(<Login/>);
        });

        when(/^ingresa nickname "(.*)" y password "(.*)"$/, async (nickname, password) => {
            const user = screen.getByLabelText(/usuario/i);
            const passw = screen.getByLabelText(/password/i);
            userEvent.type(user, nickname);
            userEvent.type(passw, password);

            const button = screen.getByRole('button', {name: 'Ingresar'});
            userEvent.click(button);
            alert = await screen.findByRole('no-access');
        });

        then('el sistema valida que el nickname y contraseña no son validos', () => {

        });

        and(/^muestra un mensaje que “(.*)”$/, (message) => {
            expect(alert).toHaveTextContent(message);
        });
    });

});