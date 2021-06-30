import ValidateLogin from "../../../../../src/adist/shared/Login/application/validateLogin";
import LoginFetchRepository from "../../../../../src/adist/shared/Login/infrastructure/loginFetchRepository";

jest.mock('../../../../../src/adist/shared/Login/infrastructure/loginFetchRepository');

describe('CaseUse ValidateLogin', function () {

    describe('Validar usuario y password', function () {
        it('deberia regresar true cuando se usuario es valido y password es valido', async () => {
            let user = 'OSCOJOSE';
            let password = 'Jesus-123';
            let repository = new LoginFetchRepository();
            repository.validate.mockReturnValue({
                'code': 200,
                'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                'user' : {
                    id : 15,
                    name : 'Jesus ',
                    lastname : 'Osornio'
                }
            });

            let response = await ValidateLogin(user, password, repository);
            expect(response).toEqual(true);
        });

        it('deberia regresar false cuando el usuario es invalido y password valido', async () => {
            let user = 'OSCOJOS';
            let password = 'Jesus-123';
            let repository = new LoginFetchRepository();
            repository.validate.mockReturnValue({
                'code': 500,
                'token' : null,
                'user' : null
            });

            let response = await ValidateLogin(user, password, repository);
            expect(response).toEqual(false);
        });

        it('deberia regresar false cuando el usuario es valido y password invalido', async () => {
            let user = 'OSCOJOSE';
            let password = 'Jesus-12';
            let repository = new LoginFetchRepository();
            repository.validate.mockReturnValue({
                'code': 500,
                'token' : null,
                'user' : null
            });

            let response = await ValidateLogin(user, password, repository);
            expect(response).toEqual(false);
        });

        it('deberia regresar true cuando el usuario es correo valido y password valido', async () => {
            let user = 'josornio@siccob.com.mx';
            let password = 'Jesus-123';
            let repository = new LoginFetchRepository();
            repository.validate.mockReturnValue({
                'code': 200,
                'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                'user' : {
                    id : 15,
                    name : 'Jesus ',
                    lastname : 'Osornio'
                }
            });

            let response = await ValidateLogin(user, password, repository);
            expect(response).toEqual(true);
        });
    });
});