

const ValidateLogin = (user, password, repository) => {

    let response = repository.validate(user, password);
    return response;
};

export default ValidateLogin;