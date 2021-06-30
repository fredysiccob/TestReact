const ValidateLogin = (user, password, repository) => {

    let response = repository.validate(user, password);

    if (response.code === 200) {
        return true;
    }
    return false;
};

export default ValidateLogin;