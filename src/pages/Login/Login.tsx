import React, {ChangeEvent, FC, useState} from "react";
import {useHistory} from 'react-router-dom'
import {initialStateType} from "../Register/Register";
import AxiosService from "../../axiosService";
import makeToast from "../../toaster";

const initialState: initialStateType = {
  email: '',
  password: ''
}

const Login: FC = () => {

  const [values, setValues] = useState<initialStateType>(initialState);
  const history = useHistory();


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.currentTarget;
    setValues({...values, [name]: value});
  }

  const submitHandler = async (): Promise<any> => {
    const {email, password}  = values;
    const axiosService: AxiosService = new AxiosService();
    try {
      const response = await axiosService.post(null, email!, password!);
      const data = await response.data;
      makeToast("success", data.message);
      history.push('/dashboard');
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="card">
      <div className="cardHeader">Login</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={values.email!}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={values.password!}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={submitHandler}>Login</button>
      </div>
    </div>
  );
}

export default Login;