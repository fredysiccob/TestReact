const ValidateCredential = require("../../../../src/Login/application/ValidateCredential");


describe('Login del sistema', ()=>{
    let repository = jest.fn();
    repository.mockImplementation( async () => {
        return { code : 200 };
    });
    test('deberia responder un codigo 200 con las credenciales correctas', async () => {
        let response =  await ValidateCredential('OSCOJOSE','Jesus-123', repository);
        expect(response).toEqual({ code : 200});
    });

    test('no tiene las credenciales correctas', () => {

    });

    test('usuario no se encuentra activo', () => {

    });
});