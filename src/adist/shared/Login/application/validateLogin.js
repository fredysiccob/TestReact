const ValidateLogin = async (user, password, repository) => {

    let response = await repository.validate(user, password);

    if (response.code === 200) {
        return true;
    }
    return false;
};

export default ValidateLogin;