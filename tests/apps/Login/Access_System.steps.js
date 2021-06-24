
import {defineFeature, loadFeature} from 'jest-cucumber';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormLogin from "../../../src/components/FormLogin";

const feature = loadFeature('./tests/apps/features/Access_System.feature');

defineFeature(feature, test => {
    test('El usuario ingresando datos validos', ({given, when, and, then}) => {
        const submit = jest.fn();
        given('que el usuario visualiza el formulario para ingresar al sistema', () => {
            render(<FormLogin />);
        });

        when(/^ingrese nickname "(.*)" o "(.*)"$/, (nickname, email) => {
            const user = screen.getByLabelText(/usuario/i);
            userEvent.type(user,nickname);
        });

        and(/^su contraseña "(.*)"$/, (key) => {
            const password = screen.getByLabelText(/password/i);
            userEvent.type(password,key);
        });

        and('seleccione ingresar', () => {
            const  button = screen.getByRole('button', {name: /enviar/i});
            userEvent.click(button);
        });

        then('el sistema valida que el nickname y contraseña son validos', () => {
            expect(submit).toHaveBeenCalled({
                code :'200'
            });
        });

        and('redirecciona a la pagina de inicio de Notificaciones.', () => {

        });
    });


});