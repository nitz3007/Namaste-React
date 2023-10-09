import {Formik,Form, Field} from 'formik';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const navigate = useNavigate();
    return (
    <div className='flex flex-col items-center my-20'>
        <h1 className='text-xl font-bold text-[#686b78]'>Login</h1>
        <Formik
            initialValues= {{email:'', password:''}}
            onSubmit = {()=> {
                navigate("/");
            }}
        >
            <Form className='flex flex-col mt-4 border-2 border-[#dcdee5] rounded-md px-16 py-8 w-[30rem]'>
                <label htmlFor='email' className='text-[#686b78] font-semibold'>Email:</label>
                <Field id="email" name="email" placeholder="jane@xyz.com" type="email" className="border-[#dcdee5] rounded border-2 px-4 py-1"/>
                <label htmlFor="password" className='text-[#686b78] font-semibold mt-6'>Password:</label>
                <Field id="password" name="password" placeholder='Enter Password...' type='password' className="border-[#dcdee5] rounded border-2 px-4 py-1"/>
                <button type="submit" className='mt-8 bg-[#fc8019] text-white px-4 py-2 rounded-md '>Login</button>
            </Form>
        </Formik>
    </div>
    );
}
export default Login;