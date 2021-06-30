import LoginFetchRepository from "../../../../../src/adist/shared/Login/infrastructure/loginFetchRepository";

describe('Repository LoginFetch', function () {

    describe('Validiar Usuario y password', () => {
        it('deberia resgresar token, code 200 y datos de usuario con los datos validos ', async () => {
            let user = 'OSCOJOSE';
            let password = 'Jesus-123';
            let repository = new LoginFetchRepository();

            let response = await repository.validate(user, password);

            expect(response).toEqual({
                'id': 1,
                'code': 200,
                'taken' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                'user' : {
                    id : 15,
                    name : 'Jesus',
                    lastname : 'Osornio'
                }
            });
        });
    });
});