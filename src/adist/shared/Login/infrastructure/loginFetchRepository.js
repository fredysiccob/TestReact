import LoginRepository from "../domain/loginRepository";


class LoginFetchRepository extends LoginRepository{

    async validate(user,password){
        let data = { user : user, password : password};
        // let response = await fetch('https://jsonplaceholder.typicode.com/todos/1',  {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers:{'Content-Type': 'application/json'}
        // });
        let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

        return response.data;
    }
}

export default LoginFetchRepository;