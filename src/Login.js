import {Formik,Form, Field} from 'formik';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const navigate = useNavigate();
    return (
    <div>
        <h1>Login</h1>
        <Formik
            initialValues= {{email:'', password:''}}
            onSubmit = {()=> {
                navigate("/");
            }}
        >
            <Form>
                <label htmlFor='email'>Email:</label>
                <Field id="email" name="email" placeholder="jane@xyz.com" type="email"/>
                <label htmlFor="password">Password:</label>
                <Field id="password" name="password"/>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    </div>
    );
}
export default Login;