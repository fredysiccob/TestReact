export class User {

    constructor(user, password) {
        this.nickname = this.validateUser(user);
        this.password = password;
    }

    validateUser(user){

        return user;
    }
    getCredentials(){
        return {
            user : '',
            password : ''
        }
    }
}