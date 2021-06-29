import ValidateLogin from "../../../../../src/adist/shared/Login/application/validateLogin";

describe('CaseUse ValidateLogin', function () {

    it('deberia regresar true cuando se ingresa usuario y password validos', async () => {
        let user = 'OSCOJOSE';
        let password = 'Jesus-123';
        let repository = jest.fn();

        let response = await ValidateLogin(user,password, repository);

        expect(response).toBeTruthy();
    });

    it('deberia regresar false cuando se ingresa usuario y password invalidos', async () => {
        let user = 'OSCOJOSE';
        let password = 'Jesus-123';
        let repository = jest.mock('../../../../../src/adist/shared/Login/infrastructure/loginFetchRepository', ()=>{
            return jest.fn().mockImplementation(() => {
                return {validate: function (user,password){}};
            });
        });


        let response = await ValidateLogin(user,password, repository);

        expect(response).toBeFalsy();
    });
});