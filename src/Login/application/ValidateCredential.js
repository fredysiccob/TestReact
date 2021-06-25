import {User} from "../domain/User";

const ValidateCredential = async (nickname, password, repository) => {
    let user = new User(nickname, password);
    let response = await repository.validateUser(user);
    return response;
};

export default ValidateCredential;