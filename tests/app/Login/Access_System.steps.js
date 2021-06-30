
import {defineFeature, loadFeature} from 'jest-cucumber';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import Login from "../../../src/app/components/views/Login";
import {waitFor} from "@babel/core/lib/gensync-utils/async";

const feature = loadFeature('./tests/app/features/Access_System.feature');

defineFeature(feature, test => {
    test('Ingresando al sistema', ({ given, when, then }) => {

        given('que el usuario esta en la pagina de login', async () => {
            render(<Login />);
        });

        when(/^ingresa nickname "(.*)" y password "(.*)"$/, (nickname, password) => {
            const user = screen.getByLabelText(/usuario/i);
            const passw = screen.getByLabelText(/password/i);
            userEvent.type(user, nickname);
            userEvent.type(passw, password);

            const button = screen.getByRole('button', {name: 'Ingresar'});
            await userEvent.click(button);
        });

        then('el sistema valida que el nickname y contraseña son validos', async () => {
            await waitFor(() => {
                expect(window.localStorage.getItem('access')).toEqual('true');
            })
        });
    });

    test('Error de acceso', ({ given, when, then, and }) => {
        given('que el usuario jesus osornio esta en la pagina de login', async () => {
            render(<Login />);
        });

        when(/^ingresa nickname "(.*)" y password "(.*)"$/, (nickname, password) => {
            const user = screen.getByLabelText(/usuario/i);
            const passw = screen.getByLabelText(/password/i);
            userEvent.type(user, nickname);
            userEvent.type(passw, password);

            const button = screen.getByRole('button', {name: 'Ingresar'});
            userEvent.click(button);
        });

        then('el sistema valida que el nickname y contraseña no son validos', () => {
            // expect(window.localStorage.getItem('access')).toEqual('false');
        });

        and(/^muestra un mensaje que “(.*)”$/, (message) => {
            expect(screen.getByLabelText(message)).toBeInTheDocument();
        });
    });

});