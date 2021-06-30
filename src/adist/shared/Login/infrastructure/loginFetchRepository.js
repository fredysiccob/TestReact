import LoginRepository from "../domain/loginRepository";

class LoginFetchRepository extends LoginRepository {

    async validate(user, password) {
        try {
            let data = {user: user, password: password};
            // let response = await fetch('https://jsonplaceholder.typicode.com/todos/1',  {
            //     method: 'POST',
            //     body: JSON.stringify(data),
            //     headers:{'Content-Type': 'application/json'}
            // });
            let response = null;
            if (user === "OSCOJOSE" && password === "Jesus-123") {
                response = await axios.get('https://my-json-server.typicode.com/fredysiccob/fakeAPI/posts/1');
            } else {
                response = await axios.get('https://my-json-server.typicode.com/fredysiccob/fakeAPI/posts/6');
            }
            return response.data;
        } catch (e) {
            return false;
        }
    }
}

export default LoginFetchRepository;