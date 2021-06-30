
const ValidateLogin = async (user, password, repository) => {

    let response = await repository.validate(user, password);

    if (response.code === 200) {
        window.localStorage.setItem('access', 'true');
        return true;
    }
    window.localStorage.setItem('access', 'false');
    return false;
};

export default ValidateLogin;